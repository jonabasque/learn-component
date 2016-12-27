(function(){
    //El módulo greetings va a tener varios componentes de saludos enriquecidos para ver diferencias.
    angular.module("app", ['greetings', 'greetingsOneWayBinding'])
        .controller("ParentController", function($scope){
            console.log("ParentController");
            //TODO: Aquí surge la necesidad de que está variable sea reactiva o se esté evaluando.
            //TOKNOW: Para esto creo que es las variables reactivas de Meteor o los $watch de Angular.
            $scope.hour = new Date().getHours();
            console.log($scope.hour);
            $scope.ownGreeting = undefined;
            setGreeting();

            $scope.sumHour = function(){
                $scope.hour += 1;
                console.log($scope.hour);
                setGreeting();
                console.log($scope.ownGreeting);
            };
            $scope.minHour = function(){
                $scope.hour -= 1;
                console.log($scope.hour);
                setGreeting();
                console.log($scope.ownGreeting);
            }

            function setGreeting(){
                //TODO: coger de una BBDD las franjas a usar y tner un array con un objeto con atributos ...
                //greting, init y fin en cada posicion, como franjas horarias.
                if($scope.hour >= 5 && $scope.hour < 14){
                    $scope.ownGreeting = 'Goog morning';
                    //TODO:El atributo class nos permite pintar el componente de manera diferente dependiendo la hora del día.
                    //Esto sería bueno pasarlo al componente raiz (app) para que esa clase esté disponible en el body y que todo el DOM se pueda pintar al respecto de la hora del día.
                    $scope.class = 'morning';
                }else if($scope.hour >= 14 && $scope.hour < 22 ){
                    $scope.ownGreeting = 'Good afternoon';
                    $scope.class = 'afternoon';
                }else if($scope.hour >= 22 || $scope.hour < 5){
                    $scope.ownGreeting = 'Good night';
                    $scope.class = 'night';
                }
            }

        });
})();
