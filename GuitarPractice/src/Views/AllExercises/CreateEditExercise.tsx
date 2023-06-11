import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContextType, UserContext } from "../../App";
import { ExerciseType, createUpdateExercise, getExercise } from "../../utils/exercisesApi";
import { useQueryClient } from "@tanstack/react-query";



type ExerciseParams = {
    id?: string
}



interface Err {
    name?: string,
    metronome?: string,
}

export function CreateEditExercise(){

    const userContext = useContext<UserContextType>(UserContext);
    const { id } = useParams<ExerciseParams>();

    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [video, setVideo] = useState<string>();
    const [metronome, setMetronome] = useState<string>();
    const [guide, setGuide] = useState<string>();

    const queryClient = useQueryClient();
    const [err, setErr] = useState<Err>({});

    const [loading, setLoading] = useState(false);
    const nav = useNavigate();


    const validiate = () => {
        const newErr:Err = {};
        
        if(!name){
            newErr.name = 'Must have a name';
        }

        if(metronome && !['false', 'true'].includes(metronome?.toLowerCase())){
            newErr.metronome = 'Must be true or false';
        }

        if (!name || (metronome && !['false', 'true'].includes(metronome?.toLowerCase()))){
            setErr(newErr);
            return false;
        };

        setErr({});

        return true;
    }


    useEffect(()=>{
        if(id){
            setLoading(true);
            getExercise(userContext.userJWT!, parseInt(id)).then(data => {
                console.log(JSON.stringify(data))
                setName(data.data.Name)
                setDescription(data.data.Description)
                setVideo(data.data.video)
                setMetronome(data.data.metronome ? 'true' : 'false')
                setGuide(data.data.guide)
            }).finally(()=>{
                setLoading(false);
            });
        }
    },[])

    const submit = async () => {

        if(!validiate()){return}

        setLoading(true);

        let i:number|undefined;
        if(id){
            i = parseInt(id);
        }

        await createUpdateExercise(userContext.userJWT!, name!, description!, video!, metronome!, guide!, i);

    queryClient.invalidateQueries();        

        nav('/exercises');
        

    }

    const inputClass = 'w-full';
    return <div className="bg-slate-400 p-2 m-2 rounded-lg">

            {!id && `Create New Routine`}
            {id && `Edit Routine - ${name}`}

            <p>ID: {id}</p>

            <h3>Name</h3>
            <input className={inputClass} value={name} onChange={(e)=>{setName(e.target.value)}} />
            {err.name && <p className="text-red-600 font-bold">{err.name}</p>}

            <h3>Description</h3>
            <input className={inputClass} value={description} onChange={(e)=>{setDescription(e.target.value)}} />

            <h3>Video</h3>
            <input className={inputClass} value={video} onChange={(e)=>{setVideo(e.target.value)}} />

            <h3>Metronome</h3>
            <input className={inputClass} value={metronome} onChange={(e)=>{setMetronome(e.target.value)}} />
            {err.metronome && <p className="text-red-600 font-bold">{err.metronome}</p>}

            <h3>Guide</h3>
            <textarea className={`${inputClass} h-52`} value={guide} onChange={(e)=>{setGuide(e.target.value)}} />

            <div className="flex">
                <Link to={'/exercises'} ><button className="p-2 m-2 hover:cursor-pointer bg-slate-800 text-white rounded-lg">Cancel</button> </Link>
                <button onClick={submit} className="p-2 m-2 hover:cursor-pointer bg-slate-800 text-white rounded-lg">Save</button>
            </div>
    </div>
}