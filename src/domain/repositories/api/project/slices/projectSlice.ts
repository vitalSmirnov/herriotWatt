import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProject} from "../../../../../entities/models/Project/IProject";
import {IProjectDetailed} from "../../../../../entities/models/Project/IProjectDetailed";
import {
    createProject,
    deleteProject,
    getProjectDetailed,
    getProjectList,
    updateProject
} from "../actionCreators/projectActionCreator";
import {
    ICreateProjectResponse, IDeleteProjectResponse,
    IGetDetailsProjectPayload, IGetDetailsProjectResponse,
    IGetProjectsResponse, IUpdateProjectResponse
} from "../dataSource/IProjectDataSource";


interface IProjectState{
    projects: IProject[]
    projectDetailed: IProjectDetailed
    isLoading: boolean
    error: string | null
}


const initialState: IProjectState = {
    projects:[],
    projectDetailed: {
        created_at: '',
        description: '',
        id: '',
        name: '',
        photos: [],
        updated_at: ''
    },
    isLoading: false,
    error: null
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{},
    extraReducers:{
        [getProjectList.pending.type]: (state)=> {
            state.error = null;
            state.isLoading = true;
        },
        [getProjectList.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [getProjectList.fulfilled.type]: (state, action: PayloadAction<IGetProjectsResponse>)=> {
            state.projects = [...action.payload.projects]
            state.isLoading = false;
            state.error = null;

        },

        [getProjectDetailed.pending.type]: (state)=> {
            state.error = null;
            state.isLoading = true;
        },
        [getProjectDetailed.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [getProjectDetailed.fulfilled.type]: (state, action: PayloadAction<IGetDetailsProjectResponse>)=> {
            state.projectDetailed = {...action.payload.project}
            state.isLoading = false;
            state.error = null;


        },

        [createProject.pending.type]: (state)=> {
            state.isLoading = true;
            state.error = null;
        },
        [createProject.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [createProject.fulfilled.type]: (state, action: PayloadAction<ICreateProjectResponse>)=> {
            state.isLoading = false;
            state.error = null;
        },

        [updateProject.pending.type]: (state)=> {
            state.isLoading = true;
            state.error = null;
        },
        [updateProject.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [updateProject.fulfilled.type]: (state, action: PayloadAction<IUpdateProjectResponse>)=> {
            state.isLoading = false;
            state.error = null;
        },

        [deleteProject.pending.type]: (state)=> {
            state.isLoading = true;
            state.error = null;
        },
        [deleteProject.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [deleteProject.fulfilled.type]: (state, action: PayloadAction<IDeleteProjectResponse>)=> {
            state.isLoading = false;
            state.error = null;
        },
    }
})

export default projectSlice.reducer;