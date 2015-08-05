(function() {

    /**
     * Our profileService saves the entered data in the localStorage, and retrieves it with getProfile
     * @param $q
     * @param $http
     * @returns {{getProfile: getProfile, setProfile: setProfile}}
     * @constructor
     */
    function ProfileService($q, $http) {

        var profiles;

        /**
         * Delete a profile by it's id
         * @param id
         * @returns {*}
         */
        function deleteProfile(id) {
            var defer = $q.defer();

            // Call getProfiles. If the profiles have been loaded before, it returns profiles, otherwise, it'll first
            // load the json file, populate profiles and then return profiles.
            getProfiles().then(function() {


                // Loop over the profiles to find our profile
                for(var i = 0; i < profiles.length; i++) {

                    if(Number(id) === Number(profiles[i].id)) {
                        // Delete it
                        profiles.splice(i, 1);
                        break;
                    }
                }

                defer.resolve()
            });

            return defer.promise;
        }

        /**
         * Gets the profile from the list
         * @returns {*}
         */
        function getProfile(id) {

            var defer = $q.defer();

            // Call getProfiles. If the profiles have been loaded before, it returns profiles, otherwise, it'll first
            // load the json file, populate profiles and then return profiles.
            getProfiles().then(function(data) {


                var found = false;
                // Loop over the profiles to find our profile
                for(var i = 0; i < data.length; i++) {

                    if(Number(id) === Number(data[i].id)) {
                        defer.resolve(data[i]);
                        found = true;
                        break;
                    }
                }

                if(!found) {
                    defer.resolve({});
                }
            });

            return defer.promise;
        }



        /**
         * Gets all the profiles from the json file
         * @returns {*}
         */
        function getProfiles() {
            var defer = $q.defer();

            // Did we load our profiles already?
            if(profiles !== undefined) {
                defer.resolve(profiles);
            } else {

                // If not, get a fresh copy from the server
                $http.get('assets/people.json').then(function(data) {
                    profiles = data.data.result;
                    defer.resolve(profiles);
                });
            }

            return defer.promise;
        }

        /**
         * Stores the profile and returns the saved profile
         * @param profile
         * @returns {*}
         */
        function setProfile(profile) {

            if(!profile.hasOwnProperty('id')) {
                profile.id = Math.round(new Date().getTime() / 1000);
                profiles.push(profile);
            } else {

                // Store the given profile
                for(var i = 0; i < profiles.length; i++) {
                    if(profile.id === profiles[i].id) {
                        profiles[i] = profile;
                    }
                }
            }

            // Retrieve the profile by just calling getProfile.
            return getProfile(profile.id);
        }

        // Expose our methods to the outside world
        return {
            getProfiles: getProfiles,
            getProfile: getProfile,
            setProfile: setProfile,
            deleteProfile: deleteProfile
        }
    }

    angular.module('demo').service('ProfileService', ProfileService);
}());