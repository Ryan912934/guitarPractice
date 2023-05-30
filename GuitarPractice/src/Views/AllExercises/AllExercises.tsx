import { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { UserContext, UserContextType } from "../../App";
import { AllExercisesType, getMyExercises } from "../../utils/exercisesApi";
import { FaEdit } from "react-icons/fa";


function AllExercises(){

    const userContext = useContext<UserContextType>(UserContext);


    const fetchExercises = async function (){
        return await getMyExercises(userContext.userJWT!);
    } 

    const {data, error, isError, isLoading } = useQuery<AllExercisesType, any>('exercises', fetchExercises) 
    // first argument is a string to cache and track the query result
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! </div>
    }

    return <div className="bg-slate-400 m-4 p-1 rounded-lg">
        <Link to={'/exercise/new'}> <button className="bg-slate-800 text-white rounded-md m-2 p-1">Create Exercise</button> </Link>
        <table className="min-w-full text-left text-sm font-light">
            <thead>
                <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Latest Practice</th>
                <th>Practice Count</th>
                <th>Practice Now</th>
                </tr>
            </thead>
            <tbody>
                {data!.data.map(d => <tr key={`${d.id}`}>
                        <td><Link to={`/exercise/edit/${d.id}`}><FaEdit /></Link> </td>
                        <td>{d.Name}</td>
                        <td>{d.Description}</td>
                        <td>{d.latestPractice}</td>
                        <td>{d.practiceCount}</td>
                        <td><Link to={`/exercise/${d.id}`}>Click Here</Link></td>
                    </tr>)}
            </tbody>
        </table>
    </div>

}

export default AllExercises;