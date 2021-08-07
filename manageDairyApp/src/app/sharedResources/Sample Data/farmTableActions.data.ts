import { IFarmTablActions } from "../models/tableActions.model";

export const farmAssetTableActions:IFarmTablActions[]=[
    {
        icon:'fas fa-edit text-primary mr-2',
        actionName:'Edit'
    },
    {
        icon:'fas fa-eye  text-success mr-2',
        actionName:'View'
    },
    {
        icon:'fas fa-trash text-danger mr-2',
        actionName:'Delete'
    },
    {
        icon:'fas fa-calendar-check text-warning mr-2',
        actionName:'Assign'
    }
]