// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngNumberPicker', 'ngCordova','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAV6AVt9iTDoa5Rla_xbrNO7EDjcRzSrmA",
    authDomain: "livro-ionic.firebaseapp.com",
    databaseURL: "https://livro-ionic.firebaseio.com"
  };
  firebase.initializeApp(config);



    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }



  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  $ionicConfigProvider.navBar.alignTitle('center');

  


  
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.bebidas' , {
      url : '/bebidas',
      views: {
        'menuContent' : {
            templateUrl : 'templates/bebidas.html',
            controller : 'BebidasCtrl'         
        }
      }
  })

  .state('app.petiscos', {
      url: '/petiscos',
      views : {
        'menuContent' : {
            templateUrl : 'templates/petiscos.html',
            controller : 'PetiscosCtrl'
        }
      }
  })

  .state('app.detalhar', {
      url: '/detalhar/:itemID',
      views : {
        'menuContent' : {
            templateUrl : 'templates/detalhe-item.html',
            controller : 'DetalharCtrl'
        }
      }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
  })
  .state('app.camera', {
      url: '/camera',
      views: {
        'menuContent': {
          templateUrl: 'templates/camera.html',
          controller : 'CameraCtrl'
        }
      }
  })
  .state('app.conta', {
      url: '/conta',
      views: {
        'menuContent': {
          templateUrl: 'templates/conta.html',
          controller : 'ContaCtrl'
        }
      }
 
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/playlists');
  $urlRouterProvider.otherwise('/app/browse');
  
});
