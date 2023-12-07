import {IResponse} from "../../types/IResponse";

interface IPayload {
    description: string
    name: string
}

export interface ICreateMaterialPayload{
    payload: IPayload
}
export interface ICreateMaterialResponse extends IResponse{
    ID: string
}

export interface IUpdateMaterialPayload{
    mineralId: string
    payload: IPayload
}
export interface IUpdateMaterialResponse extends IResponse{
}

export interface ICreateRockPayload{
    payload: IPayload
}
export interface ICreateRockResponse extends IResponse{
    ID: string
}

export interface IUpdateRockPayload{
    rockId: string
    payload: IPayload
}
export interface IUpdateRockResponse extends IResponse{
}