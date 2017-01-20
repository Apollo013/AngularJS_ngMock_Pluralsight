describe('Search Controller Test Suite', function(){

    var $controller, $scope, $location, searchController;

    beforeEach(angular.mock.module('movieApp'));

    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_, _$location_){
        $controller = _$controller_;
        $location = _$location_;
        $scope = _$rootScope_.$new();    

        $controller('SearchController', {$scope: $scope, $location: $location});
    }));

    it('should redirect to the query results page for non-empty query', function(){
        $scope.query = 'star wars';
        $scope.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('should NOT redirect to the query results page for an empty query', function(){
        $scope.query = '';
        $scope.search();
        expect($location.url()).toBe('/');
    });

});