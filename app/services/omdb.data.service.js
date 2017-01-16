'use strict';

angular.module('omdb').factory('omdbApi', [
    function(){
        /*----------------------------------------------------------------------------------------
            Service functionality
        ----------------------------------------------------------------------------------------*/
        var _search = function(query){
            return {"Title":"Rogue One: A Star Wars Story","Year":"2016","Rated":"PG-13","Released":"16 Dec 2016","Runtime":"133 min","Genre":"Action, Adventure, Sci-Fi","Director":"Gareth Edwards","Writer":"Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)","Actors":"Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen","Plot":"The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.","Language":"English","Country":"USA","Awards":"2 wins & 8 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.1","imdbVotes":"168,065","imdbID":"tt3748528","Type":"movie","Response":"True"};
        }

        /*----------------------------------------------------------------------------------------
            Expose service functionality
        ----------------------------------------------------------------------------------------*/
        var service = {};
        service.search = _search;
        return service;
    }
]);