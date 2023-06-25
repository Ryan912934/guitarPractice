import axios from "axios";
import { apiUrl } from "./apiUrl";

export interface RoutinesType {
    data: {
        count: number,
        routines: {
            Name: string,
            id: number,
            description: string,
        }[]
    }
}

export async function getMyRoutines(jwt: string, start:number, pageSize:number): Promise<RoutinesType> {
    const data = await axios.get(`${apiUrl()}/routine/?start=${start}&limit=${pageSize}`,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    return data;
}

export interface RoutineType {
    routine: {
        id: number,
        Name: string,
        description: string
    },
    exercises: {
        id: number,
        order: number,
        exercise: {
            id: number,
            Name: string,
            Description: string
        },
        duration?: number,
    }[]
}

export async function getRoutine(jwt: string, id: number): Promise<RoutineType> {
    const data = await axios.get(`${apiUrl()}/routine/${id}`,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })
    return data.data;
}

export async function createRoutine(jwt: string, name: string, description: string) {
    const data = await axios.post(`${apiUrl()}/routine/`,
        {
            name,
            description
        },
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    return data;
}

export async function updateRoutineName(jwt: string, txt: string, id: number) {
    const data = await axios.post(`${apiUrl()}/routine/${id}/`, {
        name: txt
    }, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    })

    return data;

}

export async function updateRoutineDescription(jwt: string, txt: string, id: number) {
    const data = await axios.post(`${apiUrl()}/routine/${id}/`, {
        description: txt
    }, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    })

    return data;

}

export async function moveRoutine(jwt: string, id: number, up: boolean) {
    const dir = up ? 'up' : 'down';

    const data = await axios.post(`${apiUrl()}/routine-exercise/${id}/${dir}`, {}, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    })


    return data;
}

export async function addExerciseToRoutine(jwt: string, routineId: number, exerciseId: number) {

    const data = await axios.post(`${apiUrl()}/routine-exercise/`, { routineId, exerciseId }, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    })

    return data;
}

export async function deleteExerciseFromRoutine(jwt: string, routineId: number, order: number) {
    const data = await axios.delete(`${apiUrl()}/routine-exercise/${routineId}/${order}`, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    })

    return data;
}

export async function updateRoutineExerciseDuration(jwt: string, routineExerciseId: number, duration: number) {
    const data = await axios.post(`${apiUrl()}/routine-exercise/${routineExerciseId}`, { duration }, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    })

    return data;
}