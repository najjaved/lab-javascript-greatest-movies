// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    return moviesArray.map((movie) =>  movie.director)
}
// bonus - Iteration 1.1: Clean the array of directors
function getUniqueDirectors(moviesArray){
    const allDirectors = getAllDirectors(moviesArray);
    // by using set, which keeps only unique values
    const uniqueArray = Array.from(new Set(allDirectors));
    console.log("array length: ", allDirectors.length, "\nnew array length: ", uniqueArray.length)

    /*** classical approach
    let uniqueDirectors = [];
    allDirectors.forEach((director) => {        
        if (!uniqueDirectors.includes(director)) {
            uniqueDirectors.push(director)
        }
    
    });
    console.log(uniqueDirectors)  ****/

    return uniqueArray;
    
}
getUniqueDirectors(movies);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length ===0) {
        return 0;
    }
    const dramaMovies =  moviesArray.filter(movie => (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")));
    return dramaMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length ===0) return 0;

    const totalScore=  moviesArray.reduce((scoreSum, currentMovie) => {
        if (typeof currentMovie.score === "number" ){
            return scoreSum + currentMovie.score;
                }
                return scoreSum;
    },0);

    const avgScore = totalScore/moviesArray.length
    return parseFloat(avgScore.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies =  moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);   

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/* extracts elements from the original array and includes them in the new array up to, but not including, the end index. If the end index is not provided, the slice() method will extract elements from the start index to the end of the original array
syntax: array.slice(start, end) */

function orderByYear(moviesArray) {
    //const arrayCopy =  moviesArray.slice(); 
    return moviesArray.toSorted((a, b) => {
        // If two movies have the same year, order them in alphabetical order by their title
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)  // returns a negative number if a.title comes before b.title in alphabetical order, a positive number if a.title comes after b.title, and 0 if they are equivalent
        }
        return a.year - b.year; // If a.year is less than b.year, the result will be negative, meaning a should come before b.

    }); 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map((movie)=> movie.title);

   // return an array of the first 20 titles, sorted alphabetically
   const sortedTitles = titles.toSorted((title1,title2)=> {return title1.localeCompare(title2)});
   return sortedTitles.slice(0,20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
