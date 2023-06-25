import axios from "axios";
import { apiUrl } from "./apiUrl";

export enum SongStatusEnum {
    TO_LEARN = 'To Learn',
    LEARNING = 'Learning',
    PRACTISING = 'Practising',
    LEARNT_NOT_CURRENT = 'Learnt (Not Current)',
}

export interface ISongs {
    data: {
        count: number,
        songs: {
            artist: string,
            id: number,
            title: string,
            status: SongStatusEnum
        }[]

    }
}

export async function getMySongs(jwt: string, start: number, pageSize:number): Promise<ISongs> {
    const data = await axios.get(`${apiUrl()}/song/?start=${start}&limit=${pageSize}`,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })
    console.log(data)
    return data;
}

export async function getMySongsByStatus(jwt: string, status: string): Promise<ISongs> {
    const data = await axios.get(`${apiUrl()}/song/?status=${status}`,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    return data;
}


export async function deleteSong(jwt: string, id: number) {
    const data = await axios.delete(`${apiUrl()}/song/${id}`,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    return data;
}


interface IAddSong {

}

export async function addSong(jwt: string, artist: string, song: string, status: SongStatusEnum): Promise<IAddSong> {
    const data = await axios.post(`${apiUrl()}/song/`,
        {
            artist,
            song,
            //@ts-ignore
            status: SongStatusEnum[status]
        },
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    return data;
}

export async function updateSong(jwt: string, artist: string, song: string, status: SongStatusEnum, id: number): Promise<IAddSong> {

    let body: any = {}
    if (artist) {
        body.artist = artist;
    }

    if (song) {
        body.song = song
    }

    if (status) {
        //@ts-ignore
        body.status = SongStatusEnum[status]
    }

    const data = await axios.post(`${apiUrl()}/song/${id}`,
        body,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    return data;
}