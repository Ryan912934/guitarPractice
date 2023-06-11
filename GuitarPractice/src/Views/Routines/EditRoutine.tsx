import { useContext, useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp, FaCross, FaEdit, FaPlus, FaSave, FaTimes, FaTrashAlt, FaUps } from "react-icons/fa";

import { useParams } from "react-router";
import { UserContextType, UserContext } from "../../App";
import { deleteExerciseFromRoutine, getRoutine, moveRoutine, RoutineType, updateRoutineDescription, updateRoutineExerciseDuration, updateRoutineName } from "../../utils/routineApi";
import { AddExercise } from "./AddExercise";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type RoutineParams = {
    id: string
}

export function EditRoutine() {

    const { id } = useParams<RoutineParams>();
    const userContext = useContext<UserContextType>(UserContext);
    const [waitingRes, setWaitingRes] = useState(false);
    const queryClient = useQueryClient();

    const [editName, setEditName] = useState(false);
    const [editDesc, setEditDesc] = useState(false);

    const [name, setName] = useState<string>();
    const [desc, setDesc] = useState<string>();


    const fetchRoutine = async () => {
        return await getRoutine(userContext.userJWT!, parseInt(id!));
    }

    const deleteMutation = useMutation({
        mutationFn: (order:number) => {
            return deleteExerciseFromRoutine(userContext.userJWT!, +id!, order);
        },
        onSuccess: () => {
            queryClient.invalidateQueries();
        }
    })

    interface UpdateDurationType {
        id:number,
        duration:number
    }

    const updateMutation = useMutation({
        mutationFn: (data:UpdateDurationType) => {
            return updateRoutineExerciseDuration(userContext.userJWT!, data.id, data.duration);
        },
        onSuccess: () => {
            queryClient.invalidateQueries();
        }
    })

    const { data, error, isError, isLoading } = useQuery<RoutineType, any>([`exercises/${id}`], fetchRoutine)
    // first argument is a string to cache and track the query result
    if (isLoading || waitingRes) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! </div>
    }
    if(deleteMutation.isLoading || updateMutation.isLoading){
        return <div>Updating</div>
    }

    interface NewRoutineType {
        name: string,
        description: string
    }

    const moveUp = (id: number) => {
        setWaitingRes(true);
        moveRoutine(userContext.userJWT!, id, true).then(r => {

        }).finally(() => {
            setWaitingRes(false);
            queryClient.invalidateQueries();
        })
    }

    const moveDown = (id: number) => {
        setWaitingRes(true);
        moveRoutine(userContext.userJWT!, id, false).then(r => {

        }).finally(() => {
            setWaitingRes(false);
            queryClient.invalidateQueries();
        })
    }

    const saveName = () => {
        if (!name || name.length < 1) { return }
        setWaitingRes(true);
        updateRoutineName(userContext.userJWT!, name!, parseInt(id!)).finally(() => {
            setWaitingRes(false);
            setEditName(false);
            queryClient.invalidateQueries();
        })
    }

    const saveDesc = () => {
        if (!desc || desc.length < 1) { return }
        setWaitingRes(true);
        updateRoutineDescription(userContext.userJWT!, desc!, parseInt(id!)).finally(() => {
            setWaitingRes(false);
            setEditDesc(false)
            queryClient.invalidateQueries();
        })
    } 

    const clickChangeDuraion = (id:number, cur:number|undefined, amount: number) => {
        
        let newDur = Math.max((cur || 0), 0);

        newDur += amount;

        if(newDur === cur){return};
        
        newDur = Math.max(newDur, 0);

        updateMutation.mutate({id, duration:newDur})

    }


    return <div className="bg-slate-400 m-3 rounded-lg p-2">
        {editName && <div className="flex">
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}></input>
            <FaSave className="hover:cursor-pointer" onClick={saveName} />
            <FaTimes className="hover:cursor-pointer" onClick={() => { setName(''); setEditName(false); }} />
        </div>
        }
        {!editName && <div className="flex">
            <h2 className="pr-4">Name: {data!.routine.Name}</h2>
            <FaEdit className="hover:cursor-pointer" onClick={() => { setEditName(true); setName(data!.routine.Name) }} />
        </div>}

        {!editDesc && <div>
            <h3>Description</h3>
            <div className="flex" >
                <p className="p-1">{data!.routine.description}</p>
                <FaEdit className="hover:cursor-pointer" onClick={() => { setEditDesc(true); setDesc(data!.routine.description) }} />
            </div>
        </div>}

        {editDesc && <div className="flex">
            <textarea className="w-3/4" value={desc} onChange={(e) => { setDesc(e.target.value) }}></textarea>
            <FaSave className="hover:cursor-pointer" onClick={saveDesc} />
            <FaTimes className="hover:cursor-pointer" onClick={() => { setDesc(''); setEditDesc(false); }} />
        </div>}

        <table className="text-left min-w-full">
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Description</th>
                    <th>Duration (Minutes)</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data!.exercises.map(d => <tr key={d.id}>
                    <th>{d.exercise.Name}</th>
                    <th>{d.exercise.Description}</th>
                    <th><div className="flex"> <div className="mr-6 absolute">{d.duration}</div> <div className="ml-10 flex">{[-10,-5,-1,1,5,10].map(i => <div onClick={()=>{clickChangeDuraion(d.id, d.duration, i)}} className="ml-2 mr-2 hover:cursor-pointer bg-slate-600 rounded-xl p-1 text-sm">{i> 0 && '+'}{i}</div>)}</div></div></th>
                    <th><FaArrowUp className="hover:cursor-pointer" onClick={() => { moveUp(d.id) }} /></th>
                    <th><FaArrowDown className="hover:cursor-pointer" onClick={() => { moveDown(d.id) }} /></th>
                    <th><FaTrashAlt className="hover:cursor-pointer" onClick={()=>{deleteMutation.mutate(d.order)}}/></th>
                </tr>)}
            </tbody>
        </table>

        <div>
                    <AddExercise routineId={+id!}/>
        </div>
    </div>
}