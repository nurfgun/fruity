angular.module('starter.directives', [])
.directive('myThing', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                dateOb: '=',
            },
            controller: function($scope, $element) {
				var readyState = 0;
				$scope.date = {
					n: "PM",
					h: 10,
					m: 57,
				}; 
				$scope.swiper1 = {};
				$scope.swiper2 = {};
				$scope.swiper3 = {};
				$scope.CONSTANTS = {
					1: ['AM', 'PM'],
					2: [1, 2, 3, 4, 5, 6,7,8,9,10,11,12],
					3: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
				};
				$scope.apply = function(){
					noonIndex = ($scope.date.n == "AM")? 0 : 1;
					hourIndex = $scope.CONSTANTS[2].indexOf($scope.date.h) + 3;
					minIndex = $scope.CONSTANTS[3].indexOf($scope.date.m) + 3;
					$scope.swiper1.slideTo(noonIndex);
					$scope.swiper2.slideTo(hourIndex);
					$scope.swiper3.slideTo(minIndex);
				};	
				$scope.$on('modal.shown', function(e){
						$scope.clock = $scope.dateOb || new Date();
						var n = ($scope.clock.getHours() >= 12)? 'PM' : 'AM';
						var h = ($scope.clock.getHours() > 12)? $scope.clock.getHours() - 12 : $scope.clock.getHours();
						if(h == 0) h = 12;
						var m = $scope.clock.getMinutes();
						$scope.date.n = n;
						$scope.date.h = h;
						$scope.date.m = m;
						$scope.apply();
				});
				$scope.$watch('date', function(){
					if($scope.clock && typeof $scope.clock.getTime == 'function'){
						var n = $scope.date.n;
						var h = $scope.date.h;
						if(n == "PM"){
							h = (h != 12)? h + 12 : h;
						}else{
							if(h == 12) h = 0;
						}
						var m = $scope.date.m;
						$scope.clock.setHours(h);
						$scope.clock.setMinutes(m);
						
					}
				}, true);
				$scope.$watch('date.n', function(){
					if(readyState == 3){
						noonIndex = ($scope.date.n == "AM")? 0 : 1;
						$scope.swiper1.slideTo(noonIndex);
					}
				});
				
				$scope.onReadySwiper = function (swiper, num) {
					var startPoint;
					readyState ++;
					$scope.$broadcast("swiperReady", readyState);
					swiper.on("touchStart", function(slider){
						var index = slider.activeIndex - 3;
						var cycle = $scope.CONSTANTS[num].length;
						if(index < 0) index += cycle;
						if(num == 2){
							startPoint = $scope.CONSTANTS[2][index%12];
						}
					});
					swiper.on("transitionEnd", function(slider){
						var index = slider.activeIndex - 3;
						var cycle = $scope.CONSTANTS[num].length;
						if(index < 0) index += cycle;
						switch (num){
							case 1 :
								$scope.date.n = $scope.CONSTANTS[1][slider.activeIndex];
								break;
							case 2 :
								var endPoint = $scope.CONSTANTS[2][index%12];
								if((slider.touches.diff < 0) && (startPoint >= endPoint || endPoint == 12)){
									$scope.date.n = ($scope.date.n == "AM")? "PM" : "AM";
								}	 
								if((slider.touches.diff > 0) && (startPoint <= endPoint || endPoint == 12)){
									$scope.date.n = ($scope.date.n == "AM")? "PM" : "AM";
								}	
								$scope.date.h = $scope.CONSTANTS[2][index%12];
								break;
							case 3 :
								$scope.date.m = $scope.CONSTANTS[3][index%60];
								break;
						}
						$scope.$apply();
					});
				};



            },

            link: function(scope, element, attrs) {
            },

            templateUrl:'lib/swiper/templates/slider.html',
        };
});
