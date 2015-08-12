
(function() {

    /**
     * Handles editing and deleting of profiles
     * @param $state
     * @param ProfileService
     * @constructor
     */
    function ProfileController($state, ProfileService) {

        /**
         * Reference to the controller
         * @type {ProfileController}
         * @private
         */
        var vm = this;

        vm.saveData = onSaveData;
        vm.deleteData = onDeleteData;
        vm.profile = {};

        activate();

        /**
         * Constructor
         */
        function activate() {
            if($state.params.hasOwnProperty('id')) {
                // Call the profileService and set the data in our scope
                ProfileService.getProfile($state.params.id).then(function(data) {
                    vm.profile = data;
                });

            }
        }

        /**
         * Save the data
         */
        function onSaveData() {
            // Save the data, and set the saved data in our scope
            vm.profile.created = new Date().getTime() / 1000;

            // Call profile service to save the data
            ProfileService.setProfile(vm.profile).then(function(data) {
                vm.profile = data;
            });
        }

        /**
         * Clear our profile
         */
        function onDeleteData() {

            // Set the profile to an empty object
            ProfileService.deleteProfile(vm.profile.id).then(function() {

                // On result, navigate to the home state
                $state.go('home');
            });
        }
    }

    angular.module('demo').controller('ProfileController', ProfileController);
}());