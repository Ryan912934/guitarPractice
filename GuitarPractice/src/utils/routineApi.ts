import axios from "axios";

export interface RoutinesType {
    data: {
        Name: string,
        id: number,
        description: string,
    }[]
}

export async function getMyRoutines(jwt: string): Promise<RoutinesType> {
    const data = await axios.get('http://localhost:1337/api/routine/',
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
            Name: string,
            Description: string
        }
    }[]
}

export async function getRoutine(jwt: string, id: number): Promise<RoutineType> {
    const data = await axios.get(`http://localhost:1337/api/routine/${id}`,
        {
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${jwt}`
            }
        })

    return data.data;
}

export async function createRoutine(jwt: string, name: string, description: string) {
    const data = await axios.post('http://localhost:1337/api/routine/',
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

export async function updateRoutineName(jwt:string, txt:string, id: number){
    const data = await axios.post(`http://localhost:1337/api/routine/${id}/`, {
        name: txt
    }, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    })

    return data;
    
}

export async function updateRoutineDescription(jwt:string, txt:string, id: number){
    const data = await axios.post(`http://localhost:1337/api/routine/${id}/`, {
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

    const data = await axios.post(`http://localhost:1337/api/routine-exercise/${id}/${dir}`, {}, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    })


    return data;
}

export async function addExerciseToRoutine(jwt: string, routineId: number, exerciseId: number ){

    const data = await axios.post(`http://localhost:1337/api/routine-exercise/`, {routineId, exerciseId}, {
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    })

    return data;
}
