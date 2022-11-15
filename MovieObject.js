function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
}

const fastAndFurious = new Movie(
    'Fast and Furious', 
    `Don't know who`, 
    'action',
    'I forgot what year',
    '10/10'
);

console.log(fastAndFurious.getOverview());