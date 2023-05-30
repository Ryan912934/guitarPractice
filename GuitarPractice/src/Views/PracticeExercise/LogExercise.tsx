import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Id } from "react-toastify/dist/types";
import { UserContextType, UserContext } from "../../App";
import { addExercisePractice } from "../../utils/exercisesApi";

interface Props {
    closeView: () => void,
    exerciseId: number
}

interface Errors{
    time?:string,
    bpm?:string, 
    speed?:string
}

export function LogExercise(props:Props){


    const inputClass = "m-1"
    const buttonClass = "bg-blue-400 text-white hover:bg-blue-800 m-1 rounded-lg"

    const [time, setTime] = useState("");
    const [bpm, setBpm] = useState("");
    const [speed, setSpeed] = useState("");
    const [comments, setComments] = useState("");
    const [err, setErr] = useState<Errors>({});
    const [waiting, setWaiting] = useState(false);

    const userContext = useContext<UserContextType>(UserContext);


    const toastId = useRef<Id|null>(null);
    const notify = () => toastId.current = toast("Saving", { type: toast.TYPE.INFO, autoClose: false });

    const updateSuccess = () => toast.update(toastId.current!, { render: "Saved", type: toast.TYPE.SUCCESS, autoClose: 5000 });
    const updateFailure = () => toast.update(toastId.current!, { render: "Error Saving", type: toast.TYPE.ERROR, autoClose: 5000 });

    

    const submit = async () => {

        if(waiting){return}

        let errs = false;
        let newErrors:Errors = {};

        if(!parseInt(time)){
            newErrors = {...newErrors, time: 'Time must be a valid number'};
            errs = true;
        }

        if(bpm && bpm.length > 0 && !parseInt(bpm)){
            newErrors = {...newErrors, bpm: 'BPM must be a valid number is supplied'}
            errs = true;
        }

        if(speed && speed.length > 0 && !parseInt(speed)){
            newErrors = {...err, speed: 'Speed must be a valid number is supplied'};
            errs = true;
        }

        if(errs){
            setErr(newErrors);
            return;
        }
        setErr({});

        setWaiting(true);
        notify();
        addExercisePractice(userContext.userJWT!, props.exerciseId, parseInt(time), parseInt(bpm), parseInt(speed), comments).then(r => {
            setWaiting(false);
            props.closeView();
            updateSuccess();
        }).catch(e => {
            console.log('err');
            setWaiting(false);
            updateFailure();
        })



        
    } 

    return <div className="grid w-3/4 bg-gray-500 rounded-lg m-4 p-4">
        <p>log</p>
        <input value={time} onChange={(e)=>{setTime(e.target.value)}} className={inputClass} name="Practice Time (Minutes)" placeholder="Practice Time (Minutes)"/>
        {err.time && <p className="text-red-500">{err.time}</p>}
        <input value={bpm} onChange={(e)=>{setBpm(e.target.value)}}className={inputClass} name="BPM" placeholder="BPM"/>
        {err.bpm && <p className="text-red-500">{err.bpm}</p>}
        <input value={speed} onChange={(e)=>{setSpeed(e.target.value)}}className={inputClass} name="Speed" placeholder="Speed"/>
        {err.speed && <p className="text-red-500">{err.speed}</p>}
        <input value={comments} onChange={(e)=>{setComments(e.target.value)}}className={inputClass} name="Comments" placeholder="Comments"/>
        <button className={buttonClass} onClick={submit}>Submit</button>
        <button className={buttonClass} onClick={() => props.closeView()}>Cancel</button>
    </div>
}