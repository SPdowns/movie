function Ticket(movieName, timeOfDay, age) {
  this.movieName = movieName,
  this.timeOfDay = timeOfDay,
  this.age = age
}

$(document).ready(function() {
  $("#movies").change(function() {
    let selectedMovie = $("#movies").val();
    if(selectedMovie === "stella") {
      $("#output-stella").show();
    }
  });

});