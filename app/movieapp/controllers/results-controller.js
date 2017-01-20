'use strict';

angular.module('movieApp').controller('ResultsController', [ '$scope', '$location', 'OMDBService',
    function($scope, $location, OMDBService){
		var query = $location.search().q;

		OMDBService.search(query)
        .then(function(data) {
            //console.log(data);
            $scope.results = data.data.Search;
        })
        .catch(function() {
            $scope.errorMessage = 'Something went wrong!'
        });
    }
]);
