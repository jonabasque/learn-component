(function(){
    //El módulo greetings va a tener varios componentes de saludos enriquecidos para ver diferencias.
    angular.module("greetingsOneWayBinding", [])
        .component("greetTimeBind", {
            /*
            template: `<span class='greetings {{$ctrl.classes}}'>{{$ctrl.greeting }}!, {{$ctrl.name}}!</span>
                            <button type="button" name="button" ng-click="$ctrl.minHour()">-</button>
                            <input type="text" name="" value="{{$ctrl.hour}}">
                            <button type="button" name="button" ng-click="$ctrl.sumHour()">+</button>
            `,
            */
            templateUrl: './templates/greetTimeBind.html',
            bindings: {
                greeting: '<',
                classes: '<',
                name: '@'
            },
            controller: function(){
                //TODO: Aquí surge la necesidad de que está variable sea reactiva o se esté evaluando.
                //TOKNOW: Para esto creo que es las variables reactivas de Meteor o los $watch de Angular.
                var that = this;
                this.hour = new Date().getHours();
                console.log(this.hour);
                this.greeting = undefined;
                setGreeting();

                this.sumHour = function(){
                    this.hour += 1;
                    console.log(this.hour);
                    setGreeting();
                    console.log(this.greeting);
                };
                this.minHour = function(){
                    this.hour -= 1;
                    console.log(this.hour);
                    setGreeting();
                    console.log(this.greeting);
                }

                function setGreeting(){
                    //TODO: coger de una BBDD las franjas a usar y tner un array con un objeto con atributos ...
                    //greting, init y fin en cada posicion, como franjas horarias.
                    if(that.hour >= 5 && that.hour < 14){
                        that.greeting = 'Goog morning';
                        //TODO:El atributo class nos permite pintar el componente de manera diferente dependiendo la hora del día.
                        //Esto sería bueno pasarlo al componente raiz (app) para que esa clase esté disponible en el body y que todo el DOM se pueda pintar al respecto de la hora del día.
                        that.classes = 'morning';
                    }else if(that.hour >= 14 && that.hour < 22 ){
                        that.greeting = 'Good afternoon';
                        that.classes = 'afternoon';
                    }else if(that.hour >= 22 || that.hour < 5){
                        that.greeting = 'Good night';
                        that.classes = 'night';
                    }
                }

            }
        });
})();
