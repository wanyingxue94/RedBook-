'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise('not-found');

    // Home state routing
    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'modules/posts/views/list-posts.client.view.html',
          controller: 'PostsListController',
          controllerAs: 'vm',
          data: {
              pageTitle: 'Posts List'
          }
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/views/404.client.view.html'
      });
  }
]);
