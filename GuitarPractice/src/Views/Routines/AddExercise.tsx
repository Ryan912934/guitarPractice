import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMyExercises, AllExercisesType, ExerciseType } from "../../utils/exercisesApi";
import { UserContext, UserContextType } from "../../App";
import { useContext, useState } from "react";
import { addExerciseToRoutine } from "../../utils/routineApi";

interface AddExerciseProps {
    routineId: number
}

export function AddExercise(props: AddExerciseProps) {

    const userContext = useContext<UserContextType>(UserContext);
    const [exerciseId, setExerciseId] = useState<number>(0);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => {return addExerciseToRoutine(userContext.userJWT!, props.routineId, exerciseId)},
        onSuccess: () => {queryClient.invalidateQueries()}
    })

    const fetchExercises = async function () {
        const d = await getMyExercises(userContext.userJWT!);
        setExerciseId(d.data[0].id);
        return d;
    }

    const { data, error, isError, isLoading } = useQuery<AllExercisesType, any>('exercises', fetchExercises)
    // first argument is a string to cache and track the query result
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! </div>
    }

    if(mutation.isLoading){
        return <div>posting</div>
    }



    return <div>
        <select value={exerciseId} onChange={(e) => { setExerciseId(+e.target.value) }}>
            {data!.data.map(d => (
                <option value={d.id} >{d.Name}</option>
            ))}
        </select>
        <button onClick={()=>{mutation.mutate()}} className="p-1 m-1 pl-2 pr-2 hover:cursor-pointer bg-slate-800 text-white rounded-lg">Add</button>

    </div>
}