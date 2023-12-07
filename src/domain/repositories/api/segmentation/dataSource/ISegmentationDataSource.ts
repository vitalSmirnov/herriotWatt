import {IResponse} from "../../types/IResponse";
import {IPhotoSegmented} from "../../../../../entities/models/Photo/IPhoto";
import {ICoordination} from "../../../../../entities/models/Photo/ISegment";

interface AddPhotoPayload {
    file: File
    name: string
    description: string
}

export interface IGetPhotoPayload {
    photoId: string
}
export interface IGetPhotoResponse extends IResponse {
    photo: IPhotoSegmented
}

export interface IDeletePhotoPayload {
    photoId: string
}
export interface IDeletePhotoResponse extends IResponse {
}

export interface IAddPhotoProjectPayload {
    projectId: string
    bucket: string
    payload: AddPhotoPayload
}
export interface IAddPhotoProjectResponse extends IResponse{
}

export interface ICreateSegmentPayload {
    photoId: string
    mineralId: string
    payload: ICoordination[]
}
export interface ICreateSegmentResponse extends IResponse{
    ID: string
}

export interface IDeleteSegmentPayload {
    segmentId: string
}
export interface IDeleteSegmentResponse extends IResponse{
}