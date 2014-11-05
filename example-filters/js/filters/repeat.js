/**
 * Created by ids on 04/11/14.
 */
(function() {


    /**
     * A filter returns a function which accepts an input string and optionally some extra arguments
     * In this case, it accepts multiplier as an argument
     * @returns {Function}
     */
    function repeat() {

        return function(input, multiplier) {

            var str = '';

            // Repeat the input
            while(--multiplier >= 0) {
                str += input;
            }

            // Return the repeated input
            return str;
        }

    }

    angular.module('demo').filter('repeat', repeat);
}());
