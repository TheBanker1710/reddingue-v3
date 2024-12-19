"use server";

import { signIn, signOut } from '@/auth'
import { db } from '@/db';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';

export const login = async (provider: string) => {
    await signIn(provider, {redirectTo: "/"});
    revalidatePath("/");
}

export const logout = async () =>{
    await signOut({ redirectTo: "/"});
    revalidatePath("/");
}

export const loginWithCredentials = async (formData: FormData) =>{
    const rawFormData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        role: "ADMIN",
        redirectTo: "/",
    }

    const existingUser = await getUserByEmail(formData.get("email") as string);
    console.log(existingUser);

    try{
        await signIn("credentials", rawFormData);        
    }catch(error: any){
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return { error: "Invalid credentials!"};
                default:
                    return{ error: "Something went wrong!"};
            }
        }

        throw error;
    }
    revalidatePath("/");
}

const getUserByEmail = async (email: string) => {
    try{
        const user = await db.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }catch(error){
        console.log(error);
        return null;
    }
}