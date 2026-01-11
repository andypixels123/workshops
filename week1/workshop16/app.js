
// JS: Conditionals
// Check the value stored in an age variable against the movie ratings provided.
// The UK ratings are U, PG, 12, 15, and 18.
// Write a set of if, if else, and else statements to log out whether someone is allowed in to the cinema to watch a movie.

let age = 17;
let movieRating = "PG";
age = 71;
movieRating = "U";
let reSult;

if (age > 17 && age < 71) {// 18-70
    reSult="You can watch any movie!";
    // console.log(reSult);
} else if (age < 18) {// younger than 18
    if (movieRating === "PG") {
        reSult="Rated PG, You can watch the movie!";
        // console.log(reSult);
    } else if (movieRating === "U") {
        reSult="Rated U, You can watch the movie!";
        // console.log(reSult);
    } else if (movieRating === "12" && age > 11) {
        reSult="Rated 12, You can watch the movie!";
        // console.log(reSult);
    } else if (movieRating === "15" && age > 14) {
        reSult="Rated 15, You can watch the movie!";
        // console.log(reSult);
    } else {// no movie rating // no movie?
        reSult="There is no movie to watch!";
        // console.log(reSult);
    }
} else {// too old!
    reSult="You're too old to watch the movie.";
    // console.log(reSult);
}

document.getElementById("movies").innerHTML="Age - " + age + "<br>" + reSult;
