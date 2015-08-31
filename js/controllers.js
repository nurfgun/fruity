angular.module('starter.controllers', [])
.controller('TabCtrl', function($scope){
	$scope.data = {
		cartShowDelete : false,
	};

})
.controller('ShowroomCtrl', function($scope, Fruits) {
	$scope.fruits = Fruits.sortByType();

})
.controller('ShowroomDetailCtrl', function($scope, $ionicModal, $stateParams, $state, Fruits) {

  $ionicModal.fromTemplateUrl('templates/modal-plan.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.cancelModal = function() {
    $scope.modal.hide();
  };
	
	$scope.fruit = Fruits.get($stateParams.fruitId);
	$scope.goPlanner = function(){
		console.log('clicked');
		$scope.modal.hide();
		$state.go('tab.plans');
	};

})

.controller('PlansCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/modal-schedule.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.cancelModal = function() {
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
})

.controller('CartCtrl', function($scope) {
	$scope.showDelete = false;
	$scope.toggleShowDelete = function(){
		$scope.showDelete = !$scope.showDelete;
	};

})
.controller('CartDetailCtrl', function($scope, $stateParams, Fruits) {
	$scope.fruit = Fruits.get($stateParams.itemId);
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('HistoryCtrl', function($scope) {
});
