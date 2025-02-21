export interface IError {
    status: 'error'
    message: string
}

export interface ISuccess<T> {
    status: 'success'
    data: T
}

export interface IPost {
    id: number
    name: string
    text: string
    image: string | null
    date: string
    user: string | null
    category: string
}

export interface ITag {
    id: number
    name: string
    posts: IPost[]
}

export interface IUser {
    id: number
    name: string
    email: string
    password: string
    role: "user" | "admin"
}