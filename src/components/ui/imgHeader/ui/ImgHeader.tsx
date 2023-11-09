import {Button} from "primereact/button";

interface ImgHeaderProps{
    handleImageUploadCallback: (image: any) => void,
    clearCanvasCallback: () => void
}

export const ImgHeader = ({handleImageUploadCallback, clearCanvasCallback} : ImgHeaderProps) => {

    const imageUploadHandler = (image: any) => {
        handleImageUploadCallback(image)
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            console.log(file)
            reader.onload = (e) => {
                const result = e.target?.result as string;
                imageUploadHandler(result);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Button className={'m-3'} rounded severity={'warning'} label={'Указать материал'}/>
            <Button className={'m-3'} rounded severity={'warning'} label={'Сегментировать'}/>
            <Button severity={'danger'} label={'Отчистить аннотации'} onClick={clearCanvasCallback}/>
            <input type="file" accept="image/*" onChange={handleImageUpload}/>
        </div>
    )
}