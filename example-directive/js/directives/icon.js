/**
 * Created by ids on 04/11/14.
 */
(function () {

    /**
     * Our simple directive adds an icon to the given element
     * @returns {{restrict: string, link: Function}}
     * @constructor
     */
    function icon() {
        return {
            // Restrict a tells angular that this directive is only valid as attribute
            restrict: 'A',
            link: link
        }
    }

    /**
     * Inside the link function you can do your dom manipulation
     * @param $scope The scope of this directive (if it has it own scope) or the scope of the controller
     * @param element The element where this directive applies to
     * @param attr All attributes assigned to element
     */
    function link($scope, element, attr) {

        // element is a jqLite element. This directive inserts an icon in it,
        // the icon attribute of the directive holds the correct icon
        element.prepend('<i class="glyphicon glyphicon-' + attr.icon + '"></i>&nbsp;');
    }

    // Register the directive under the name 'icon'
    angular.module('demo').directive('icon', icon);
}());