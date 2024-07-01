
type TechnologiesType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}

const student: StudentType = {
    name: "Alena",
    age: 32,
    isActive: false, 
    address: {
        
        streetTitle: "Lenina",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }

    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "JS",
        },
    ]
}

console.log(student.age);
console.log(student.address.streetTitle);