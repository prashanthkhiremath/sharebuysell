(function(){
angular.module('countDown',[])
	   .controller('countDownController', function($scope,$interval){
		   var calcNewYear = $interval(function(){
			   $scope.date_future = new Date(new Date().getFullYear(), 0, 26);
		        $scope.date_now = new Date();

		        $scope.seconds = Math.floor(($scope.date_future - ($scope.date_now))/1000);
		        $scope.minutes = Math.floor($scope.seconds/60);
		        $scope.hours = Math.floor($scope.minutes/60);
		        
		        $scope.days = Math.floor($scope.hours/24);		        
		        $scope.hours = $scope.hours-($scope.days*24);
		        $scope.minutes = $scope.minutes-($scope.days*24*60)-($scope.hours*60);
		        $scope.seconds = $scope.seconds-($scope.days*24*60*60)-($scope.hours*60*60)-($scope.minutes*60);
		        
		   },1000); 
	   })
})();