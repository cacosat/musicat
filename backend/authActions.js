"use server";
import { signIn } from "./auth.js";

export async function handleSignIn() {
  await signIn("google");
}