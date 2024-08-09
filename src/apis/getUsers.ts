export type Users = {
    firstName: string;
    age: number;
    email: string;
    gender: string;
    phone : string
}

type returnUsers = Users[];

export const getUsers = async (skip: number): Promise<returnUsers> => {
    const response = await fetch(`https://dummyjson.com/users?limit=10&skip=${skip}&select=firstName,age,email,gender,phone`);
    const data = await response.json();
    return data.users as returnUsers;
}
