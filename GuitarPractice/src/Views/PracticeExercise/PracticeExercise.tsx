import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { UserContextType, UserContext } from "../../App";
import {  AllExercisesType, ExerciseType, getExercise } from "../../utils/exercisesApi";
import { LogExercise } from "./LogExercise";
import { PageDiv } from "../../components/PageDiv";

type ExerciseParams = {
    id: string
}

export function PracticeExercise(){

    const {id} = useParams<ExerciseParams>();
    const [logExerciseOpen, setLogExerciseOpen] = useState(false);

    if(!id || !Number.isInteger(parseInt(id))){
        return <p>Invalid Route</p>
    };

    const userContext = useContext<UserContextType>(UserContext);
    if(!userContext.userJWT){
        return <p>Not logged In</p>
    }


    const fetchExercises = async function (){
        return await getExercise(userContext.userJWT!, parseInt(id));
    } 

    const {data, error, isError, isLoading } = useQuery<ExerciseType, any>([`exercise-${id}`], fetchExercises) 
    // first argument is a string to cache and track the query result
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! </div>
    }

    return <PageDiv>
        <h2>{data!.data.Name}</h2>
        <p>{data!.data.Description}</p>
        <p>{data!.data.guide}</p>
        <p>{data!.data.video}</p>

        <button className="p-2 bg-blue-400 text-white hover:bg-blue-800 m-1 rounded-lg" onClick={()=>{setLogExerciseOpen(true)}}>Log Practice</button>
        {logExerciseOpen && <LogExercise exerciseId={parseInt(id)} closeView={()=>{setLogExerciseOpen(false)}}/>}

    </PageDiv>
}

