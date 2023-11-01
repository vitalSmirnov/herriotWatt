import {SearchField} from "../../searchField/ui/searchField";
import {ISearch} from "../../../../shared/helpers/models/ISearch";
import {CardSearchTemplate} from "../../../../shared/ui/cardSearchTemplate/cardSearchTemplate";
import './searchesTiles.scss';
import {TileDataView} from "../../../../shared/ui/TileDataView/ui/TileDataView";
export const SearchesTiles = () => {

    const templateMapper = (item : ISearch) =>{
        return (
            <CardSearchTemplate id={item.id} title={item.title} dateTime={item.dateTime} key={item.id} img={item.img} description={item.description}/>
        )
    }

    const values = [
        {
            id: '0',
            title: 'title',
            dateTime: '2023-10-31',
            img: '',
            description: 'description'
        }
    ]
    return (
        <>
            <div className={'tiles-container'}>
                <TileDataView values={values} layout={'grid'} header={<SearchField/>} templateMapper={templateMapper}/>
            </div>
        </>
    )
}
