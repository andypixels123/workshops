function Buttons() {

    return (
        <>
            <div>
                <button onClick={() => console.log("button 1 pressed")}>button 1</button>
                <button onClick={() => console.log("button 2 pressed")}>button 2</button>
                <button onClick={() => console.log("button 3 pressed")}>button 3</button>
            </div>
        </>
    )
}

export default Buttons;