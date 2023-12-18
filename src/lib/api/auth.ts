'use server'

import { promises as fs } from "fs";
import { SignInSchemaType, SignUpSchemaType } from "../validators/client-vals";

export async function registerNewUser({ username, password }: SignUpSchemaType) {
  try {
    const data = await fs.readFile("./auth.json", "utf8");
    const allEntries = JSON.parse(data) as SignInSchemaType[];

    const isUsernameAlreadyExists = allEntries.some(userData => userData.username === username)
    if(isUsernameAlreadyExists){
        return { success: false, message: 'username already exists!' }
    }

    // Add the entry
    allEntries.push({ username, password });

    // Write the file
    await fs.writeFile("./auth.json", JSON.stringify(allEntries), "utf8");
    
    return { success: true, message: 'account created!' }
  } catch (err) {
    console.error("An error occurred:", err);
    return { success: false, message: "server error" }
  }
}

export async function getUserData(username: string) {
    const data = await fs.readFile("./auth.json", "utf8");
    const allEntries = JSON.parse(data) as SignInSchemaType[];

    return allEntries.find(data => data.username === username)
}
