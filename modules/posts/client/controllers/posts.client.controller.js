(function () {
  'use strict';

  // Posts controller
  angular
    .module('posts')
    .controller('PostsController', PostsController);

  PostsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'postResolve'];

  function PostsController ($scope, $state, $window, Authentication, post) {
    var vm = this;

    vm.authentication = Authentication;
    vm.post = post;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    $scope.getContent = function() {
        console.log('Editor content:', vm.post.body);
    };

    $scope.setContent = function() {
        vm.post.body = 'Time: ' + (new Date());
    };
    $scope.tinymceOptions = {
        theme: 'modern',
        plugins: ['advlist autolink lists link image charmap preview anchor',
            'searchreplace visualblocks fullscreen',
            'insertdatetime media table contextmenu paste'],
        toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        image_advtab: true
    };

    // Remove existing Post
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.post.$remove($state.go('posts.list'));
      }
    }

    // Save Post
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.postForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.post._id) {
        vm.post.$update(successCallback, errorCallback);
      } else {
        vm.post.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('posts.view', {
          postId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
