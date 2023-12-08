import {SearchField} from "../../searchField/ui/searchField";
import {CardSearchTemplate} from "../../../../shared/ui/cardSearchTemplate/cardSearchTemplate";
import './searchesTiles.scss';
import {TileDataView} from "../../../../shared/ui/TileDataView/ui/TileDataView";
import {useAppDispatch, useAppSelector} from "../../../../shared/helpers/hooks/redux";
import {useEffect} from "react";
import {getProjectList} from "../../../../domain/repositories/api/project/actionCreators/projectActionCreator";
import {ProgressSpinner} from "primereact/progressspinner";
import {IProject} from "../../../../entities/models/Project/IProject";
export const SearchesTiles = () => {


    const {projects, isLoading} = useAppSelector(state => state.projectReducer);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProjectList())
    }, []);

    const templateMapper = (item : IProject) =>{
        return (
            <CardSearchTemplate id={item.id} name={item.name} dateTime={item.created_at} key={item.id} description={item.description}/>
        )
    }

    return (
        <>
            { !isLoading?
                <div className={'tiles-container'}>
                    <TileDataView values={projects} layout={'grid'} header={<SearchField/>} templateMapper={templateMapper}/>
                </div>:
                <ProgressSpinner/>
            }
        </>
    )
}
