import {IMaterial} from "../../../entities/models/IMaterial";
import {MaterialCard} from "../../../components/ui/MaterialCard/ui/MaterialCard";

export const templateMapper = (item: IMaterial) => {
    return (
        <MaterialCard description={item.description} id={item.id} name={item.name}/>
    )
}