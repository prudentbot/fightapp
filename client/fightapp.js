Router.map(function(){
  this.route('home', {path: '/home'});
  this.route('search', {path: '/search'});
  this.route('map', {path: '/map'});
  this.route('history', {path: '/history'});
  this.route('account', {path: '/account'});
});

Template.home.loggedIn = function() {
	return !!Meteor.user();
}

Template.picker.fighter = function() {
	var fighter = Meteor.users.findOne({});
	Session.set("fighter", fighter);
	return fighter;
}

Template.picker.events({
  'click #request': function () {
  	var userId = Meteor.userId();
  	var fighter = Session.get("fighter");

  	if(!userId || !fighter){
  		console.log("this shouldn't happen!")
  		return;
  	}

  	console.log(fighter);
  	//Meteor.users.update(userId, {$push: {prospects: fighter}});
  }
});
