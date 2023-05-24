export interface IEmployee {   
    id: string;
    firstname: string;
    lastname: string;
    location: string;   
    email: string;
    mobile: string;
}

export const dummyData: IEmployee[] = [
    {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    location: 'Bangalore',
    email: 'john@gmail.com',
    mobile: '1234567890',
},
];
export enum PageEnum {
    list,
    add
}