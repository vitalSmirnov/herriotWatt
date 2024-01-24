import {useParams} from "react-router-dom";
import {Button} from "primereact/button";
import {SearchDescription} from "../../../shared/ui/searchTextArea/searchDescription";
import './imgPage.scss'
import {IMaterial} from "../../../entities/models/IMaterial";
import {ImgHeader} from "../../../components/ui/imgHeader/ui/ImgHeader";
import {Drawer} from "../../../components/ui/Drawer/ui/Drawer";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../shared/helpers/hooks/redux";
import {getPhotoSegment} from "../../../domain/repositories/api/segmentation/actionCreators/segmentationActionCreator";
export const ImgPage = () => {
    const {projectId, imgId} = useParams()
    const [image, setImage] = useState(File);
    const dispatch = useAppDispatch();
    // const {} = useAppSelector(state => state.segmentationReducer);
    const [isClear, setClear] = useState(false);
    const handleImageUploadCallback = (image: any) => {
        setImage(image)
    }

    const clearCanvasCallback = () => {
        setClear(!isClear)
    }

    const savePicture = () => {
        if (imgId) {
            dispatch(getPhotoSegment({photoId: imgId, image: image}))
        }
    }

    useEffect(() => {
        if (imgId !== 'new') {
            dispatch(getPhotoSegment({photoId: imgId}))
        }
    }, [image]);

    return(
        <>
            <div className={'img-page-main-container'}>
                <div className={'card flex justify-content-between mt-5 w-100'}>
                    <SearchDescription projectId={projectId} description={'Описание проекта'} name={'name'}/>
                    <div className={'w-full img-page-bordered'}>
                        <ImgHeader handleImageUploadCallback={handleImageUploadCallback} clearCanvasCallback={clearCanvasCallback}/>
                        {image && <Drawer isClear={isClear} image={image} clearCallback={clearCanvasCallback} />}
                    </div>
                </div>
                <div className={'w-full flex justify-content-center mb-5'}>
                    <Button onClick={savePicture} severity={'success'} label={'Сохранить изменения'}/>
                </div>
            </div>
        </>
    )
}