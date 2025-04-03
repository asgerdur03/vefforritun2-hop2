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
    category: string;
    dueDate: string;
    userId: string;
    //tags?
};

export type Tag = {
    id: string;
    name: string;
};

export type Category = {
    id: string;
    title: string;
};

