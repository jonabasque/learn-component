(function(){
    //El módulo greetings va a tener varios componentes de saludos enriquecidos para ver diferencias.
    angular.module("app", ['greetings', 'greetingsOneWayBinding', 'votesTwoWayBinding'])
        .controller("GreetingsController", function(){
            var that = this;

            //TODO: Aquí surge la necesidad de que está variable sea reactiva o se esté evaluando.
            //TOKNOW: Para esto creo que es las variables reactivas de Meteor o los $watch de Angular.
            this.hour = new Date().getHours();
            this.parentGreeting = 'undefined';
            this.class = 'undefined';
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
                    that.parentGreeting = 'Goog morning';
                    //TODO:El atributo class nos permite pintar el componente de manera diferente dependiendo la hora del día.
                    //Esto sería bueno pasarlo al componente raiz (app) para que esa clase esté disponible en el body y que todo el DOM se pueda pintar al respecto de la hora del día.
                    that.class = 'morning';
                }else if(that.hour >= 14 && that.hour < 22 ){
                    that.parentGreeting = 'Good afternoon';
                    that.class = 'afternoon';
                }else if(that.hour >= 22 || that.hour < 5){
                    that.parentGreeting = 'Good night';
                    that.class = 'night';
                }
            }
        })
        .controller("ParliamentController", function(){
            var that = this;

            this.parliament = {
                entities: [
                    {   name: 'PNV',
                        points: 33
                    },
                    {   name: 'EH Bildu',
                        points: 22
                    },
                    {   name: 'Elkarrekin Potemos',
                        points: 15
                    },
                    {   name: 'PSOE',
                        points: 10
                    },
                    {
                        name: 'PP',
                        points: 9
                    }
                ]
            }

            this.lastVote = {
                name: 'EH Bildu',
                date: '2016-12-28T10:12:12.387Z'
            }
        });
})();
