(function(){
    //El módulo greetings va a tener varios componentes de saludos enriquecidos para ver diferencias.
    angular.module("app", ['greetings', 'greetingsOneWayBinding'])
        .controller("ParentController", function(){
            console.log("ParentController");
            var that = this;
            console.log(this);

            //TODO: Aquí surge la necesidad de que está variable sea reactiva o se esté evaluando.
            //TOKNOW: Para esto creo que es las variables reactivas de Meteor o los $watch de Angular.
            this.hour = new Date().getHours();
            console.log(this.hour);
            this.parentGreeting = 'undefined';
            this.class = 'undefined';
            setGreeting();

            this.sumHour = function(){
                this.hour += 1;
                console.log(this.hour);
                setGreeting();
                console.log(this.parentGreeting);
            };
            this.minHour = function(){
                this.hour -= 1;
                console.log(this.hour);
                setGreeting();
                console.log(this.parentGreeting);
            }


            function setGreeting(){
                console.log("setGreeting!!!!!!!!!!!!!!");
                console.log(this);
                //TODO: coger de una BBDD las franjas a usar y tner un array con un objeto con atributos ...
                //greting, init y fin en cada posicion, como franjas horarias.
                if(that.hour >= 5 && that.hour < 14){
                    console.log("Good Morning!!!!!!!!!!!!!!");
                    that.parentGreeting = 'Goog morning';
                    //TODO:El atributo class nos permite pintar el componente de manera diferente dependiendo la hora del día.
                    //Esto sería bueno pasarlo al componente raiz (app) para que esa clase esté disponible en el body y que todo el DOM se pueda pintar al respecto de la hora del día.
                    that.class = 'morning';
                }else if(that.hour >= 14 && that.hour < 22 ){
                    console.log("good afternoon!!!!!!!!!!!!!!");
                    that.parentGreeting = 'Good afternoon';
                    that.class = 'afternoon';
                }else if(that.hour >= 22 || that.hour < 5){
                    console.log("good night!!!!!!!!!!!!!!");
                    that.parentGreeting = 'Good night';
                    that.class = 'night';
                }
            }
        });
})();
