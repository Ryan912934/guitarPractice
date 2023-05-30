import { useParams } from "react-router-dom";


export function PracticeRoutine(){

    type RoutineParams = {
        id: string
    }
      
    const {id} = useParams<RoutineParams>();

    return <div>
        <p>practice routine {id} </p>
    </div>
}