define(
	[
		'jquery',
		'underscore',
		'backbone',
		'router',
		'mediator',
	], 

	function($, _, Backbone, router, mediator){


		var init = function(){
			
			router.init();
			
			//an example subscription
			mediator.subscribe(showAlert, 'global/showAlert');

		}

		var showAlert = function(){
			console.log('Here is an alert');
		}

		return {
			init: init,
			showAlert: showAlert
		}
	
	}

);