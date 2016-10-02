angular.module('myApp', ['ngMaterial'])
    .controller('MainCtrl', function ($scope, $mdSidenav, $log) {
        $scope.AppName = 'Its me!';
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function () {
            return $mdSidenav('right').isOpen();
        };

        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };

        $scope.menuList = [
            { name: 'Blog', icon: 'chrome_reader_mode' },
            { name: 'About', icon: 'android' },
            { name: 'Resume', icon: 'attach_file' },
            { name: 'Projects', icon: 'store' }
        ];

        function buildToggler(navID) {
            return function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }
    });