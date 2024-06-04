import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth,db } from './Firebase';
import { setDoc,doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

export const Page = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [fname, setfName] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(fname);

        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            const user = auth.currentUser;
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    firstname: user.fname || null,
                    email: user.email,
                    
                });
            }
            console.log(user);
            console.log("user is registerd");
            toast.success("user registration successfull!",{
                position:"top-center"
            })
        }
        catch (err) {
            console.log(err.message);
            toast.success(err.message,{
                position: "bottom-center"
            })
        }
    };
    return (
        <div id='page' onSubmit={handleRegister}>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" onChange={(e) => setfName(e.target.value)} value={fname} />
                <label htmlFor="">email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <label htmlFor="">password</label>
                <input type="password" onChange={(e) => setPass(e.target.value)} value={pass} />
                <button type="submit">Sign in</button>
            </form>
            <Toaster/>
        </div>
    );
};
