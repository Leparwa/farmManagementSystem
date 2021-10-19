import { IFarmTablActions } from "../models/tableActions.model";

export const farmAssetTableActions:IFarmTablActions[]=[
    {
        icon:'fas fa-edit text-primary mr-2',
        actionName:'Update',
        action:'update'

    },
    {
        icon:'fas fa-eye  text-warning mr-2',
        actionName:'View',
        action:'view'
    },
    {
        icon:'fas fa-trash text-danger mr-2',
        actionName:'Delete',
        action:'delete'
    },
    {
        icon:'fas fa-calendar-check text-warning mr-2',
        actionName:'Assign',
        action:'assign'
    }
    // {
    //     icon:'fas fa-calendar-check text-warning mr-2',
    //     actionName:'Return'
    // }
]

export const farmInputsTableActions:IFarmTablActions[]=[
    {
        icon:'fas fa-edit text-primary mr-2',
        actionName:'Update',
        action:'update'

    },
    {
        icon:'fas fa-eye  text-warning mr-2',
        actionName:'View',
        action:'view'
    },
    {
        icon:'fas fa-trash text-danger mr-2',
        actionName:'Delete',
        action:'delete'
    },
    {
        icon:'fas fa-trash text-danger mr-2',
        actionName:'Use',
        action:'use'

    },
   
]