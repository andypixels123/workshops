// console.log("is this working?");

// const form = document.querySelector("form");
const form = document.getElementById("hobbyForm");
const mainEl = document.getElementsByTagName("main");

form.addEventListener("submit", (e) => { // 'e' represents the 'submit' event
    e.preventDefault(); // prevents data from showing in url as query string 
    const formData = new FormData(form); // FormData provides a way to construct a set of key/value pairs from data inputted
    const dataObject = Object.fromEntries(formData); // create object from inputted data as key/value pairs
    // console.log(dataObject); // Check in your console to see what this variable looks like
    const pTag = document.createElement("p");
    pTag.innerHTML = `user name - ${dataObject.userName}<br>user location - ${dataObject.userLocation}<br>user hobby - ${dataObject.userHobby}`;
    mainEl[0].appendChild(pTag);
});