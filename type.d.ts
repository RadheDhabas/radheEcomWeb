export interface Product{
    _id: number;
    title: string;
    price: number;
    image: string;
    category: string; 
}[];

export interface Item{
    _id: number;
    title: string;
    price: number;
    image: string;
    category: string;
};
 
export interface CartProduct{
    _id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    quantity:number;
};

export interface UserInfo{
    _id: string;
    name: string; 
    email: string; 
};