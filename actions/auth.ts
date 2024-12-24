"use server"

import { createAdminClient, createSessionClient } from "@/lib/appwrite"
import { cookies } from "next/headers"
import { ID, Query } from "node-appwrite"
import { headers } from "next/headers"
import { QAuthProvider } from 'node-appwrite';
import { redirect } from "next/navigation"



export async function signUp(formData: FormData) {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;

    try {
        const { account, database } = await createAdminClient();
        const newUserAccount = await account.create(ID.unique(), email, password, username)
        if (!newUserAccount) throw new Error("Error creating user Account")

        const newUser = await database.createDocument(
            process.env.DATABASE_ID,
            process.env.COLLECTION_ID,
            ID.unique(),
            {
                userId: newUserAccount.$id,
                email: email,
                username: username
            }
        )
    } catch (err) {

    }

    const { account } = await createAdminClient();

    await account.create(ID.unique(), email, password, usernae);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("my-custom-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    redirect("/account");
}