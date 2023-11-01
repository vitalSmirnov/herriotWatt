import { ITreeElement, ITreeProps } from "./types";

export const treeMapper = (data : ITreeProps) => {
    const staff : ITreeElement = {
        key:'staff',
        label: 'Персонал',
        data: 'staff-dropdown',
        icon: 'pi pi-users',
        children: data.reader.map((item, index) => {
            return {
                key: item.id,
                label: item.name,
                icon: 'pi pi-user',
                data: item.id
            }
        })
    }
    const readers : ITreeElement = {
        key:'readers',
        label: 'Наблюдатели',
        data: 'readers-dropdown',
        icon: 'pi pi-eye',
        children: data.reader.map((item, index) => {
            return {
                key: item.id,
                label: item.name,
                icon: 'pi pi-user',
                data: item.id
            }
        })
    }

    const owner: ITreeElement = {
        key:'',
        label: 'Владелец',
        data: 'owner-dropdown',
        icon: 'pi pi-wrench',
        children: [
            {
                key: data.owner.id,
                label: data.owner.name,
                data: 'Owner',
                icon: 'pi pi-wrench'
            }
        ]
    }

    return [owner, {...staff}, {...readers}]
}