'use strict';

angular.module('movieApp').filter('fromNow', function(){
    return function(releaseDate, currentDate){
        if(!releaseDate){
            return 'date value cannot be undefined';//throw 'date value cannot be undefined';
        }
        
        var date = releaseDate;

        if(typeof(date) === 'string'){
            date = new Date(date);
        }

        if(isNaN(date.getTime())){
            return releaseDate;
        }

        var YEAR_IN_MS = 60 * 60 * 24 * 365;
        var MONTH_IN_MS = 60 * 60 * 24 * 30;
        var now = currentDate || new Date();
        var dateDiff = (now.getTime() - date.getTime()) / 1000;
        var tzDiff = (now.getTimezoneOffset() - date.getTimezoneOffset()) * 60;
        var diffInMs = dateDiff + tzDiff;
        var yearsDiff = Math.floor(diffInMs / YEAR_IN_MS);
        var monthDiff = Math.floor(diffInMs / MONTH_IN_MS);

        //console.log(releaseDate.getTime().toString() + ' - ' + currentDate.getTime().toString());
        //console.log(dateDiff + ' - ' + tzDiff + ' - ' + diffInMs + ' - ' + YEAR_IN_MS + ' - ' + yearsDiff);

        if(yearsDiff > 0){
            return (yearsDiff === 1) ? yearsDiff + ' year ago' : yearsDiff + ' years ago';
        }
        else {
            return (monthDiff === 1) ? monthDiff + ' month ago' : monthDiff + ' months ago';
        }        
    }
});