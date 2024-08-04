'use client'
import { useAuthState } from 'react-firebase-hooks/auth';
import FirstPage from './firstpage/page'
import { auth } from '@/firebase';
import HomePage from './homepage/page';
import { signOut } from 'firebase/auth';


export default function Index() {
    const [user] = useAuthState(auth)
    console.log({user})

    if(user){
        return (
        <>
            <HomePage/>
        </>
        );
    }
    else{
        return (
        <>
            <FirstPage/>
        </>
        );  
    }
}