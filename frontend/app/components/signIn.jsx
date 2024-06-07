import React from "react";
import {handleSignIn} from "../../../backend/authActions.js"

export default function SignIn() {

    return (
        <form
            action={handleSignIn}
        >
            <button type="submit">Signin with Google</button>
        </form>
    )
}