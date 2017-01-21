'use strict';

angular.module('movieApp').factory('OMDBService', [ '$http',
    function($http){
        /*----------------------------------------------------------------------------------------
            Service vars
        ----------------------------------------------------------------------------------------*/
        var service = {};
        var baseUrl = 'http://www.omdbapi.com/?v=1&';

        /*----------------------------------------------------------------------------------------
            Service functionality
        ----------------------------------------------------------------------------------------*/
        function httpPromise(url){
            return $http.get(url).then(
                function(response){
                    //console.log('\ngood: ' + JSON.stringify(response));
                    return response
                },
                function(errorResponse){
                    //console.log('\nbad: ' + JSON.stringify(errorResponse));
                    return errorResponse;
                    //throw 'Something went wrong!'
                }
            );            
        }

        service.search = function(query){
            return httpPromise(baseUrl + 's=' + encodeURIComponent(query));
        }

        service.find = function(id){
            return httpPromise(baseUrl + 'i=' + encodeURIComponent(id));
        }

        /*----------------------------------------------------------------------------------------
            Expose service
        ----------------------------------------------------------------------------------------*/
        return service;
    }
]);