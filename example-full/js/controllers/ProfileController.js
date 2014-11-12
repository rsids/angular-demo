
(function() {
    function ProfileController($state, ProfileService) {

        /**
         * Reference to the controller
         * @type {ProfileController}
         * @private
         */
        var _this = this;

        _this.saveData = onSaveData;
        _this.deleteData = onDeleteData;
        _this.profile = {};

        activate();

        /**
         * Constructor
         */
        function activate() {
            if($state.params.hasOwnProperty('id')) {
                // Call the profileService and set the data in our scope
                ProfileService.getProfile($state.params.id).then(function(data) {
                    _this.profile = data;
                });

            }
        }

        /**
         * Save the data
         */
        function onSaveData() {
            // Save the data, and set the saved data in our scope
            _this.profile.created = new Date().getTime() / 1000;
            ProfileService.setProfile(_this.profile).then(function(data) {
                _this.profile = data;
            });
        }

        /**
         * Clear our profile
         */
        function onDeleteData() {

            // Set the profile to an empty object
            ProfileService.deleteProfile(_this.profile.id).then(function() {
                $state.go('home');
            });
        }
    }

    angular.module('demo').controller('ProfileController', ProfileController);
}());