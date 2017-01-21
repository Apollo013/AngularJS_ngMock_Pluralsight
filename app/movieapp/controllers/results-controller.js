'use strict';

angular.module('movieApp').controller('ResultsController', [ '$scope', '$location', '$exceptionHandler', 'OMDBService',
    function($scope, $location, $exceptionHandler, OMDBService){
		var query = $location.search().q;

		OMDBService.search(query)
        .then(function(data) {
            if(data.status == 200){
                $scope.results = data.data.Search;
            }
            else{
                console.log('Something went wrong: ' + JSON.stringify(data));
            };            
        })
        .catch(function(e) {
            $exceptionHandler(e);
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
