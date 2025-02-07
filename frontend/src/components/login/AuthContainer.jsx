import { useState } from "react";
import SignIn from "./Signin";
import SignUp from "./SignUp";

export default function AuthContainer(){
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className="flex justify-center items-center w-2/5 p-8">
          {isSignIn ? (
            <SignIn switchToSignUp={() => setIsSignIn(false)} />
          ) : (
            <SignUp switchToSignIn={() => setIsSignIn(true)} />
          )}
        </div>
      );
}