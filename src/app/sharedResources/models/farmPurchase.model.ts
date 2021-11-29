import { IFarmItem, IFarmvendor } from "./vendors.model";

export interface IFarmPurchase{
    purchaseId:string,
    datePurchased:string,
    purchaseMadeBy:string
    purchaseMadeById:string
    itemType:string,
    itemName:string,
    purchaseType:string,
    status:IPurchaseStatus
    item?:IFarmItem
    itemVendor?:IFarmvendor
}

export interface IPurchaseStatus{
    isPaid:boolean,
    isDelivered:boolean,
    progress:string
}
