(function() {
    function MainController($state) {
        this.$state = $state;
        //  console.log($state.current, $state.$current);
    }

    angular.module('demo').controller('MainController', MainController);
}());