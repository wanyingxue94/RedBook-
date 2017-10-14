(function () {
    'use strict';

    angular
        .module('posts')
        .controller('PostsCardTemplateController', PostsCardTemplateController);

    PostsCardTemplateController.$inject = ['PostsService', '$scope', '$state', '$window'];

    function PostsCardTemplateController(PostsService, $scope, $state, $window) {
        var vm = this;

        function remove() {
            if ($window.confirm('Are you sure you want to delete?')) {
                it.data.post.$remove($state.go('posts.list'));
            }
        }
    }
}());
