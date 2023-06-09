import axios from "axios"
import { apiUrl } from "./apiUrl";

export interface AllExercisesType {
    status: number,
    statusText: string,
    data: {
        count: number,
        exercises: {
            Description: string,
            Name: string,
            id: number,
            latestPractice: string,
            practiceCount: number
        }[]
    }
}

export async function getMyExercises(jwt: string, page:number, pageSize:number): Promise<AllExercisesType> {


    const data = await axios.get(`${apiUrl()}/exercises?start=${(page-1)*pageSize}&limit=${pageSize}`,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    return data;

}

export interface ExerciseType {
    data: {
        Description: string,
        Name: string,
        guide: string,
        id: number | undefined,
        metronome: boolean | undefined,
        video: string,
        comments: string[]
    }
}

export async function getExercise(jwt: string, id: number): Promise<ExerciseType> {


    const data = await axios.get(`${apiUrl()}/exercise/${id}`,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    console.log(data.data.comments)
    return data;
}

export async function addExercisePractice(jwt: string, exerciseId: number, time: number, bpm: number | undefined, speed: number | undefined, comments: string) {
    const data = await axios.post(`${apiUrl()}/exercise-history/`,
        {
            exerciseId,
            time,
            bpm,
            speed,
            comments,
        },
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            },
        })
    return data;
}


export async function createUpdateExercise(jwt: string, name: string, description: string, video: string, metronome: string, guide: string, id?: number) {

    const body = {
        name,
        description,
        video,
        metronome,
        guide
    }

    let data;

    console.log(body)

    if (id) {
        console.log('Update exercise')
        data = await axios.post(`${apiUrl()}/exercise/${id}/`, body, {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })
    } else {
        console.log('create exercise')
        data = await axios.post(`${apiUrl()}/exercise`, body, {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })
    }

    return data;

}