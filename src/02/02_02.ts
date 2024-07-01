export type StreetType = {
    title: string
    
}

export type AddressType = {
    number: number
    street: StreetType
    
}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType    
}



export type GovermentStreet = {
    title: string
}
export type GovermentAddress = {
    street: GovermentStreet
}

export type GovermentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: GovermentAddress
}

export type CityType = {
    title: string
    houses: HousesType[]
    govermentBuildings: GovermentBuildingsType[]
    citizensNumber: number

}