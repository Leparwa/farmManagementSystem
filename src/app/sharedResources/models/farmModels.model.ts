import { FormlyFieldConfig } from "@ngx-formly/core";

export interface IFarmAddress{
farmLocation:string,
farmContact: string,
}
export interface IAnimalType{
  cow:string
  goat:string,
  chicken:string,
  pig:string
  sheep:string
}
export interface IAnimalCurrentStatus{

      ispregnant:boolean,
     animalHealth:IAnimalHealthStatus,
     isOnSell?:boolean,
     isDead?:boolean,
    
}
export interface IAnimalHealthStatus{
    isSick:boolean,
    isOnMedication:boolean,
    isScheduledVaccination:boolean
}
export interface IAnimalMedicalPersonel{
  name:string,
  phoneNumber:string,
  qualification:string,
  personnelType:{
    company:{
      companyName:string,
      conductedBy:{
        personelName:string,
        personellJobID:string,
        gender:string,
        idNumber:string,
        personelContact:{
          email?:string,
          phoneNumber:string,
        }
      }
      companyAddress:{
        phoneNumber:string,
        locatedAt:string,
        boxAddress:string,
      }
    }
    privateParty:{
      partyName:string,
      IdNumber:string,
      gender:string,
      partyQualifications:{
        school:string
        education:string,
        experience:string,
      }
      partyAddress:{
        phoneNumber:string,
        email?:string,
        location:string,
      },

    }
  }
}
export interface IAnimalDisease{
    diseaseName:string
    symptoms:{
      symptomDescription:string
    }
  
}
export interface IAnimalMedicalRecord{
  animalId:string,
  medicineName:string,
  dateAdministered:Date,
  formAdmistered:string,
  diseases:IAnimalDisease[]
}
export interface IAnimalScheduledMedication extends IAnimalMedicalRecord{
  isComplete:boolean
}

export interface IAnimalvaccination{
  vaccineDate:Date,
  vaccinatedAgainst:string,
  formOfAdmistration:string
}
export interface IAnimalScheduledVaccination extends IAnimalvaccination{
  isComplete:boolean
}
export interface IAnimalMedication{
  lastUpdatedOn:Date,
  giveBy:IAnimalMedicalPersonel[],
  medicationsRecord:IAnimalMedicalRecord[]
}
export interface IAnimalHealtRecords{
animalMedications:{
admisteredMedications:IAnimalMedication[],
scheduledMedications:IAnimalScheduledMedication[],
}
animalVaccinations:{
  completedVaccinations:IAnimalvaccination[],
  scheduledVaccinations:IAnimalScheduledVaccination[]
}
}
export interface IAnimalHealth{
  healthStatus:IAnimalHealthStatus,
  medicalRecords:IAnimalHealtRecords[]
}
export interface IMilk{
  quantity:string,
  type:string
  fatContent:string
}
export interface IEgg{
  grade:string,
  color:string,
  size:string
  quantity:number
}
export interface IMeat{
  type:string
  quantity:string,
 
}
export interface IAnimalSkin{
  type:string
  quantity:string,
  describe:string
}
export interface IProductType{
  milk:IMilk,
  eggs:IEgg,
  meat:IMeat,
  hidesOrSkin:IAnimalSkin,
}

export interface IFarmProduct{
  collectedProducts?:IFarmCollectedProducts[],
  soldProducts?:IFarmSoldProduct[]
}
export interface IFarmCollectedProducts{
  collecterId:string
  collectedAt:string,
  animalType:IAnimalType,
  animalId:string,
  productType:IProductType,
  dateCollected?:Date,
}
export interface IFarmSoldProduct{
  id:string,
  productType:string,
  buyerName:string,
  buyerPhone:string,
  buyerEmail?:string,
  buyerAddress:string,
  quantityBought:number,
  pricePerQuantity:string,
  amountPaid:number,
  totalPrice:number,
  balance:string
}
export interface IAnimalReprocuction{
  children:{
    dateOfBirth:string,
    childBreed:string,
    childBornWeight:string,
    currentWeight:string,
    childAvailabilityStatus:{
      isDead:boolean,
      isSold:boolean,
    }
    childId:string,
    childGender:string,

  }
}
export interface IAnimalSchedule{
  dateSchedule:Date,
  schedule:{
    scheduleType:string,
    scheduleStatus:string,
    scheduleReason:string,
    scheduledBy:{
      schedulerName:string,
      schedulerType:string
    }
  }
}
export interface IAnimalAcquisition{
  
  inherited?:{
    inheritedWhen:Date,
    inheritedFrom:string,
    inheritedWhy:string,
    inheritanceProof?:File
  },
  bought?:{
    boughtWhen:Date,
    boughtFrom:string,
    buyingPrice:number,
    weightWhenBuying:string,
    receiptNumber:string,
    receipt:File
  },
  bornInFarm?:{
    dateOfBirth:Date,
    weightWhenBorn:string,
    breedType:string
    pregnancyType:string,
    parentId?:string
   
  }
}
export interface IFarmAnimal{
  availableAnimals?:IFarmAvailableAnimal[]
  soldAnimals:IFarmSoldAnimal[]
}
export interface IFarmSoldAnimal{
  id?:string,
  animalType:string,
  animalID:string
  buyerName:string,
  buyerPhone:string,
  buyerEmail?:string,
  buyerAddress:string,
  quantityBought:number,
  pricePerQuantity:string,
  amountPaid:number,
  totalPrice:number,
  balance:string
}
export interface IFarmStalls{
  stall_number:string,
  stall_status:string,
  stall_animals?:IFarmAvailableAnimal
}
export interface IFarmAvailableAnimal{
  animalID:string
  animalGender:string,
  animalWeight:string,
  animalCurrentValuation?:string
  animalStatus?:IAnimalCurrentStatus,
  acquistationStatus:string,
  acquisition:IAnimalAcquisition
  location:string,
  animalRecords?:{
    health?:IAnimalHealth[]
    products?:IFarmProduct[],
    reproductions?:IAnimalReprocuction[],
    animalSchedules?:IAnimalSchedule[]
  }
}
export interface IFarmStaff{
  staffId:string,
  staffName:string,
  staffType:string,
  nationalId:string
  staffContacts:{
    phoneNumber:string,
    email?:string,
    location?:string
  }
  staffQualifications:{
    education:string,
    experience:string,
  },
  staffAchievements:IStaffAchievements[]
}
export interface IStaffAchievements{
  achievementType:string,
  dateAwarded:Date,
  awardedBy:string
}
export interface Ifarm{
farmName:string,
farmAddress:IFarmAddress,
farmAnimals?:IFarmAnimal,
farmProducts?:IFarmProduct,
farmStaffs?:IFarmStaff,
}

export interface SibasiFormlyFormField extends FormlyFieldConfig {
  isShowOnTable?: boolean;
  displayedTableName?:string
  fieldGroup?: SibasiFormlyFormFieldFieldGroup[];
}


export interface SibasiFormlyFormFieldFieldGroup extends FormlyFieldConfig {
  isShowOnTable?: boolean;
  isShowData?:boolean,
  displayedTableName?:string
}

export interface SibasiFarmModuleForm {

  fields: SibasiFormlyFormField[];
}
