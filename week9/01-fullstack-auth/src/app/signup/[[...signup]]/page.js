// this is the sign-up page
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <>
            <h1>Sign Up! It&apos;s free (for now)</h1>
            <SignUp />
        </>
    );
}
