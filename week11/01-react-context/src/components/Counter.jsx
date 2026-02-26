import { useReducer } from "react";

function counterReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            console.log(`Unhandled action type: ${action.type}`);
            return state = 0;
    }
}

export function Counter() {
    const [count, dispatch] = useReducer(counterReducer, 0);
    return (
        <div>
            <h2>Counter</h2>
            <div className="btnWrap">
                <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            </div>
            <h2>Count: {count}</h2>
        </div>
    );
}