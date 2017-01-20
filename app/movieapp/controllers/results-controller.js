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

        $scope.expand = function(idx, id){

            if($scope.results[idx].open == true){
                $scope.results[idx].open = false;
            }
            else {
                OMDBService.find(id)
                .then(function(data){
                    $scope.results[idx].data = data.data;
                    $scope.results[idx].open = true;
                });
            }                        
        }
    }
]);
