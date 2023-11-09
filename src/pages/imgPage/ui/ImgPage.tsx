import {useParams} from "react-router-dom";
import {Button} from "primereact/button";
import {SearchDescription} from "../../../shared/ui/searchTextArea/searchDescription";
import './imgPage.scss'
import {IMaterial} from "../../../shared/helpers/models/IMaterial";
import {ImgHeader} from "../../../components/ui/imgHeader/ui/ImgHeader";
import {Drawer} from "../../../components/ui/Drawer/ui/Drawer";
import {useEffect, useState} from "react";
export const ImgPage = () => {

    const [image, setImage] = useState(null);
    const handleImageUploadCallback = (image: any) => {
        setImage(image)
    }

    const fetchedValues : IMaterial[] = [
        {
            id: '0',
            img: '',
            description: 'description',
            name: 'name',
        },
    ]

    useEffect(() => {

    }, [image]);

    return(
        <>
            <div className={'img-page-main-container'}>
                <div className={'card flex justify-content-between mt-5 w-100'}>
                    <SearchDescription description={'Описание проекта'}/>
                    <div className={'w-full img-page-bordered'}>
                        <ImgHeader handleImageUploadCallback={handleImageUploadCallback}/>
                        {image && <Drawer image={image}/>}
                    </div>
                </div>
                <div className={'w-full flex justify-content-center mb-5'}>
                    <Button severity={'success'} label={'Сохранить изменения'}/>
                </div>
            </div>
        </>
    )
}