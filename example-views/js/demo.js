/**
 * Created by ids on 05/11/14.
 */
(function() {

    /**
     * Configure the routing
     * @param $stateProvider The stateProvider is a ui.router service which configures which controller to a attach to a state
     * @param $urlRouterProvider The urlRouterProvider is a build in router, which we only use to set a default
     */
    function config($stateProvider, $urlRouterProvider) {

        // Default to home
        $urlRouterProvider.otherwise("/");


        // Configure the states and their controllers
        $stateProvider

            // The state home binds to our HomeController and has a template located in partials/home.html
            .state('home', {
                url: "/",
                templateUrl: "partials/home.html",
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            // The state profile binds to our ProfileController and has a template located in partials/profile.html
            .state('profile', {
                url: "/profile",
                templateUrl: "partials/profile.html",
                controller: 'ProfileController',
                controllerAs: 'profileCtrl'
            });
    }

    // Initialize our app, this app has an external dependency, called ui.router. You can load multiple dependencies
    // by adding them to the array.
    // Next we call config, which does some configuration before initializing our app.
    angular.module('demo', ['ui.router']).config(config);
}());

