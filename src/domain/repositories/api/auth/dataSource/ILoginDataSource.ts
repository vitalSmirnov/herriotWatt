import {IUserCredentials} from "../../../../../entities/models/Users/IUserCredentials";
import {IResponse} from "../../types/IResponse";
import {IUserRegisterModel} from "../../../../../entities/models/Users/IUserRegisterModel";

export type ILoginPayload = IUserCredentials
export interface ILoginResponse extends IResponse{
    token: string
    refreshToken: string
}

export type IRegisterPayload = IUserRegisterModel
export interface IRegisterResponse extends IResponse{
    ID: string
}


export interface IRefreshPayload{
    refreshToken: string
}
export interface IRefreshResponse extends IResponse{
    token: string
    refreshToken: string
}

export interface ILogoutResponse extends IResponse{
}