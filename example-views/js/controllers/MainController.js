(function() {
    function MainController($rootScope, $state) {
        this.$state = $state;
          console.log($state, $state.current, $state.$current);

        $state.$on();
        $rootScope.$on('$stateChangeSuccess', function() {

        })
    }

    angular.module('demo').controller('MainController', MainController);
}());