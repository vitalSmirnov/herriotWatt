import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../axios/axios";
import {
    ICreateProjectPayload, IDeleteProjectPayload, IDeleteProjectResponse,
    IGetDetailsProjectPayload,
    IGetDetailsProjectResponse,
    IGetProjectsResponse, IUpdateProjectPayload, IUpdateProjectResponse
} from "../dataSource/IProjectDataSource";

export const getProjectList = createAsyncThunk(
    'projectsList',
    async (_, thunkAPI)=> {
        return await axiosInstance.main.get<Promise<IGetProjectsResponse>>('project')
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

export const createProject = createAsyncThunk(
    'project',
    async (payload: ICreateProjectPayload, thunkAPI) =>
        axiosInstance.main.post<Promise<IGetDetailsProjectResponse>>(`project`, payload)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })

)

export const getProjectDetailed = createAsyncThunk(
    'getProjectDetails',
    async (payload: IGetDetailsProjectPayload, thunkAPI) =>
        axiosInstance.main.get<Promise<IGetDetailsProjectResponse>>(`project/${payload.projectId}`)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })

)

export const updateProject = createAsyncThunk(
    'material/rock/{rock-id}',
    async (payload: IUpdateProjectPayload, thunkAPI) => {
        return await axiosInstance.main.put<Promise<IUpdateProjectResponse>>(`project/${payload.projectId}`, payload.payload)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

export const deleteProject = createAsyncThunk(
    'material/rock/{rock-id}',
    async (payload: IDeleteProjectPayload, thunkAPI) => {
        return await axiosInstance.main.delete<Promise<IDeleteProjectResponse>>(`project/${payload.projectId}`)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

