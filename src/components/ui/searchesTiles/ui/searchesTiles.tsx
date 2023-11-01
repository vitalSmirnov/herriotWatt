import {CardSearchTemplate} from "../../../../shared/ui/cardSearchTemplate/cardSearchTemplate";
import {DataView} from "primereact/dataview";
import {ISearch} from "../../../../shared/helpers/models/ISearch";
import './searchesTiles.scss'
import {SearchField} from "../../searchField/ui/searchField";

export const SearchesTiles = () => {

    const templateMapper = (item : ISearch) =>{
        return (
            <CardSearchTemplate id={item.id} title={item.title} dateTime={item.dateTime} key={item.id} img={item.img} description={item.description}/>
        )
    }

    const values = [
        {
            id: "",
            title: 'title',
            dateTime: '2023-10-31',
            img: '',
            description: 'description'
        }
    ]
    return (
        <>
            <div className={'tiles-container'}>
                <DataView value={values} layout={'grid'} header={<SearchField/>} itemTemplate={templateMapper}/>
            </div>
        </>
    )
}
