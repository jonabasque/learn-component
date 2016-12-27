(function(){
    //El módulo greetings va a tener varios componentes de saludos enriquecidos para ver diferencias.
    angular.module("greetingsOneWayBinding", [])
        .component("greetTimeBind", {
            templateUrl: './templates/greetTimeBind.html',
            bindings: {
                //Simplemente cambiando a = (two-way binding) al cambiar el valor de greeting en el hijo se cambiará en el padre.
                //TOKNOW: Pero no se recomienda hacer en components, el motivo exacto está por verse.
                //Parece que se puede conseguir un due-binding pasando un objeto vía one-way binding, por que ambos tendrán la misma referencia y si cambias un valor en uno se cambiará en el otro.
                //En los ejemplos de due-binding.js se verá este asunto.
                greeting: '<',
                classes: '<',
                name: '@'
            },
            controller: function(){
                //TODO: Aquí surge la necesidad de que está variable sea reactiva o se esté evaluando.
                //TOKNOW: Para esto creo que es las variables reactivas de Meteor o los $watch de Angular.
                var that = this;
                this.hour = new Date().getHours();
                this.greeting = undefined;
                setGreeting();

                this.sumHour = function(){
                    this.hour += 1;
                    setGreeting();
                };
                this.minHour = function(){
                    this.hour -= 1;
                    setGreeting();
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
