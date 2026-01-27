//TODO: navigation and user auth info

//Clerk components for UI
import {
    UserButton,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
} from "@clerk/nextjs";

export default function Header() {
    //when the user is signed in, they see the user button; when the user is signed out, they see the login buttons
    return (
        <>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    );
}
