import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMaterial} from "../../../../../entities/models/IMaterial";
import {createMineral, createRock, updateMineral, updateRock} from "../actionCreators/materialActionCreator";
import {
    ICreateMaterialResponse,
    ICreateRockResponse,
    IUpdateMaterialResponse,
    IUpdateRockResponse
} from "../dataSources/IMaterialDataSource";


interface IMaterials{
    material: IMaterial
    rock: IMaterial
    isLoading: boolean
    error: string | null
}


const initialState: IMaterials = {
    material: {
        id: '',
        name: '',
        description: ''
    },
    rock: {
        id: '',
        name: '',
        description: ''
    },
    isLoading: false,
    error: null
}

export const materialSlice = createSlice({
    name: 'material',
    initialState,
    reducers:{},
    extraReducers:{
        [createRock.pending.type]: (state)=> {
            state.error = null;
            state.isLoading = true;
        },
        [createRock.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [createRock.fulfilled.type]: (state, action: PayloadAction<ICreateRockResponse>)=> {
            state.rock.id = action.payload.ID
            state.isLoading = false;
            state.error = null;

        },

        [createMineral.pending.type]: (state)=> {
            state.error = null;
            state.isLoading = true;
        },
        [createMineral.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [createMineral.fulfilled.type]: (state, action: PayloadAction<ICreateMaterialResponse>)=> {
            state.isLoading = false;
            state.error = null;


        },

        [updateMineral.pending.type]: (state)=> {
            state.isLoading = true;
            state.error = null;
        },
        [updateMineral.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [updateMineral.fulfilled.type]: (state, action: PayloadAction<IUpdateMaterialResponse>)=> {
            state.isLoading = false;
            state.error = null;
        },

        [updateRock.pending.type]: (state)=> {
            state.isLoading = true;
            state.error = null;
        },
        [updateRock.rejected.type]: (state, action)=> {
            state.error = action.payload;
            state.isLoading = false;
        },
        [updateRock.fulfilled.type]: (state, action: PayloadAction<IUpdateRockResponse>)=> {
            state.isLoading = false;
            state.error = null;
        },
    }
})

export default materialSlice.reducer;