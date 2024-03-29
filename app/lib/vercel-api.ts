'use server'

import { sql } from "@vercel/postgres";
import { Access } from "./types";

export default async function signIn(username: string, password: string): Promise<Access> {
  const { rows } = await sql`SELECT * from USERS where username=${username}`;

  console.log(rows);
  if (rows[0]) {
    if (rows[0].password === password) {
      return Access.USER
    }
    throw new Error("Incorrect password")
  }
  throw new Error("User not in database")
}