Router.map(function(){
  this.route('home', {path: '/home'});
  this.route('search', {path: '/search'});
  this.route('map', {path: '/map'});
  this.route('history', {path: '/history'});
  this.route('account', {path: '/account'});
});

// Jack's map stuff ///////////
Template.map.rendered = function() {
    if (! Session.get('map'))
        gmaps.initialize();
 
    //37.773799, -122.415814

	var mikeMarker = {
		id: 'mike',
		lat: 37.773799,
		lng: -122.415814,
		title: "Michael Betts"
	};

	// check if marker already exists
	//if (!gmaps.markerExists('id', mikeMarker.id))
	gmaps.addMarker(mikeMarker);

    // Deps.autorun(function() {
    //     var pages = FacebookPages.find().fetch();
 
    //     _.each(pages, function(page) {
    //         if (typeof page.location !== 'undefined' &&
    //             typeof page.location.latitude !== 'undefined' &&
    //             typeof page.location.longitude !== 'undefined') {
 
    //             var objMarker = {
    //                 id: page._id,
    //                 lat: page.location.latitude,
    //                 lng: page.location.longitude,
    //                 title: page.name
    //             };
 
    //             // check if marker already exists
    //             if (!gmaps.markerExists('id', objMarker.id))
    //                 gmaps.addMarker(objMarker);
 
    //         }
    //     });
    // });
}

Template.map.destroyed = function() {
    Session.set('map', false);
}

////////////

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
  },
  'click #no': function () {
  	var userId = Meteor.userId();
  	var fighter = Session.get("fighter");

  	if(!userId || !fighter){
  		console.log("this shouldn't happen!")
  		return;
  	}

  	//Meteor.users.update(userId, {$push: {blocked: fighter}})
  }
});
