export interface ICoordination {
    cord_x: number
    cord_y: number
}

export interface ISegment {
    cords: ICoordination[]
    mineral_id: string
}