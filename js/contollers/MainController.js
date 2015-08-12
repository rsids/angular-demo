/**
 * Created by ids on 04/11/14.
 */
(function() {

    /**
     * This is our Main Controller. Pass it's dependencies as function arguments
     * @constructor
     */
    function MainController() {

        // Create a reference to ourselves
        var vm = this;

        vm.name = '';
    }

    angular.module('demoApp').controller('MainController', MainController);

}());