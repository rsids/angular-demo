/**
 * Created by ids on 04/11/14.
 */
(function () {

    /**
     * Our simple directive adds the clockwork logo to the page
     * @returns {{restrict: string, link: Function}}
     * @constructor
     */
    function clockwork() {
        return {
            // Restrict a tells angular that this directive is only valid as attribute
            restrict: 'E',

            // This is our template. Basically, replace every <clockwork> tag we find with this template.
            template: '<img src="assets/visualLogoCW.png" />'
        }
    }


    // Register the directive under the name 'icon'
    angular.module('demo').directive('clockwork', clockwork);
}());