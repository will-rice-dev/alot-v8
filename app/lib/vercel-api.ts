"use server";

import { sql } from "@vercel/postgres";
import { Access } from "./types";
import bcrypt from "bcrypt";

export default async function signIn(
  username: string,
  password: string,
): Promise<Access> {
  const { rows } = await sql`SELECT * from USERS where username=${username}`;

  if (rows[0]) {
    const match = await bcrypt.compare(password, rows[0].password);
    if (match) {
      return Access.USER;
    }
    throw new Error("Incorrect password");
  }
  throw new Error("User not in database");
}
