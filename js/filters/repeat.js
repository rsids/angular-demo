/**
 * Created by ids on 04/11/14.
 */
(function() {


    function repeat() {

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
