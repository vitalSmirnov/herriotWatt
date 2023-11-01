import {useParams} from "react-router-dom";
import {Button} from "primereact/button";
import {SearchDescription} from "../../../shared/ui/searchTextArea/searchDescription";
import './imgPage.scss'
import {TileDataView} from "../../../shared/ui/TileDataView/ui/TileDataView";
import {IMaterial} from "../../../shared/helpers/models/IMaterial";
import {templateMapper} from "../helpers/helpers";
import {ImgHeader} from "../../../components/ui/imgHeader/ui/ImgHeader";
export const ImgPage = () => {

    const {imgId} = useParams()

    const fetchedValues : IMaterial[] = [
        {
            id: '0',
            img: '',
            description: 'description',
            name: 'name',
        },
    ]

    return(
        <>
            <div className={'img-page-main-container'}>
                <div className={'card flex justify-content-between mt-5 w-100'}>
                    <SearchDescription description={'Описание проекта'}/>
                    <div className={'w-full img-page-bordered'}>
                        <TileDataView values={fetchedValues} templateMapper={templateMapper} header={<ImgHeader/>} layout={'list'}/>
                    </div>
                </div>
                <div className={'w-full flex justify-content-center mb-5'}>
                    <Button severity={'success'} label={'Сохранить изменения'}/>
                </div>
            </div>
        </>
    )
}