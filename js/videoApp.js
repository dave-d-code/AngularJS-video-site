// main module for the videoApp

var videoApp = angular.module('videoApp', []); // if we had routes, they would go here

// declare other vars here, instead of separate scripts. to be used in the HTML page like CodeIgniter
// var videoSource = "video/StarlightScamper.mp4",
// 	titleDisplay = "Starlight Scamper",
// 	videoDescription = "Starlight Scamper: AngularJS project with video playback";


// controller section. normally goes into separate file

videoApp.controller('VideoController', ['$scope', function($scope) {
	$scope.videoDisplay = document.getElementById('myvideo');
	$scope.videoSource = "video/StarlightScamper.mp4";
	$scope.titleDisplay = "Starlight Scamper";
	$scope.videoDescription = "Starlight Scamper: AngularJS project with video playback";
	$scope.videoPlaying = false;
	$scope.currentTime;
	$scope.totalTime;

	$scope.initPlayer = function() {
		$scope.currentTime = 0;
		$scope.totalTime = 0;
		$scope.videoDisplay.addEventListener("timeupdate", $scope.updateTime, true);
		$scope.videoDisplay.addEventListener("loadedmetadata", $scope.updateData, true)
	};

	$scope.updateTime = function(e) {
		$scope.currentTime = e.target.currentTime;
		$scope.updateLayout();
	};

	$scope.updateData = function(e) {
		$scope.totalTime = e.target.duration;
	};

	$scope.updateLayout = function() {
		if (!$scope.$phase) {
			$scope.$apply();
		}
	};

	$scope.togglePlay = function() {
		if ($scope.videoDisplay.paused) {

			$scope.videoDisplay.play();
			$scope.videoPlaying = true;
			$('#playBtn').children('span').toggleClass('glyphicon-play', false);
			$('#playBtn').children('span').toggleClass('glyphicon-pause', true);

		} else {

			$scope.videoDisplay.pause();
			$scope.videoPlaying = false;
			$('#playBtn').children('span').toggleClass('glyphicon-play', true);
			$('#playBtn').children('span').toggleClass('glyphicon-pause', false);

		}
	}; // end of togglePlay fun

	$scope.toggleMute = function() {
		if ($scope.videoDisplay.volume == 0.0) {

			$scope.videoDisplay.volume = 1.0;
			$('#muteBtn').children('span').toggleClass('glyphicon-volume-up', true);
			$('#muteBtn').children('span').toggleClass('glyphicon-volume-off', false);

		} else {

			$scope.videoDisplay.volume = 0.0
			$('#muteBtn').children('span').toggleClass('glyphicon-volume-up', false);
			$('#muteBtn').children('span').toggleClass('glyphicon-volume-off', true);

		}
	}; // end of toggleMute fun

	// initialise the player
	$scope.initPlayer();
	
}]); // end of controller function