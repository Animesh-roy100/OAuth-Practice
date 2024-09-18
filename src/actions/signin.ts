"use server";

import * as auth from "@/auth";

export async function signInWithGithub() {
  return auth.signIn("github");
}

export async function signInWithKeycloak() {
  return auth.signIn("keycloak");
}

export async function signInWithGoogle() {
  return auth.signIn("google");
}
