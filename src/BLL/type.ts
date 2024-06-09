export type productData = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description:string
}

export type newProductData = {
    name: string,
    category: string,
    price: string,
    description: string,
    imageData: File,
}

export type updateProductData = {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
}
export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
}