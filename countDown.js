var countdownGenerator = function (x) {
    /* your code here */
    var count = x;
    
    return function () {
      /* your code here */
      if (count > 0) {
          console.log("T-minus " + count + "...");
      } else if (count === 0) {
          console.log("Blast Off!");
      } else if (count < 0) {
          console.log("Rockets already gone, bub!");
      }
      return count--
  }
};
  
  var countdown = countdownGenerator(1);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!