export interface Task {
    name: string;
    description: string;
    id: number;
}

export function makeBlankTask(): Task {
    return {
        name: "",
        description: "",
        id: 0,
    }
}

export function setTaskName(task: Task, name: string) {
    return {...task, name : name};
}

export function setTaskDescription(task: Task, description: string) {
    return {...task, description : description};
}

export function setTaskId(task: Task, id: number) {
    return {...task, id : id};
}

