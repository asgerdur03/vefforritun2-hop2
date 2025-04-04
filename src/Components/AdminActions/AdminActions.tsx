'use client'
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { TaskApi } from "@/api";
import { User } from "@/types";


/*
* Admin panel, some admin only routes
* TODO: Make pretty, maybe paginated table 
*/
export default function AdminActions() {
    const {user} = useAuth();
    const [users, setUsers] = useState<User[] | null>([]);

    const [loadingUsers, setLoadingUsers] = useState(false);
    const [offset, setOffset] = useState(0);
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


    useEffect(() => {
        async function fetchUsers() {
        
            try {
                const api = new TaskApi();
                setLoadingUsers(true);
                await delay(1000);
                console.log(offset);
                const users = await api.getUsers(offset);
                if (users) {
                    setUsers(users);
                }
                
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoadingUsers(false);
            }
        }

        fetchUsers();
    }, [user, offset]);

    if (!user) {return <p>You are not logged in</p>}

    if(user.admin === false) {return <p>You are not an admin</p>}

    return (
        <div>
            <h1>Admin Actions</h1>
            {loadingUsers && <p>Loading users...</p>}
            
            {users?.map((user) => (<p key={user.id}> {user.username}</p>))}

            <button onClick={() => setOffset(offset - 10)} disabled={offset === 0}>prev</button>
            <button onClick={() => setOffset(offset + 10)} disabled={!users || users.length < 10}>next</button>

        </div>
    )
}