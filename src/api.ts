import { User, Category, Task, CreateTask} from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://veff2-hop1.onrender.com';

export class TaskApi{

    async fetchFromApi<T>(
        url:string,
        options?: {
            method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
            body?: object;
            content?: 'multipart/form-data'  | 'application/json';
        }

    ):Promise<T|null> {
        let response: Response | undefined
        const token = localStorage.getItem('token');
        console.log("token before fetch",token);
        try {
            response = await fetch(url
                , {
                    method: options?.method ?? 'GET',
                    headers: {
                        'Content-Type': options?.content ?? 'application/json',
                        ...(token ? { Authorization: `Bearer ${token}` } : {})
                    },
                    body: options?.body ? JSON.stringify(options.body) : undefined,
                }
            );

        } catch (error) {
            console.error('Error fetching from api:', url,  error);
            return null;
        }	

        if (!response.ok){
            console.error('Non 2xx response from api:',url,  response);
            return null;
        }

        if (response.status === 204){
            console.log('deleted successfully');
            return null;
            
        }
        if (response.status === 404){
            console.error('404 response from api:', response);
        }

        let json: unknown
        try {
            json = await response.json();
        } catch (error) {
            console.error('Error parsing response from api:', error);
            return null;
        }
        return json as T
    }

    // all open routes 
    async getCategories(): Promise<Category[] | null > {
        const url = `${BASE_URL}/categories`;
        const response = await this.fetchFromApi<Category[] | null>(url);
        return response;
    }


    async login(username: string, password: string) {

        const url = `${BASE_URL}/users/login`;
        const response = await this.fetchFromApi<{token: string, user: User}>(url, {
            method: 'POST',
            body: {
                username,
                password
            }
        });

        if (response?.token) {
            localStorage.setItem('token', response.token);
            const token = localStorage.getItem('token');
            console.log("token after login",token);
        }

        return response;


    }

    async register(username: string, password: string): Promise<User | null> {
        const url = `${BASE_URL}/users/register`;
        const response = await this.fetchFromApi<User| null>(url, {
            method: 'POST',
            body: {
                username,
                password
            }
        });
        return response;
    }


    async getTasks(offset: number): Promise<{tasks: Task[]}|null> {
        const url = `${BASE_URL}/tasks?offset=${offset}`;
        const response = await this.fetchFromApi<{tasks: Task[]}| null>(url);

        return response;
    }

    async createTask(task: CreateTask): Promise<Task | null> {
        const url = `${BASE_URL}/tasks`;
        const response = await this.fetchFromApi<Task| null>(url, {
            method: 'POST',
            body: {
                title: task.title,
                description: task.description,
                categoryId: task.categoryId,
                due: null
            }
        });
        return response;
    }

    async deleteTask(taskId: string) {
        const url = `${BASE_URL}/tasks/${taskId}`;
        const response = await this.fetchFromApi<{message: string}>(url, {
            method: 'DELETE',
        });
        return response;
    }


    async getUsers(offset: number): Promise<User[]|null> {
        const url = `${BASE_URL}/users?offset=${offset}`;
        const response = await this.fetchFromApi<User[]| null>(url);
        return response;
    }

    async updateUser(userId: string, imageUrl: string): Promise<User | null> {
        const url = `${BASE_URL}/users/${userId}`;
        const response = await this.fetchFromApi<User| null>(url, {
            method: 'PATCH',
            body: {
                
                imageUrl: imageUrl
            }
        });
        return response;
    }

    


}