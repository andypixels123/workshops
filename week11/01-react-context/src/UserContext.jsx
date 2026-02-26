import { createContext, useState } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
    const [username, setUsername] = useState("Bob");
    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
}