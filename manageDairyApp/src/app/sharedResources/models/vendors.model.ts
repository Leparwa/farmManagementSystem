export interface IFarmvendor{
    vendorId:string
    vendorName:string,
    vendorItemsCategories:string
    vendorCustomerRating?:number
    vendorAddress:IvendorAddress,
    vendorItems?:IFarmItem[]

}

export interface IvendorAddress{
    contact:string,
    email?:string,
    location:string,
    postalAddress:string,
    vendorWebsite?:string
}

export interface IFarmItem{
    itemId: string,
    farmItemType:string,
    itemName:string
    itemPrice:string,
    itemDescription:string,
    itemImageUrl:string,
    itemStatus:string,
    itemManufacturedDate:string;
    itemExpiryDate:string,
    itemManufacturer:string,
    itemUsageProcedure:string
}