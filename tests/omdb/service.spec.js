describe('omdb service', function(){
    var movieData = {"Title":"Rogue One: A Star Wars Story","Year":"2016","Rated":"PG-13","Released":"16 Dec 2016","Runtime":"133 min","Genre":"Action, Adventure, Sci-Fi","Director":"Gareth Edwards","Writer":"Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story by), Gary Whitta (story by), George Lucas (based on characters created by)","Actors":"Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen","Plot":"The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.","Language":"English","Country":"USA","Awards":"2 wins & 8 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg","Metascore":"65","imdbRating":"8.1","imdbVotes":"168,065","imdbID":"tt3748528","Type":"movie","Response":"True"};

    it('should return search movie data', function(){
        var omdbApi = {};

        // Create a mock service for our data
        /*
        angular.mock.module({
            'omdbApi': {
                search : function(query){
                    return movieData;
                }
            }
        });
        */
        angular.mock.module(function($provide){
            $provide.factory('omdbApi', function(){
                return {
                    search : function(query){
                        return movieData;
                    }
                }
            });
        });

        // Inject it
        angular.mock.inject(function(_omdbApi_){
            omdbApi = _omdbApi_;
        });

        // Assert
        expect(omdbApi.search('star wars')).toEqual(movieData);
    });
});