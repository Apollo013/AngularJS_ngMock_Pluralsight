'use strict';

angular.module('movieApp').controller('HomeController', [ '$scope', '$interval', 'OMDBService', 'PopularMovieService',
    function($scope, $interval, OMDBService, PopularMovieService){
	    var results = ['tt0076759','tt0080684','tt0086190'];//[];
        var idx = 0;

        var findMovie = function(id){
            OMDBService.find(id)
            .then(function(response){
                //console.log(response);
                $scope.result = response.data;
            })
            .catch(function(){
                console.log('Error finding: ' + id);
            });
        }
          
       // PopularMovieService.get()
        //.then(function(data){
            //results = data;
            //results = ['tt0076759','tt0080684','tt0086190'];
            findMovie(results[0]);
            $interval(function(){
                ++idx;
                findMovie(results[idx % results.length]);
                //console.log(idx % results.length);
            }, 5000);
        //});
    }
]);
