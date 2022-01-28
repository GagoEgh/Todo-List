export interface User {
    id:number,
    name:string,
    isShow:boolean
    list:List[]
}

export interface List{
    id:number,
    title:string
}