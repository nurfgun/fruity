angular.module('starter.controllers', [])
.controller('TabCtrl', function($scope){
	$scope.data = {
		cartShowDelete : false,
	};

})
.controller('ShowroomCtrl', function($scope) {
})
.controller('ShowroomDetailCtrl', function($scope, $ionicModal) {
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
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
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
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

.controller('CartCtrl', function($scope) {
	$scope.showDelete = false;
	$scope.toggleShowDelete = function(){
		$scope.showDelete = !$scope.showDelete;
		console.log($scope.showDelete);
	};

})
.controller('CartDetailCtrl', function($scope) {
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('HistoryCtrl', function($scope) {
});
