import { useContext, useRef, useState } from "react";
import { UserContextType, UserContext } from "../../App";
import { createRoutine, getMyRoutines, RoutinesType } from "../../utils/routineApi";
import { FaPlus, FaCheck, FaTimes, FaEdit, FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";


function Routines() {

    interface ErrorType {
        name?:string,
        description?:string
    }

    const userContext = useContext<UserContextType>(UserContext);
    const [newRoutine, setNewRoutine] = useState(false);
    const [errors, setErrors] = useState<ErrorType>({});
    const name = useRef<string|undefined>(undefined);
    const description = useRef<string|undefined>(undefined);
    const queryClient = useQueryClient();


    const fetchExercises = async function () {
        return await getMyRoutines(userContext.userJWT!);
    }

    const { data, error, isError, isLoading } = useQuery<RoutinesType, any>(['exercises'], fetchExercises)
    // first argument is a string to cache and track the query result
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! </div>
    }

    interface NewRoutineType {
        name: string,
        description: string
    }


    const clickNewRoutine = () => {
        const newErrors:ErrorType = {};
        let err = false;
        if(!name.current || name.current.length === 0 ){
            newErrors.name = 'Name must be supplied'
            err = true;
        }

        if(!description.current || description.current.length === 0 ){
            newErrors.description = 'description must be supplied'
            err = true;
        }

        if(err){
            setErrors(newErrors);
            return
        }
        setErrors({});

        createRoutine(userContext.userJWT!, name.current!, description.current!).then(d => {
            name.current = undefined;
            description.current = undefined;
            setNewRoutine(false);
            queryClient.invalidateQueries(['exercises']);
            
        }).catch(e => {

        });
    }

    const bottomRow = () => {
        if (newRoutine) {
            return <tr key='new'>
                <th ><input value={name.current} className="hover:cursor-pointer" onChange={(e)=>{name.current = e.target.value}}/>{errors.name&&<p className="text-red-600">{errors.name}</p>}</th>
                <th ><input value={description.current} className="hover:cursor-pointer" onChange={(e)=>{description.current = e.target.value}}/>{errors.description&&<p className="text-red-600">{errors.description}</p>}</th>
                <th>
                    <FaCheck  className="hover:cursor-pointer" onClick={clickNewRoutine}/>
                    
                </th>
                <th><FaTimes  className="hover:cursor-pointer" onClick={()=>{setNewRoutine(false)}}/></th>
            </tr>
        }

        return <tr>
            <th></th>
            <th></th>
            <th></th>
            <th><FaPlus className="hover:cursor-pointer" onClick={() => { setNewRoutine(true) }} /> </th>
            
        </tr>
    }

    return <div className="bg-slate-400 m-4 rounded-lg">
        <table className="min-w-full text-left text-sm ">
            <thead className="text-lg">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Practice</th>
                </tr>
            </thead>
            <tbody>

                {data!.data.map(d => <tr key={d.id}>
                    <th>{d.Name}</th>
                    <th>{d.description}</th>
                    <th><Link to={`/routine/${d.id}/edit`}><FaEdit /></Link></th>
                    <th><Link to={`/routine/${d.id}`}><FaMusic /></Link></th>
                </tr>
                )}
                {bottomRow()}
            </tbody>
        </table>

    </div >


}

export default Routines;