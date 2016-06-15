/*****************************************************************************/
/* Nav: Event Handlers */
/*****************************************************************************/
Template.Nav.events({
	'click .logout':function(e){
		e.preventDefault();
		Meteor.logout();
	}
});

/*****************************************************************************/
/* Nav: Helpers */
/*****************************************************************************/
Template.Nav.helpers({
	loggedIn:function(){

		var currentUser = Meteor.userId();

		if(currentUser) {
			return true
		} else {
			return false
		}
	}
});

/*****************************************************************************/
/* Nav: Lifecycle Hooks */
/*****************************************************************************/
Template.Nav.onCreated(function () {
});

Template.Nav.onRendered(function () {
});

Template.Nav.onDestroyed(function () {
});
