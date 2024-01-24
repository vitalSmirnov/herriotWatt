import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import './searchField.scss'
import {Dialog} from "primereact/dialog";
import {AddNewSearchForm} from "../../AddNewSearchForm/ui/AddNewSearchForm";
import {useState} from "react";
import { PrimeIcons } from 'primereact/api';

export const SearchField = () => {


    const [visible, setVisible] = useState(false)

    return(
        <>
            <div className={'searches-search-top-container'}>
                <div className={'searches-search-input-with-icons'}>
                    <h1 className={"searches-search-header"}>Исследования</h1>
                    <div className={'searches-search-input'}>
                        <span className="p-input-icon-left">
                            <i className={PrimeIcons.SEARCH}/>
                            <InputText placeholder="Найти исследование" className={'searches-search-input-container'}/>
                        </span>
                        <Button icon={PrimeIcons.SORT_ALT} rounded text severity="info" aria-label={'Sort'} className={'searches-search-padding-btn'}/>
                        <Button text severity={'success'} rounded icon={PrimeIcons.PLUS} className={'searches-search-padding-btn'} onClick={() => setVisible(true)} />
                        <Dialog header="Создать новое исследование" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                            <AddNewSearchForm/>
                        </Dialog>
                    </div>
                </div>
            </div>
        </>
    )
}