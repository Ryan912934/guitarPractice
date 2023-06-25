import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext, UserContextType } from "../../App";
import { AllExercisesType, getMyExercises } from "../../utils/exercisesApi";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { PageDiv } from "../../components/PageDiv";
import { useGetExercises } from "../../api/openApi/exercise/exercise";
import { ExerciseHistoryRequestData, ExerciseHistoryResponseDataObject, ExerciseResponse, ExerciseResponseDataObject } from "../../api/model";
import { Pagination } from "../../components/Pagination/Pagination";


function AllExercises(){

    const userContext = useContext<UserContextType>(UserContext);
    const [pageSize, setPageSize] = useState(25);
    const [page, setPage] = useState(1);

    const fetchExercises = async function (){
        return await getMyExercises(userContext.userJWT!, page, pageSize);
    } 

    const {data, error, isError, isLoading } = useQuery<AllExercisesType, any>(['exercises', page, pageSize], fetchExercises) 
    // first argument is a string to cache and track the query result
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! </div>
    }

    
    return <PageDiv>
        <Link to={'/exercise/new'}> <button className="bg-slate-800 text-white rounded-md m-2 p-1">Create Exercise</button> </Link>
        <table className="min-w-full text-left text-sm font-light">
            <thead>
                <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Latest Practice</th>
                <th>Practice Count</th>
                </tr>
            </thead>
            <tbody>
                {data!.data.exercises.map(d => <tr key={`${d.id}`}>
                        <td><Link to={`/exercise/edit/${d.id}`}><FaEdit /></Link> </td>
                        <td>{d.Name}</td>
                        <td>{d.Description}</td>
                        <td>{d.latestPractice}</td>
                        <td>{d.practiceCount}</td>
                    </tr>)}
            </tbody>
        </table>
        <Pagination page={page} setPage={setPage} pageSize={pageSize} setPageSize={setPageSize} count={data.data.count}/>
    </PageDiv>

}

export default AllExercises;