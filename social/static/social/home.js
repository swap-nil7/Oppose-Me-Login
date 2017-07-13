(function(){
	var app = angular.module('index', [ ]);

	app.controller("PanelController", function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
		if(this.tab===1){
			var user = user;
			$.ajax({
				method: "POST",
				url: "/showplayer",
				data: {
					user : user,
				},
				success: function(){
					console.log("received")
				},
				error: function(){
					console.log("not received");
				},
			});
		}
	});
})();