'use strict';

angular.module('omdb').factory('omdbApi', [
    function(){
        /*----------------------------------------------------------------------------------------
            Service functionality
        ----------------------------------------------------------------------------------------*/
        var _search = function(query){
            return {"Title":"Rogue One: A Star Wars Story","Year":"2016","Rated":"PG-13","Released":"16 Dec 2016","Runtime":"133 min","Genre":"Action, Adventure, Sci-Fi","Director":"Gareth Edwards","Writer":"Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)","Actors":"Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen","Plot":"The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.","Language":"English","Country":"USA","Awards":"2 wins & 8 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.1","imdbVotes":"168,065","imdbID":"tt3748528","Type":"movie","Response":"True"};
        }

        var _searchById = function(id){
            return {"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 48 wins & 28 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg","Metascore":"92","imdbRating":"8.7","imdbVotes":"945,400","imdbID":"tt0076759","Type":"movie","Response":"True"};
        }

        /*----------------------------------------------------------------------------------------
            Expose service functionality
        ----------------------------------------------------------------------------------------*/
        var service = {};
        service.search = _search;
        service.searchById = _searchById;
        return service;
    }
]);