var five = require('johnny-five');
var songs = require('j5-songs');

five.Board().on('ready', function () {
	//Create object
  	var piezo = new five.Piezo(9);

	// Load a song object
	var song = songs.load('mario-intro');

	// Play it !
	piezo.play(song);

	// List all songs
	songs.list(function (err, tunes) {
	// Object literal with all the songs
	});
});