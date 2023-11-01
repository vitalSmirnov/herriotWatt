import {Tree} from "primereact/tree";
import React from "react";
import {ITreeProps, IUsersTreeProps} from "../helpers/types";
import {treeMapper} from "../helpers/helpers";

export const UsersTree = ({projectId} :IUsersTreeProps) => {
    const fetchedProject : ITreeProps = {
        create_date: "",
        minerals: [],
        name: "",
        owner: {
            id: '0',
            name: 'Наташа'
        },
        photos: [],
        reader: [
            {
                id: '1',
                name: 'Вовка'
            },
            {
                id: '2',
                name: 'Петька'
            },
        ],
        staff: [
            {
                id: '3',
                name: 'Никитка'
            },
            {
                id: '4',
                name: 'Илюша'
            },
        ]

    }
    const nodes = treeMapper(fetchedProject)

    return(
        <>
            <Tree value={nodes} className={'w-25rem'}/>
        </>
    )
}