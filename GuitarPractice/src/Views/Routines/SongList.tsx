import { useContext, useEffect, useState } from "react";
import { SongStatusEnum, getMySongsByStatus } from "../../utils/songsApi"
import { useQuery } from "@tanstack/react-query";
import { UserContext } from "../../App";
import Popup from "reactjs-popup";
import { FaPenSquare } from "react-icons/fa";


export function SongList() {

    const [status, setStatus] = useState<SongStatusEnum>(SongStatusEnum.LEARNING);
    const userContext = useContext(UserContext);
    const [popOpen, setPopOpen] = useState(false);

    const [statusPop, setStatusPop] = useState<SongStatusEnum>(SongStatusEnum.LEARNING);

    useEffect(()=>{
        setStatusPop(status)
    }, [status])

    const fetchSongs = async () => {
        return await getMySongsByStatus(userContext.userJWT!, status)
    }

    const { data, error, isError, isLoading } = useQuery([`songs/${status}`], (fetchSongs))

    if (isError) {
        return <p>Err</p>
    }

    if (isLoading) {
        return <p>Loadings</p>
    }


    return <div className="w-1/3">
        <div className="flex justify-between">
            {Object.values(SongStatusEnum).map(e => {
                if (e === status) {
                    return <div className="bg-black text-white m-2 rounded-md p-2"><p>{e}</p></div>
                }
                return <div className="bg-blue-400 m-2 rounded-md p-2 hover:cursor-pointer" onClick={() => { setStatus(e) }}><p>{e}</p></div>
            })}
        </div>
        <div>
            <table className="min-w-full text-left text-sm ">
                <thead className="text-lg">
                    <tr>
                        <th>
                            Artist
                        </th>
                        <th>
                            Song
                        </th>
                        <th>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.songs.map(d => <tr>
                        <th>{d.artist}</th>
                        <th>{d.title}</th>
                        <th>

                        </th>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
}