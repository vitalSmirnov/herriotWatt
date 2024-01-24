import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProject} from "../../../../../entities/models/Project/IProject";
import {IProjectDetailed} from "../../../../../entities/models/Project/IProjectDetailed";
import {
    addPhotoProject,
    createSegment,
    deletePhotoSegment, deleteSegment,
    getPhotoSegment
} from "../actionCreators/segmentationActionCreator";
import {
    IAddPhotoProjectResponse,
    ICreateSegmentResponse,
    IDeletePhotoResponse, IDeleteSegmentResponse,
    IGetPhotoResponse
} from "../dataSource/ISegmentationDataSource";


interface ISegmentState{
    isLoading: boolean
    error: string | null
}


const initialState: ISegmentState = {
    isLoading: false,
    error: null
}

export const segmentSlice = createSlice({
    name: 'segment',
    initialState,
    reducers:{},
    extraReducers:{
        [getPhotoSegment.pending.type]: (state)=> {
            state.error = null;
            state.isLoading = true;
        },
        [getPhotoSegment.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [getPhotoSegment.fulfilled.type]: (state, action: PayloadAction<IGetPhotoResponse>)=> {
            state.isLoading = false;
            state.error = null;

        },

        [deletePhotoSegment.pending.type]: (state)=> {
            state.error = null;
            state.isLoading = true;
        },
        [deletePhotoSegment.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [deletePhotoSegment.fulfilled.type]: (state, action: PayloadAction<IDeletePhotoResponse>)=> {
            state.isLoading = false;
            state.error = null;


        },

        [addPhotoProject.pending.type]: (state)=> {
            state.isLoading = true;
            state.error = null;
        },
        [addPhotoProject.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [addPhotoProject.fulfilled.type]: (state, action: PayloadAction<IAddPhotoProjectResponse>)=> {
            state.isLoading = false;
            state.error = null;
        },

        [createSegment.pending.type]: (state)=> {
            state.isLoading = true;
            state.error = null;
        },
        [createSegment.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [createSegment.fulfilled.type]: (state, action: PayloadAction<ICreateSegmentResponse>)=> {
            state.isLoading = false;
            state.error = null;
        },

        [deleteSegment.pending.type]: (state)=> {
            state.isLoading = true;
            state.error = null;
        },
        [deleteSegment.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [deleteSegment.fulfilled.type]: (state, action: PayloadAction<IDeleteSegmentResponse>)=> {
            state.isLoading = false;
            state.error = null;
        },
    }
})

export default segmentSlice.reducer;