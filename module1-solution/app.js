(function(){

    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope){
        $scope.inputLunch = "";
        $scope.outputMessage ="";
        $scope.colorType="black";

        $scope.checkLunch = function () {
            var itemsLunch = $scope.inputLunch;
            var itemsLunchArray= itemsLunch.split(',');
            var itemsLunchArrayLength = itemsLunchArray.length;
            var itemsLunchEmpty =checkIfEmpty (itemsLunchArray);

            console.log(itemsLunchArrayLength);
            console.log(itemsLunchEmpty);

            
            if (itemsLunch == ""){
                $scope.outputMessage = "Please enter data first";
                $scope.colorType='red';
                console.log($scope.colorType);
            }else{
                
                if(itemsLunchArray.length <= 3 ){
                    $scope.outputMessage ="Enjoy!"
                    $scope.colorType="green";
                }else{
                    $scope.outputMessage ="Too much!"
                    $scope.colorType="green";
                }

            }
            
        
            return $scope.outputMessage;
          };

           function checkIfEmpty(itemsLunchArray){
            var newCountLength = 0;
            for (var i = 0; i< itemsLunchArray.length;i++){
                if (itemsLunchArray[i].trim() != ""){
                    console.log(itemsLunchArray[i]);
                    newCountLength++;
                   
                }
            }
            return newCountLength;
        }
    }
    
   
})();