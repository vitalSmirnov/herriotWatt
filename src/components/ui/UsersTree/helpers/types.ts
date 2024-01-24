import {IUserModel} from "../../../../entities/models/Users/IUserModel";

interface Photo{
    id: string,
    photo: string,
}
interface Mineral{
    name: string,
    percentage: number,
}
export interface ITreeProps{
    name: string,
    create_date: string,
    owner: IUserModel,
    staff: IUserModel[],
    reader: IUserModel[],
    photos: Photo[],
    minerals: Mineral[],
    //rock
}

export interface ITreeElement{
    key: string,
    label: string,
    data: string,
    icon?: string,
    children?: ITreeElement[]
}

export interface IUsersTreeProps{
    projectId: string | undefined
}
