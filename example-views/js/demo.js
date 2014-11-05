/**
 * Created by ids on 05/11/14.
 */
(function() {

    function config($stateProvider, $urlRouterProvider) {

        // Default to home
        $urlRouterProvider.otherwise("/");


        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "partials/home.html",
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .state('profile', {
                url: "/profile",
                templateUrl: "partials/profile.html",
                controller: 'ProfileController',
                controllerAs: 'profileCtrl'
            })
            .state('settings', {
                url: "/settings",
                templateUrl: "partials/settings.html",
                controller: 'SettingsController',
                controllerAs: 'settingsCtrl'
            });
    }

    angular.module('demo', ['ui.router']).config(config).controller('mainController',function($state){
        console.log('Activating main controller', $state);
    });
}());

