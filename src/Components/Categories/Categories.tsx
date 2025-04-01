'use client';
import React, { useState } from "react";
import Link from "next/link";

interface Category {
    id: number;
    name: string;
}

const mockCategories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
]

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);
    // api call

    if (categories.length === 0) {
        setCategories(mockCategories);
    }

    // map each category as link

    // setja í nav eða á task page? 

    return (
        <div>
            <h1>Categories</h1>

            {categories.map((category) => (
                <Link key={category.id} href={`/tasks/${category.id}`}>{category.name}</Link>
            ))}
        </div>
    );
}