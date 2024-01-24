import {IPhoto} from "../Photo/IPhoto";

export interface IProject {
    created_at: string,
    description: string,
    id: string,
    name: string,
    updated_at: string
    photos: IPhoto[]
}