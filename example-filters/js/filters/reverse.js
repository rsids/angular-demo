/**
 * Created by ids on 04/11/14.
 */
(function() {


    /**
     * A filter returns a function which accepts an input string and optionally some extra arguments
     * In this case, no additional arguments are accepted
     * @returns {Function}
     */
    function reverse() {

        return function(input) {
            // Easiest wat to reverse a string
            return input.split('').reverse().join('');
        }

    }

    angular.module('demo').filter('reverse', reverse);
}());
