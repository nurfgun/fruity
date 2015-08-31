// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'TabCtrl',
  })

  // Each tab has its own nav history stack:

  .state('tab.showroom', {
    url: '/showroom',
    views: {
      'tab-showroom': {
        templateUrl: 'templates/tab-showroom.html',
        controller: 'ShowroomCtrl'
      }
    }
  })
    .state('tab.showroom-detail', {
      url: '/showroom/:fruitId',
      views: {
        'tab-showroom': {
          templateUrl: 'templates/showroom-detail.html',
          controller: 'ShowroomDetailCtrl'
        }
      }
    })
  .state('tab.plans', {
      url: '/plans',
      views: {
        'tab-plans': {
          templateUrl: 'templates/tab-plans.html',
          controller: 'PlansCtrl'
        }
      }
    })

  .state('tab.cart', {
      url: '/cart',
      views: {
        'tab-cart': {
          templateUrl: 'templates/tab-cart.html',
          controller: 'CartCtrl'
        }
      }
    })
  .state('tab.cart-detail', {
      url: '/cart/:itemId',
      views: {
        'tab-cart': {
          templateUrl: 'templates/cart-detail.html',
          controller: 'CartDetailCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.history', {
    url: '/history',
    views: {
      'tab-history': {
        templateUrl: 'templates/tab-history.html',
        controller: 'HistoryCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/showroom');

});
