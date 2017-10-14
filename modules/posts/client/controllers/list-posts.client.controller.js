(function () {
    'use strict';

    angular
        .module('posts')
        .controller('PostsListController', PostsListController);

    PostsListController.$inject = ['PostsService', '$scope','Authentication', '$state', '$window'];

    function PostsListController(PostsService, $scope, Authentication, $state, $window) {
        var vm = this;

        $scope.filters = [[['tabs', 'contains', 'home']]];
        $scope.rankers = null;
        $scope.posts = [];

        PostsService.query(function (posts) {
            angular.forEach(posts, function (value, key) {
                $scope.posts.push({
                    id: key,
                    template: 'modules/posts/views/post-card-template.client.view.html',
                    tabs: value.tags,
                    data: {post: value}
                });
            });
        });


        $scope.isRankerActive = function (ranker) {
            return $scope.rankers && $scope.rankers[0][0] === ranker;
        };

        $scope.isDropdownOpen = {
            orderBy: false,
            filter: false
        };

        /**
         * Update the filters array based on the given filter
         * $param filter: the name of a tab like 'work'
         */
        $scope.filter = function (filter) {
            $scope.filters = [[['tabs', 'contains', filter]]];
        };

        $scope.isTabActive = function (tab) {
            return $scope.filters && $scope.filters[0][0][2] === tab;
        };

        /**
         * Update the rankers array based on the given ranker
         * $param ranker: the name of a card's property or a customJavaScript function
         */
        $scope.orderBy = function (ranker) {
            $scope.rankers = [[ranker, 'asc']];
        };

    }
}());
