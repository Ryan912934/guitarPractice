import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "../../App";
import { getExercise, ExerciseType } from "../../utils/exercisesApi";

interface ExerciseInfoProps {
    id: number
}

export function ExerciseInfo(props: ExerciseInfoProps) {

    const userContext = useContext(UserContext);

    const fetchExercise = async () => {
        return await getExercise(userContext.userJWT!, props.id);
    }
    const { data, error, isError, isLoading } = useQuery<ExerciseType, any>([`exercise/${props.id}`], (fetchExercise))

    if (isError) {
        return <p>Err</p>
    }
    if (isLoading) {
        return <p>Loading</p>
    }

    const putInBox = (i: JSX.Element) => {
        return <div className="bg-slate-700 rounded-md p-2">
            {i}
        </div>
    }

    return <div className="flex space-x-2 pl-4 pr-4 ">
        <div className="w-1/2">
            <h2>Exercise Name: {data.data.Name}</h2>
            <p className="pt-3">Description: {data.data.Description}</p>
            <p className="pt-3">Guide: {data.data.guide}</p>
        </div>
        <div className="w-1/2">
           <p className=" ">Past Comments:</p>
                {data.data.comments.map(c => c && (
                    <div className="bg-blue-500 text-white p-1 rounded-lg m-3 pb-2">
                        <p>{c}</p>
                    </div>
                ))}
        </div>
    </div>

}