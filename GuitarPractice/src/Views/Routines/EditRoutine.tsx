import { useContext, useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp, FaCross, FaEdit, FaPlus, FaSave, FaTimes, FaUps } from "react-icons/fa";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router";
import { UserContextType, UserContext } from "../../App";
import { getRoutine, moveRoutine, RoutineType, updateRoutineDescription, updateRoutineName } from "../../utils/routineApi";
import { AddExercise } from "./AddExercise";

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

    const { data, error, isError, isLoading } = useQuery<RoutineType, any>(`exercises/${id}`, fetchRoutine)
    // first argument is a string to cache and track the query result
    if (isLoading || waitingRes) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! </div>
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
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data!.exercises.map(d => <tr key={d.id}>
                    <th>{d.exercise.Name}</th>
                    <th>{d.exercise.Description}</th>
                    <th><FaArrowUp className="hover:cursor-pointer" onClick={() => { moveUp(d.id) }} /></th>
                    <th><FaArrowDown className="hover:cursor-pointer" onClick={() => { moveDown(d.id) }} /></th>
                </tr>)}
            </tbody>
        </table>

        <div>
                    <AddExercise routineId={+id!}/>
        </div>
    </div>
}