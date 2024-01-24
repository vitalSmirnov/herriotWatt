import {IPhoto} from "../Photo/IPhoto";

export interface IProjectDetailed {
    created_at: string
    description: string
    id: string
    name: string
    photos: IPhoto[]
    updated_at: string
}
