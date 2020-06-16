function Movie(name, isFirstRelease) {
  this.name = name,
  this.timesAvailable = [],
  this.isFirstRelease = isFirstRelease
}

Movie.prototype.addMovieTime = function(time) {
  this.timesAvailable.push(time);
}

let stella = new Movie("stella", false);
stella.addMovieTime("12pm");
stella.addMovieTime("1pm");
