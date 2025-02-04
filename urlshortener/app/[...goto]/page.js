'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = ({ params }) => {
    const router = useRouter();
    const param = Array.isArray(params?.goto) ? params.goto : [params?.goto];
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/datahandle');
                if (!response.ok) throw new Error('Failed to fetch data');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (data.length === 0) return;

        const customUrlMade = param.map(decodeURIComponent).join('/');
        const matchedEntry = data.find(item => item.customUrl === customUrlMade);
        console.log(data)
        console.log(customUrlMade)
        if (matchedEntry) {
            router.push(matchedEntry.url);
        }
    }, [data, param, router]);

    return <div>Redirecting to your desired link, if it exists...</div>;
};

export default Page;
