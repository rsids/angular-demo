(function() {
    function MainController(ProfileService) {

        // Store a reference to our controller.
        var vm = this;


        activate();
        /**
         * activate is our constructor function and gets called when the controller is initialized
         */
        function activate() {

            getProfiles();
        }

        /**
         * Get the profiles from the json file
         */
        function getProfiles() {

            // Call getProfiles, which returns a promise. And when the promise resolves,
            // it executes the function inside 'then'. Which puts the data on our scope,
            // so the list gets populated.
            ProfileService.getProfiles().then(function(data) {
                vm.profiles = data.data.result;
            })
        }
    }

    angular.module('demo').controller('MainController', MainController);
}());