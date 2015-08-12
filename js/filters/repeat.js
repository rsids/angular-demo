/**
 * Created by ids on 04/11/14.
 */
(function() {


    /**
     * Repeats the input by multiplier times
     * @returns {Function}
     */
    function repeat() {

        /**
         * @param {string} input The input to repeat
         * @param {int} multiplier The number of times to repeat the input
         * @repeat {string} the multiplied string
         */
        return function(input, multiplier) {
            var str = '';
            while(--multiplier >= 0) {
                str += input;
            }

            return str;
        }

    }

    angular.module('demoApp').filter('repeat', repeat);
}());
