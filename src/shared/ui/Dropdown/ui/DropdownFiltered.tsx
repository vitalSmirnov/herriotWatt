import {Dropdown} from "primereact/dropdown";
import {UserProps, UsersListProps} from "../helpers/types";
import {useState} from "react";
import { PrimeIcons } from 'primereact/api';
import {MultiSelect} from "primereact/multiselect";

export const DropdownFiltered = ({users} : UsersListProps) => {
    const [User, setSelectedUser] = useState(null);
    const valuesMapper = (user: UserProps) => {
        return (
            <>
                <div className="flex align-items-center">
                    <i className={`${PrimeIcons.USER} mr-2`}/>
                    <div>{user.name}</div>
                </div>
            </>
        )
    }
    const selectedValuesTemplate = (user: UserProps) => {
        if (user) {
            return (
                <div className="flex align-items-center">
                    <i className={`${PrimeIcons.USER} mr-2`}/>
                    <div>{user.name}</div>
                </div>
            );
        }

        return <span>Выбор пользователя</span>;
    };

    return (
        <MultiSelect  value={User} multiple={true} onChange={(e) => setSelectedUser(e.value)} options={users} optionLabel="name" placeholder="Select a Country"
                  filter itemTemplate={valuesMapper} className="w-full mt-2" />
    )
}