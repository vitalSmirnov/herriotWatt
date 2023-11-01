import {Button} from "primereact/button";


export const ImgHeader = () => {
    return (
        <div>
            <Button className={'m-3'} rounded severity={'warning'} label={'Указать материал'}/>
            <Button className={'m-3'} rounded severity={'warning'} label={'Сегментировать'}/>
        </div>
    )
}