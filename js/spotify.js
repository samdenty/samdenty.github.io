/*
 *  -----------------------------------
 *  spotifyCurrentlyPlaying.js - v0.3.2
 *  -----------------------------------
 *

function getSong(callback, name) {
	var lastfm_tracks = [];
	// Set the request URL for Last.fm
	var lastfm_request_url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + name + '&api_key=be40e1e31ef39fd4adf7390a9a781d06&limit=1&format=json';

	// Make a request to the Last.fm API
	var request = new XMLHttpRequest();
	request.open('GET', lastfm_request_url, true);

	// Check for a successful response
	request.onload = function() {
		// Parse the response
		var data = JSON.parse(request.responseText);
		var tracks = data.recenttracks.track;
		// Check the status of the request
		if (request.status >= 200 && request.status < 400) {
			if (tracks.length > 0) {
				// Update our values
				if (tracks[0]) {
					// Loop through the tracks
					tracks.forEach(function(el, idx, arr) {
						lastfm_tracks[idx] = {
							title: arr[idx].name,
							artist: arr[idx].artist['#text'],
							album: arr[idx].album['#text'],
							cover: arr[idx].image[3]['#text'],
							url: arr[idx].url
						};
					});
				} else {
					lastfm_tracks.push({
						title: tracks.name,
						artist: tracks.artist['#text'],
						album: tracks.album['#text'],
						cover: tracks.image[3]['#text'],
						url: tracks.url
					});
				}
			}

			// Run the callback function
			callback(lastfm_tracks[0].artist, lastfm_tracks[0].title, lastfm_tracks[0].cover, lastfm_tracks[0].url);
		} else {
			// Error from the server
			throw data.message;
		}
	};

	// Handle any errors
	request.onerror = function() {
		// Connection error
		throw 'connection error';
	};

	// Send the request
	request.send();
}

getSong(function(artist, title, cover, sUrl) {
	if (cover) {
		$("#cover").attr("src", cover)
	} else {
		$("#cover").attr("src", "/images/misc/music.png")
	}
	if (sUrl) $("#sUrl").attr("href", sUrl);
	$("#artist").html(artist);
	$("#song").html(title)
}, "samd3n");

var prevSong;

setInterval(function() {
	getSong(function(artist, title, cover, sUrl) {
		if (prevSong != title) {
			prevSong = title;
			if (cover) {
				$("#cover").attr("src", cover)
			} else {
				$("#cover").attr("src", "/images/misc/music.png")
			}
			if (sUrl) $("#sUrl").attr("href", sUrl);
			$("#artist").html(artist);
			$("#song").html(title)
		}
	}, "samd3n");
}, 2000);