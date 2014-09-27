Router.map(function(){
  this.route('home', {page: '/'});

});

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
