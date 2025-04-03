'use client';
import { use, useState, useEffect } from 'react'
import { TaskApi } from '@/api';

export default function Test() {
    const [data , setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = new TaskApi();
                const data = await api.getCategories();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    console.log(data);


    return (
        <div>
            <h1>Test</h1>
        </div>
    )
    
}