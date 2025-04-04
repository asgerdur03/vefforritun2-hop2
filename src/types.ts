export type User = {
    id: string;
    username: string;
    password: string;
    admin: boolean;
};

export type Task = {
    id: string;
    title: string;
    description: string;
    categoryId: string;
    dueDate: string;
    userId: string;
    //tags?
};

export type CreateTask ={
    title: string;
    description: string;
    categoryId: string;
    dueDate: string;
}

export type Category = {
    id: string;
    title: string;
};

