import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../App";
import { PageDiv } from "../../components/PageDiv";
import { ISongs, SongStatusEnum, addSong, deleteSong, getMySongs, updateSong } from "../../utils/songsApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FaEdit, FaPlus, FaTicketAlt, FaTimes, FaTrash } from "react-icons/fa";
import { Id, ToastContainer, toast } from 'react-toastify'
import { Pagination } from "../../components/Pagination/Pagination";

interface iEdit {
    title: string,
    artist: string,
    status: SongStatusEnum
}

export default function AllSongs() {

    const [newRow, setNewRow] = useState(false);
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('')
    const [status, setStatus] = useState<SongStatusEnum>();
    const [editId, setEditId] = useState<number>();
    const [editObj, setEditObj] = useState<iEdit>();



    const userContext = useContext(UserContext);

    const toastId = useRef<Id | null>(null);
    const notify = (txt: string) => toastId.current = toast(txt, { type: toast.TYPE.INFO, autoClose: false });
    const updateSuccess = (txt: string) => toast.update(toastId.current!, { render: txt, type: toast.TYPE.SUCCESS, autoClose: 5000 });
    const updateFailure = (txt: string) => toast.update(toastId.current!, { render: txt, type: toast.TYPE.ERROR, autoClose: 5000 });

    const [pageSize, setPageSize] = useState(25);
    const [page, setPage] = useState(1);

    const toastErrId = useRef<Id | null>(null);
    const errNotify = (txt: string) => {
        toastErrId.current = toast(txt, { type: toast.TYPE.ERROR, autoClose: 5000 });
    }

    const fetchSongs = async function () {
        return await getMySongs(userContext.userJWT!, (page-1)*pageSize, pageSize);
    }

    const queryClient = useQueryClient();

    const delSong = useMutation({
        mutationFn: (id: number) => {
            notify('Deleting Song')
            return deleteSong(userContext.userJWT!, id)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['songs']);
            updateSuccess('Deleted song');

        },
        onError: () => {
            updateFailure('Failure deleting song')
        }
    })

    const songMut = useMutation({
        mutationFn: (id?: number) => {
            if (id) {
                notify('Updating Song');
                return updateSong(userContext.userJWT!, editObj!.artist, editObj!.title, editObj!.status, id);
            }
            notify('Adding Song');
            return addSong(userContext.userJWT!, artist, song, status!)
        },
        onSuccess: () => {
            updateSuccess('Added Song');
            setEditId(undefined);
            setEditObj(undefined)
            queryClient.invalidateQueries()
            clearNewRow();
        },
        onError: () => {
            updateFailure('Err: Deleting song');
        }
    })

    const { data, error, isError, isLoading } = useQuery<ISongs, any>(['songs', page, pageSize], fetchSongs)
    // first argument is a string to cache and track the query result
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! </div>
    }

    const clearNewRow = () => {
        setArtist('')
        setSong('')
        setStatus(undefined)
        setNewRow(false)
    }

    const clickAdd = () => {

        let err = false;

        if (song.length === 0) {
            err = true;
            errNotify('Song cannot be empty');
        }

        if (artist.length === 0) {
            err = true;
            errNotify('Artist cannot be empty');
        }

        if (!status) {
            err = true;
            errNotify('Must chose a status');
        }

        if (err) { return }
        songMut.mutate(undefined);
    }

    const clickDelSong = (id: number) => {
        delSong.mutate(id);
    }

    const clickEdit = (id: number) => {
        setEditId(id);
        const c = data.data.songs.filter(i => i.id === id)[0];
        Object.keys(SongStatusEnum)[Object.values(SongStatusEnum).indexOf(c.status)]


        setEditObj({
            ...c,
            //@ts-ignore
            status: Object.keys(SongStatusEnum)[Object.values(SongStatusEnum).indexOf(c.status)]
        })
    }

    const clickSaveEdit = () => {
        let err = false;

        if (editObj?.title.length === 0) {
            err = true;
            errNotify('Song cannot be empty');
        }

        if (editObj?.artist.length === 0) {
            err = true;
            errNotify('Artist cannot be empty');
        }

        if (!editObj?.status) {
            err = true;
            errNotify('Must chose a status');
        }

        if (err) { return }

        songMut.mutate(editId);


    }

    return <PageDiv>
        <p>All songs</p>
        <table className="min-w-full text-left text-sm ">
            <thead className="text-lg">
                <tr>
                    <td>Artist</td>
                    <td>Song</td>
                    <td>Status</td>
                    <td className="">Update</td>
                    <td className="">Delete</td>
                </tr>
            </thead>
            <tbody>
                {data.data.songs.map(d => <>{d.id !== editId ? <tr key={d.id} className="pb-3">
                    <th>{d.artist}</th>
                    <th>{d.title}</th>
                    <th>{d.status}</th>
                    <th ><FaEdit onClick={() => { clickEdit(d.id) }} /></th>
                    <th ><FaTrash onClick={() => { clickDelSong(d.id) }} /></th>
                </tr> : <tr key={editId}>
                    <th><input value={editObj?.artist} onChange={(e) => { setEditObj({ ...editObj!, artist: e.target.value }) }} /></th>
                    <th><input value={editObj?.title} onChange={(e) => { setEditObj({ ...editObj!, title: e.target.value }) }} /></th>
                    <th><select value={editObj?.status} onChange={(e) => {
                        //@ts-ignore
                        setEditObj({ ...editObj!, status: e.target.value })
                    }}>
                        <option></option>
                        {Object.keys(SongStatusEnum).map(k => <option key={k} value={k}>
                            {//@ts-ignore
                                SongStatusEnum[k]}
                        </option>)}
                    </select>
                    </th>
                    <th><FaPlus onClick={clickSaveEdit} /></th>
                    <th><FaTimes onClick={() => { setEditId(undefined); setEditObj(undefined) }} /></th>
                </tr>} </>)}

                {newRow && <tr key='new' className="mt-3 mb-3">
                    <th><input value={artist} onChange={(e) => { setArtist(e.target.value) }} placeholder="Artist" /></th>
                    <th><input value={song} onChange={(e) => { setSong(e.target.value) }} placeholder="Song" /></th>

                    <th><select value={status} onChange={(e) => {
                        //@ts-ignore
                        setStatus(e.target.value)
                    }}>
                        <option></option>
                        {Object.keys(SongStatusEnum).map(k => <option key={k} value={k}>
                            {//@ts-ignore
                                SongStatusEnum[k]}
                        </option>)}
                    </select> </th>
                    <th> <FaPlus className="hover:cursor-pointer" onClick={clickAdd} /> </th>
                    <th> <FaTimes className="hover:cursor-pointer" onClick={clearNewRow} /> </th>
                </tr>}
            </tbody>
        </table>
        <Pagination page={page} pageSize={pageSize} setPage={setPage} setPageSize={setPageSize} count={data.data.count}/>

        {!newRow && <button onClick={() => { setNewRow(true) }} className="bg-blue-800 text-white rounded-lg p-1 mt-5">Add Song</button>}
    </PageDiv>
}