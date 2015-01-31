var five = require("johnny-five"),
	board = new five.Board();

	board.on("ready", function() {
	  	// Create object
	  	var piezo = new five.Piezo(9);

  		// Inject piezo
  		board.repl.inject({
    		piezo: piezo
  	});

	// play it!
	piezo.play({
	// Sounds array composed of
	// First argument is the note (if null, meaning no note rs)
	// Second argument is the time of the beat 
		song: [
		  ["C4", 1],
		  ["C4", 1],
		  ["G4", 1],
		  ["G4", 1],
		  ["A4", 1],
		  ["A4", 1],
		  ["A4", 1],
		  ["G4", 1],
		  ["F4", 2],
		  ["F4", 1],
		  ["E4", 1],
		  ["E4", 1],
		  ["D4", 1],
		  ["D4", 1],
		  ["C4", 1],
		  [null, 2]
		],
		tempo: 300
	});
});
