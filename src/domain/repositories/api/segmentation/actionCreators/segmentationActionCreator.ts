import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../axios/axios";
import {
    IAddPhotoProjectPayload, IAddPhotoProjectResponse, ICreateSegmentPayload, ICreateSegmentResponse,
    IDeletePhotoPayload,
    IDeletePhotoResponse, IDeleteSegmentPayload, IDeleteSegmentResponse,
    IGetPhotoPayload,
    IGetPhotoResponse
} from "../dataSource/ISegmentationDataSource";


export const getPhotoSegment = createAsyncThunk(
    'photoSegment',
    async (payload: IGetPhotoPayload, thunkAPI)=> {
        return await axiosInstance.main.get<Promise<IGetPhotoResponse>>(`segmentation/photo/${payload.photoId}`)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

export const deletePhotoSegment = createAsyncThunk(
    'deletePhoto',
    async (payload: IDeletePhotoPayload, thunkAPI) =>
        axiosInstance.main.delete<Promise<IDeletePhotoResponse>>(`segmentation/photo/${payload.photoId}`)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })

)

export const addPhotoProject = createAsyncThunk(
    'getProjectDetails',
    async (payload: IAddPhotoProjectPayload, thunkAPI) =>
        axiosInstance.main.post<Promise<IAddPhotoProjectResponse>>(`segmentation/project/${payload.projectId}/bucket/${payload.bucket}`, payload.payload)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })

)

export const createSegment = createAsyncThunk(
    'createSegment',
    async (payload: ICreateSegmentPayload, thunkAPI) => {
        return await axiosInstance.main.post<Promise<ICreateSegmentResponse>>(`segmentation/segment/photo/${payload.photoId}/mineral/${payload.mineralId}`, payload.payload)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

export const deleteSegment = createAsyncThunk(
    'deleteSegment',
    async (payload: IDeleteSegmentPayload, thunkAPI) => {
        return await axiosInstance.main.delete<Promise<IDeleteSegmentResponse>>(`segmentation/segment/${payload.segmentId}`)
            .then(response => response.data)
            .catch(error => {
                return thunkAPI.rejectWithValue(error)
            })
    }
)

