import {ISegment} from "./ISegment";

export interface IPhoto{
    bucket: string,
    created_at: string,
    description: string,
    id: string,
    key: string,
    name: string,
    update_at: string,
    url: string
}

export interface IPhotoSegmented extends ISegment, IPhoto{
}