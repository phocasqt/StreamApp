/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
	'click #submit':function(e){
		e.preventDefault();


		var username = $('#username').val();

		var password = $('#password').val();

		var confirmPassword = $('#confirm-password').val();

		if(password != confirmPassword) {
			alert('Passwords do not match')

		} else {
			var data = {
				username: username,
				password: confirmPassword
			};

			//add user account info here
			Accounts.createUser(data, function(error) {
				if(error){
					console.log(error.reason);
				} else {
					console.log('Created User! Woohoo!');
				}


				// body...
			});

			$('#username').val('');
			$('#password').val('');
			$('#confirm-password').val('');





		}


		


	},

	'click #cancel':function(e){
		e.preventDefault();
			$('#username').val('');
			$('#password').val('');
			$('#confirm-password').val('')
	}
});

/*****************************************************************************/
/* Register: Helpers */
/*****************************************************************************/
Template.Register.helpers({
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.onCreated(function () {
});

Template.Register.onRendered(function () {
});

Template.Register.onDestroyed(function () {
});
