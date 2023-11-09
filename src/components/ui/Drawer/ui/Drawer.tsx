import {useEffect, useRef, useState} from "react";
import {DotObject, Material} from "../helpers/types/types";
import {Button} from "primereact/button";

interface DrawerProps{
    image: string | null,
    clearCallback: () => void,
    isClear: boolean
}

export const Drawer = ({ image, clearCallback, isClear }: DrawerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [startDot, setStartDot] = useState<DotObject | null>(null)
    const [materialData, setMaterialData] = useState<Material[]>([])

    const startDotHandle = (payload: DotObject) => {
        setStartDot(payload);
    };

    const lineDrawHandler = (ctx: CanvasRenderingContext2D) => {
        const copyMaterial = [...materialData]
        const last_material = copyMaterial.pop()
        last_material!.material.map((item, index) => {
            ctx.beginPath();
            ctx.moveTo(last_material?.material[index >0? index-1: 0].x!, last_material?.material[index >0? index-1: 0].y!);
            ctx.lineTo(item.x, item.y);
            ctx.strokeStyle = 'black';
            ctx.stroke();
            ctx.closePath();
        })
    }
    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        if (isClear) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            clearCallback()
        }
        if (image) {
            const background = new Image();

            background.onload = () => {
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            };

            background.src = image;
        }
    }, [isClear]);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        if (image) {
            const background = new Image();

            background.onload = () => {
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            };

            background.src = image;
        }
    }, [image]);


    useEffect(() => {
        console.log(materialData)
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        const handleCanvasClick = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            if (startDot !== null){
                let newDot : DotObject = {x,y}
                const copyMaterial = [...materialData]
                const last_element = copyMaterial.pop()
                last_element!.material.push(newDot)
                copyMaterial.push(last_element!)
                setMaterialData(copyMaterial)

                if (Math.abs(x - startDot.x) < 15 && Math.abs(y - startDot.y) < 15){
                    lineDrawHandler(ctx);
                    setStartDot(null);
                }

            }
            else{
                startDotHandle({x,y})
                const material : Material = {
                    material: [
                        {x,y}
                    ]
                }
                setMaterialData([...materialData, material])
            }

            ctx.beginPath();
            ctx.arc(x,y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.closePath();

        };

        canvas.addEventListener('click', handleCanvasClick);

        return () => {
            canvas.removeEventListener('click', handleCanvasClick);
        };
    }, [startDot]);


    return (
        <>
            <canvas ref={canvasRef} width={1000} height={700}/>
        </>
    )
}