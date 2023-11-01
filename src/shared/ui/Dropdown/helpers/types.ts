export interface UserProps{
    id: string,
    name: string,
    img: string
}

export interface UsersListProps{
    users: UserProps[]
}