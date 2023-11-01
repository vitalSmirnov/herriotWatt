import {DataView} from "primereact/dataview";
import {ITileDataView} from "../helpers/types";


export const TileDataView = ({values, header, templateMapper, layout} : ITileDataView) => {
    return(
        <DataView value={values} layout={layout} header={header} itemTemplate={templateMapper}/>
    )
}