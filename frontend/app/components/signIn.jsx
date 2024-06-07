import React from "react";
import {handleSignIn} from "../../../backend/authActions.js"
import { signIn } from "../../../backend/auth.js";

export default function SignIn() {
    const handleGoogleSignIn = async () => {
        await signIn('google');
    };

    return (
        <form>
            <button type="submit" >Signin with Google</button>
        </form>
    )
}