import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { RoutineType, getRoutine } from "../../utils/routineApi";
import { useContext, useRef, useState } from "react";
import { UserContextType, UserContext } from "../../App";
import { ExerciseInfo } from "./ExerciseInfo";
import { useTimer } from "../../hooks/useTimers";
import { addExercisePractice } from "../../utils/exercisesApi";
import { Id, toast } from "react-toastify";
import { PageDiv } from "../../components/PageDiv";
import Toggle from 'react-toggle'
import { SongList } from "./SongList";

export function PracticeRoutine() {

    type RoutineParams = {
        id: string
    }

    type ExerciseState = {
        started: boolean
        exercise: number
        finished: boolean
        submitted: boolean
    }

    const userContext = useContext<UserContextType>(UserContext);
    const { id } = useParams<RoutineParams>();
    const [eState, setEState] = useState<ExerciseState>({
        started: false,
        exercise: -1,
        finished: false,
        submitted: false
    })
    const [totalPracticeTime, setTotalPracticeTime] = useState(0);
    const timer = useTimer();
    const [inExercise, setInExercise] = useState(false);
    const [exerciseComments, setExerciseComments] = useState('');
    const [showSongs, setShowSongs] = useState(false);

    const toastId = useRef<Id|null>(null);
    const notify = () => toastId.current = toast("Saving", { type: toast.TYPE.INFO, autoClose: false });

    const updateSuccess = () => toast.update(toastId.current!, { render: "Saved Practice", type: toast.TYPE.SUCCESS, autoClose: 5000 });
    const updateFailure = () => toast.update(toastId.current!, { render: "Error Saving", type: toast.TYPE.ERROR, autoClose: 5000 });

    interface ExerciseUpdateData {
        exerciseId: number
        timeMinutes: number
        comments: string
    }


    const exercisePracticeMut = useMutation({
        mutationFn: (data: ExerciseUpdateData) => {
            notify();
            return addExercisePractice(userContext.userJWT!, data.exerciseId, data.timeMinutes, undefined, undefined, data.comments)
        },
        onSuccess: () => {
            updateSuccess()
            setEState({
                ...eState,
                exercise: eState.exercise + 1
            })
            timer.resetAndStart();
            setExerciseComments('');
        },
        onError: () => {
            updateFailure();
        }
    })



    const fetchRoutine = async () => {
        return await getRoutine(userContext.userJWT!, parseInt(id!));
    }


    const clickStart = () => {
        setEState({
            started: true,
            exercise: 0,
            finished: false,
            submitted: false
        })
    }

    const startCurExercise = () => {
        setInExercise(true);
        timer.resetAndStart();
    }

    if (eState.started && eState.exercise === -1) {
        return <p>Error ???</p>
    }


    const { data, error, isError, isLoading } = useQuery<RoutineType, any>([`exercises/${id}`], (fetchRoutine))
    // first argument is a string to cache and track the query result
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError || exercisePracticeMut.error) {
        return <div>Error! </div>
    }

    if (exercisePracticeMut.isLoading) {
        return <div>Updating</div>
    }

    if (data.exercises.length === 0) {
        return <div className="bg-slate-400 m-4 rounded-lg">
            <h1 className=" text-lg font-bold">{data.routine.Name}</h1>
            <p className="">{data.routine.description}</p>
            <h2>No Exercises To Practice</h2>
        </div>
    }

    if (!eState.started) {
        return <div className="bg-slate-400 m-4 rounded-lg">
            <h1 className="text-lg font-bold">{data.routine.Name}</h1>
            <p className="">{data.routine.description}</p>
            <div className="flex justify-center w-full "><button onClick={clickStart} className="bg-slate-700 rounded-lg text-white p-2 hover:cursor-pointer">Start Practice  (Will take approximately {data.exercises.reduce((a, c) => {
                if (c.duration) { return a + c.duration }
                return a;
            }, 0)} Minutes)</button></div>
        </div>
    }

    const isMoreExercises = (): boolean => {
        return eState.exercise < data.exercises.length - 1;
    }

    const pauseTimer = () => {
        timer.pause();
    }

    const resumeTimer = () => {
        timer.unPause();
    }

    const clickNextExercise = () => {

        exercisePracticeMut.mutate({
            exerciseId: data.exercises[eState.exercise ].exercise.id,
            timeMinutes: +(timer.curTime / (1000 * 60)).toFixed(2),
            comments: exerciseComments
        })
    }

    const clickFinish = () => {
        setTotalPracticeTime(totalPracticeTime + timer.curTime);
        exercisePracticeMut.mutate({
            exerciseId: data.exercises[eState.exercise].exercise.id,
            timeMinutes: +(timer.curTime / (1000 * 60)).toFixed(2),
            comments: exerciseComments
        })
        setEState({
            ...eState,
            finished: true
        })
        console.log('setting finished')

    }

    if (eState.finished) {
        const time = () => {
            const m = Math.floor((totalPracticeTime % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((totalPracticeTime % (1000 * 60)) / 1000);
            return `${m} minutes ${s} seconds`
        }
        return <div className="bg-slate-400 m-4 rounded-lg">
            <h1 className="text-lg font-bold">{data.routine.Name}</h1>
            <p className="pb-10">{data.routine.description}</p>
            <p>All finished, you spent {time()} practicing</p>

        </div>
    }

    if(eState.exercise >= data.exercises.length){
        console.log(eState)
        return <p>Err</p>
    }

    return <PageDiv>
        <h1 className="text-lg font-bold">{data.routine.Name}</h1>
        <p className="pb-10">{data.routine.description}</p>
        {eState.exercise !== -1 && <ExerciseInfo id={data.exercises[eState.exercise].exercise.id} />}
        {!inExercise && <button className="bg-slate-700 text-white rounded-lg p-2 mt-5" onClick={startCurExercise}>Start Exercise</button>}
        {inExercise && <p className="pl-4 font-bold pt-3">{timer.countDownDisplay(data!.exercises![eState.exercise]!.duration! || 0)}</p>}
        
        {inExercise && <div><p>Show Song List</p><Toggle checked={showSongs} onChange={(e)=>{setShowSongs(e.target.checked)}}/></div>}
        {showSongs&&<SongList />}

        {inExercise && <p className="pl-4 pt-3">Total time for exercise {timer.totalPracticeTime()}</p>}
        
        {inExercise && <div><h3 className="pl-4 font-bold pt-3">Comments on exercise</h3><textarea className="w-3/4" value={exerciseComments} onChange={(e) => { setExerciseComments(e.target.value) }} ></textarea></div>}
        
        {inExercise && timer.running && <button onClick={pauseTimer} className="bg-slate-700 text-white rounded-lg p-2 m-2">Pause Timer</button>}
        {inExercise && !timer.running && <button onClick={resumeTimer} className="bg-slate-700 text-white rounded-lg p-2 m-2">Resume Timer</button>}
        {inExercise && isMoreExercises() && <button onClick={clickNextExercise} className="bg-slate-700 text-white rounded-lg p-2"> Finish and Move to next exercise</button>}
        {inExercise && !isMoreExercises() && <button onClick={clickFinish} className="bg-slate-700 text-white rounded-lg p-2">Finish Practice Routine</button>}
    </PageDiv>
}