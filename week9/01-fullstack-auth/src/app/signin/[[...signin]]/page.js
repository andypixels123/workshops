// this is the sign-in page
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <>
            <h1>Sign In! You know what we did with your data, right?</h1>
            <SignIn />
        </>
    );
}
