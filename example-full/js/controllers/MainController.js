(function() {
    function MainController($state) {
        this.$state = $state;

    }

    angular.module('demo').controller('MainController', MainController);
}());