'use server'
 
import signIn from "@/app/lib/vercel-api";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { LoginResponse } from "./types";

const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey); 

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 minutes from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData): Promise<LoginResponse> {
  // Verify credentials && get the user
  const username = formData.get('username')?.toString()
  const password = formData.get('password')?.toString()
  if (username == undefined || password == undefined) {
      return { authenticated: false, error: "Bad form" }
  }
  try {
    const response = await signIn(username, password);
    // Create the session
  const expires = new Date(Date.now() + 10 * 60 * 1000);
  const session = await encrypt({ response, expires });

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true, sameSite: "strict", secure: true});
  return { authenticated: true , error: ""}
  } catch(e) {
    console.log(e);
    return { authenticated: false, error: e?.toString() || "Server error" }
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}