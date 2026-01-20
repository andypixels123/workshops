function Buttons() {

    function handleClick(message) {
        console.log(message);
    }

    return (
        <>
            <div>
                {/* <button onClick={() => console.log("button 1 pressed")}>button 1</button>
                <button onClick={() => console.log("button 2 pressed")}>button 2</button>
                <button onClick={() => console.log("button 3 pressed")}>button 3</button> */}

                <button onClick={() => handleClick("button 1 clicked")}>Button 1</button>
                <button onClick={() => handleClick("button 2 clicked")}>Button 2</button>
                <button onClick={() => handleClick("button 3 clicked")}>Button 3</button>

            </div>
        </>
    )
}

export default Buttons;