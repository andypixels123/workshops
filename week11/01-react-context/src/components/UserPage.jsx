import { useContext } from "react";
import { UserContext } from "../UserContext";
import { ThemeContext } from "../ThemeContext";
import { Counter } from "./Counter";

export function UserPage() {
    let { username, setUsername } = useContext(UserContext);
    let { theme, setTheme } = useContext(ThemeContext);

    function handleThemeToggle() {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <>
            <div className={theme}>
                <h2>User ID: {username}</h2>
                <button onClick={() => setUsername("Spongebob")}>
                    Change username to Spongebob
                </button>

                <h2>Theme: {theme}</h2>
                <button onClick={handleThemeToggle}>Change theme</button>
                <Counter />
            </div>
        </>
    );
}