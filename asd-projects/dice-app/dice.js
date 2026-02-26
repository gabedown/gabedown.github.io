$(document).ready(function () {
  // Your code goes here
  function makeDot(top, left, elementId) {
    $("<div>")
      .css("height", 75)
      .css("width", 75)
      .css("background-color", "black")
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .css("border-radius", "50%")
      .appendTo(elementId)
      .appendTo("#die");
  }
  function rollDie(dieId) {
    $(dieId).empty();
    console.log("clicked");
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
      makeDot(42.5, 42.5, dieId);
      // middle middle
    } else if (randomNum === 2) {
      makeDot(17.5, 17.5, dieId);
      // top left

      makeDot(67.5, 67.5, dieId);
      // bottom right
    } else if (randomNum === 3) {
      makeDot(17.5, 17.5, dieId);
      // top left

      makeDot(67.5, 67.5, dieId);
      // bottom right

      makeDot(42.5, 42.5, dieId);
      // middle middle
    } else if (randomNum === 4) {
      makeDot(67.5, 67.5, dieId);
      // bottom right

      makeDot(17.5, 17.5, dieId);
      // top left

      makeDot(17.5, 67.5, dieId);
      // top right

      makeDot(67.5, 17.5, dieId);
      // bottom left
    } else if (randomNum === 5) {
      makeDot(42.5, 42.5, dieId);
      // middle middle

      makeDot(67.5, 67.5, dieId);
      // bottom right

      makeDot(17.5, 17.5, dieId);
      // top left

      makeDot(17.5, 67.5, dieId);
      // top right

      makeDot(67.5, 17.5, dieId);
      // bottom left
    } else if (randomNum === 6) {
      makeDot(67.5, 67.5, dieId);
      // bottom right

      makeDot(17.5, 17.5, dieId);
      // top left

      makeDot(17.5, 67.5, dieId);
      // top right

      makeDot(67.5, 17.5, dieId);
      // bottom left

      makeDot(42.5, 67.5, dieId); // middle right

      makeDot(42.5, 17.5, dieId);
    }
    // middle left
  }
  //makeDot(212.5, 212.5, "#die");
  //makeDot(87.5, 87.5, "#die");
  //makeDot(337.5, 377.5, "#die");
  function handleClick() {
    rollDie("#die");
  }
  $("#die").on("click", handleClick);
});
