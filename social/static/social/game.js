(function(){
	var app = angular.module('game', [ ]);
	app.config(function($interpolateProvider){
		$interpolateProvider.startSymbol('[[');
    	$interpolateProvider.endSymbol(']]');
	});
	var row = 0;
	var column = 0;
	var dim = 5;

	app.controller("PanelController", function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('GameController', function($scope){
		$scope.highscore = 0;
		$scope.user = user;
		$scope.board = createBoard(dim);
		$scope.started = false;

		$scope.dimension = function(num){
			dim = num;
			clearBoard($scope.board);
			$scope.board = createBoard(dim);
		}

		$scope.start = function(){
			clearSpot($scope.board);
			createRandom($scope.board);
			$scope.started = true;
			$scope.loss = false;
			$scope.times = false;
			$scope.scoreboard = true;
			$scope.score = 0;
			clock = new Date().getTime();
		};

		$scope.go = function(spot){
			if($scope.started){
				var y=check(spot, $scope.board);
				if(y){
					clock1 = new Date().getTime();
					if(clock1-clock<2000){
						$scope.score+=((2000-clock1+clock)/1000);
						$scope.score=(Math.round($scope.score*1000)/1000);
						clock = clock1;
					}
					else{
						if(high($scope.score, $scope.highscore)){
							$scope.highscore = $scope.score;
						}
						$scope.times = true;
						$scope.scoreboard = false;
						$scope.started = false;
					}
				}
				else{
					if(high($scope.score, $scope.highscore)){
						$scope.highscore = $scope.score;
					}
					$scope.loss = true;
					$scope.scoreboard = false;
					$scope.started = false;
				}
				clearSpot($scope.board);
				createRandom($scope.board);
			}
		};

		$scope.save = function(){
			var score = $scope.highscore;
			var user = $scope.user;
			$.ajax({
				method: "POST",
				url: "/save",
				data: {
					user : user,
					score : score,
				},
				success: function(){
					alert('sent score');
				},
				error: function(e){
					alert(e);
				},
			});
		};

	});

	function high(score, highscore){
		if(score>highscore){
			return true;
		}
	}

	function check(spot, board){
		var spotm = getSpot(board, row, column);
		var spotc = getSpot(board, dim-1-row, dim-1-column);
		if(spotm.content=="good"){
			if(spot==spotm){
				return true;
			}
			else{
				return false;
			}
		}
		if(spotm.content=="bad"){
			if(spot==spotc){
				return true;
			}
			else{
				return false;
			}
		}		
	}

	function clearSpot(board){
		var spotx = getSpot(board, row, column);
		spotx.content = "empty";
	}

	function createRandom(board){
		row = Math.floor(Math.random()*dim);
		column = Math.floor(Math.random()*dim);
		var x = Math.floor(Math.random()*7);
		var spot = getSpot(board, row, column);
		if(x%7==0){
			spot.content="good";
		}
		else{
			spot.content="bad";
		}
	}

	function getSpot(board, row, column){
		return board.rows[row].spots[column];
	}


	function createBoard(dim) {
	    var board = {};
	    board.rows = [];
	    
	    for(var i = 0; i < dim; i++) {
	        var row = {};
	        row.spots = [];
	        
	        for(var j = 0; j < dim; j++) {
	            var spot = {};
	            spot.content="empty";
	            row.spots.push(spot);
	        }
	        board.rows.push(row);
	    }
	    return board;
	}

	function clearBoard(board){
		board = {};
	}

})();