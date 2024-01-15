"use client";

import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useEffect } from 'react';

import Cookies from 'js-cookie'; // If using cookies to store the token


export default function Home() {

        const router = useRouter();
        
        useEffect(() => {
            const token = Cookies.get('token'); // Replace with your token retrieval logic
            console.log(token)
            if (!token) {
            // No token found, redirect to login
            router.push('/registration');
            }
        }, [router]);
        
        // Render your restricted content here
        return <div>Restricted Content</div>;
        };
        
