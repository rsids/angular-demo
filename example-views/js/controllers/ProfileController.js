
// Static profile controller
(function() {
    function ProfileController() {
        var _this = this;

        _this.profile = {name: 'Ids Klijnsma',
                        email: 'ids.klijnsma@clockwork.nl',
                        phone: '+31 6 103 73 574'};
    }

    angular.module('demo').controller('ProfileController', ProfileController);
});



// Profile controller with service
(function() {
    function ProfileController(ProfileService) {

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

            ProfileService.getProfile().then(function(data) {
                _this.profile = data;
            });
        }

        /**
         * Save the data
         */
        function onSaveData() {
console.log("Saving profile: ", _this.profile);
            ProfileService.setProfile(_this.profile).then(function(data) {
                _this.profile = data;
            });
        }

        /**
         * Clear our profile
         */
        function onDeleteData() {

            ProfileService.setProfile(null).then(function(data) {
                _this.profile = data;
            });
        }
    }

    angular.module('demo').controller('ProfileController', ProfileController);
}());