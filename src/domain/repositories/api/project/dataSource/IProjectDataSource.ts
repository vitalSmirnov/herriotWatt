import {IResponse} from "../../types/IResponse";
import {IPagination} from "../../types/IPagination";
import {IProject} from "../../../../../entities/models/Project/IProject";
import {IProjectDetailed} from "../../../../../entities/models/Project/IProjectDetailed";

interface IPayload {
    description: string
    name: string
}

export interface IGetProjectsResponse extends IResponse, IPagination {
    projects: IProject[]
}

export interface ICreateProjectPayload {
    description: string
    name: string
}
export interface ICreateProjectResponse extends IResponse {
   ID: string
}

export interface IGetDetailsProjectPayload {
    projectId: string
}
export interface IGetDetailsProjectResponse extends IResponse {
    project: IProjectDetailed
}

export interface IUpdateProjectPayload {
    projectId: string
    payload: IPayload

}
export interface IUpdateProjectResponse extends IResponse {
}

export interface IDeleteProjectPayload {
    projectId: string
}
export interface IDeleteProjectResponse extends IResponse {
}