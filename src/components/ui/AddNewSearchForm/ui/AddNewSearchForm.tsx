import {InputText} from "primereact/inputtext";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import {useState} from "react";
import {DropdownFiltered} from "../../../../shared/ui/Dropdown/ui/DropdownFiltered";
import {UserProps} from "../../../../shared/ui/Dropdown/helpers/types";
import './AddNewForm.scss'


export const AddNewSearchForm = () => {

    const [IsOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')


    const onFinish = () => {
        // dispatch(login({
        //     "email" : email,
        //     "password" : password
        // }));
    }

    const fetchedUsers : UserProps[] = [
        {
            id: "0",
            name: 'Наташа',
            img: ''
        },
        {
            id: "1",
            name: 'не Наташа',
            img: ''
        },
    ]

    const nameHandler = (value : string)=>{
        setName(value)
    }

    return (
        <>
            <div className={'input-group display-col'}>
                <span className="add-new-form-label">Название исследования</span>
                <InputText placeholder="название" value={name}
                           onChange={(e) => nameHandler(e.currentTarget.value)}/>
            </div>

            <div className={'add-new-form-input-group'}>
                <span className="add-new-form-label">Сотрудники</span>
                <DropdownFiltered  users={fetchedUsers}/>
            </div>

            <div className={'add-new-form-input-group'}>
                <span className="add-new-form-label">Читатели</span>
                <DropdownFiltered  users={fetchedUsers}/>
            </div>

            <div className="add-new-form-input-group">
                <Checkbox className={'add-new-form-checkbox'} checked={IsOpen} onChange={(e) => setIsOpen(!IsOpen)} />
                <span>Открытое исследование</span>
            </div>

            <div className={'add-new-form-btn-group add-new-form-btn'}>
                <Button label="Создать" onClick={() => onFinish()}/>
            </div>
        </>
    )
}