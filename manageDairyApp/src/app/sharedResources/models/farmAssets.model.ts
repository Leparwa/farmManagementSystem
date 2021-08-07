export interface IFarmAsset{
    assetID:string,
    asset:string,
    asset_type:string,
    serial_number:string,
    description:string
    status:string
    currentValue?:number,
    generalInformation?:IFarmAssetGeneralInfo
}
export interface IFarmAssetGeneralInfo{
    purchaseHistory:IFarmAssetPurchase[]
    assetActivities:IFarmAssetActivities[]
}

export interface IFarmAssetPurchase{
    datePurchase:Date,
    buyingPrice:string,
    buyerName:string,
    buyerAddress:string
    buyerFarmRole:string
    sellerName:string,
    sellerPhone:string
    sellerAddress:string
    purchaseReceiptNumber:string
    purchaseStatus:string
}
export interface IFarmAssetActivities{
    activity:string,
    activityStartDate:Date,
    activityEndDate:Date
    assetActivityAssignerID:string,
    activityAssigneeID:string
    activityAssignee?:string
    assigneeFarmRole:string
    assetActivityStatus:string
}