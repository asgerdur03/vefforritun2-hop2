'use client'

import { useEffect, useState } from "react";
import {useAuth} from "@/context/AuthContext";
import styles from "./UserInfo.module.css";
import Image from "next/image";
import { TaskApi } from "@/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://veff2-hop1.onrender.com';

export default function UserInfo() {
    const {user, setUser} = useAuth();

    useEffect(() => {
        if (user) {
            console.log(user);
        }
    }, [user]);


    const [form, setForm] = useState({
        imageUrl: user?.imageUrl,
    });

    const handleImageUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("image upload");
        const file = e.target.files?.[0];
        if (!file){
            console.log("No file selected");
            return
        } ;

        const formData = new FormData();
        formData.append('image', file);
        const response = await fetch(`${BASE_URL}/users/upload`, {
            method: 'POST',
            body: formData,
        })

        const data = await response.json();
    
        const imageUrl = data.files?.[0]?.url;
        console.log("imageUrl", imageUrl);
        setForm((prevForm) => ({ ...prevForm, imageUrl: imageUrl ?? "" }));
        
    };


    const handleChangeUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("change user");
        const api = new TaskApi();
        if (!form.imageUrl) {
            console.log("No image selected");
            return;
        }
        const editedUser = await api.updateUser(user?.id ?? "", form.imageUrl);

        if (editedUser) {
            setUser(editedUser);
        }

        console.log(editedUser);
    }


    return (
        <div>
            <h1>User Info</h1>
            {user ? 
            <>
                <div>
                    <p>Username: {user?.username}</p>
                </div> 
                <div className={styles.upload_image}>

                <form onSubmit={handleChangeUser}>
                    <p>Upload profile pic</p>
                    <input type="file" name="image" accept="image/*" onChange={handleImageUpload} />
                    {form.imageUrl && (

                        <div className={styles.preview}>
                            <Image src={form.imageUrl} alt="preview" width={100} height={100} key={form.imageUrl} />
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
                </div>
                </>
                :
                <p>Not logged in</p>
            }
        </div>
    )
}