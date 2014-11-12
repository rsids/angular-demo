(function() {

    /**
     * Our profileService saves the entered data in the localStorage, and retrieves it with getProfile
     * @param $q
     * @returns {{getProfile: getProfile, setProfile: setProfile}}
     * @constructor
     */
    function ProfileService($q) {

        /**
         * Gets the profile fron the localstorage (if available);
         * @returns {*}
         */
        function getProfile() {

            var defer = $q.defer(),
                profile = localStorage.getItem("profile");

            // Is there a profile available? Then decode the json string into an object
            if(profile) {
                profile = JSON.parse(profile);
            }
            defer.resolve(profile);

            return defer.promise;
        }

        /**
         * Stores the profile in the localStorage and returns the saved profile
         * @param profile
         * @returns {*}
         */
        function setProfile(profile) {
            // Store the given profile
            localStorage.setItem("profile", JSON.stringify(profile));

            // Retrieve the profile by just calling getProfile.
            return getProfile();
        }

        // Expose our methods to the outside world
        return {
            getProfile: getProfile,
            setProfile: setProfile
        }
    }

    angular.module('demo').service('ProfileService', ProfileService);
}());