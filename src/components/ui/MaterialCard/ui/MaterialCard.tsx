import {Card} from "primereact/card";
import {IMaterial} from "../../../../entities/models/IMaterial";


export const MaterialCard = ({id, name, description} : IMaterial) => {
    return(
        <Card className={'w-full mt-3 mr-3 ml-3'} key={id} title={name}>
            <p className="m-0">
                {description}
            </p>
        </Card>
    )
}