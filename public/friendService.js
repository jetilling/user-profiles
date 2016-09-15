angular.module('userProfiles')
.factory('friendService', function( $http ) {

  return {

    login: function( user ) {
      /* FIX ME */
      console.log(user)
      return $http.post('http://localhost:8080/api/login', user)
      // .then(function(response){
      // })

    },

    getFriends: function() {
    	/* FIX ME */
      return $http.get('http://localhost:8080/api/profiles').then(function(response){ return response.data})
    }
  }
});
