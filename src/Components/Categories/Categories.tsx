'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Category } from "@/types";
import { useEffect } from "react";
import { TaskApi } from "@/api";
import styles from "./Categories.module.css"

/*
* List of categories
* TODO: make pretty, maybe dropdown menu 
* Possibly not needed, just add the category to the task and then filters
 */

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>();
    // api call

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const api = new TaskApi();
                const data = await api.getCategories();
                if (data) {
                    setCategories(data);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    // map each category as link

    // setja í nav eða á task page? 

    return (
        <div>
            <h1>Categories</h1>

            {categories?.map((category) => (
                <Link key={category.id} href={`/tasks/${category.id}`} className={styles.categoryLink}>{category.title}</Link>
            ))}
        </div>
    );
}