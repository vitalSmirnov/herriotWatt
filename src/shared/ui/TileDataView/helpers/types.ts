import {JSX, ReactNode} from "react";
import {ISearch} from "../../../helpers/models/ISearch";
import {IImageProps} from "../../../../pages/Search/helpers/types";
import {IMaterial} from "../../../helpers/models/IMaterial";

export interface ITileDataView{
    values: any[],
    header?: ReactNode,
    templateMapper: ITemplateProps,
    layout: 'grid' | 'list'
}

type ISearchesTemplateType = (item : ISearch) => JSX.Element

type ISearchTemplateType = (item : IImageProps) => JSX.Element
type IImgTemplateType = (item : IMaterial) => JSX.Element

type ITemplateProps = ISearchesTemplateType | ISearchTemplateType | IImgTemplateType