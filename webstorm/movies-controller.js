/**
 * Created by work on 7/7/15.
 */
var movieApp = angular.module('movieApp', []);

movieApp.controller('movieCtrl', function ($scope) {
        $scope.movieslist = [
            {
                'title' : 'Terminator',
                'description' : 'blabla'
            },
            {
                'title' : 'Gladiator',
                'description' : ' mehr blabla'
            }



        ];

    }

);