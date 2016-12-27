(function(){
    //El módulo greetings va a tener varios componentes de saludos enriquecidos para ver diferencias.
    angular.module("greetings", [])
        //componente Hello
        //El nombre ha de estar en camelcase y definirá el tag con guión hellWorld sería  <hello-world></hello-world>
        .component("hello",{
            // es lo que se insertará en el HTML al marcar <hello-world></hello-world>
            template: "<span class='greetings hello'>{{$ctrl.hello}}, {{$ctrl.name}}!</span>", //TODO: que se ejecuta antes controller o compilacion del template?
            //Son los atributos que se podrán pasar al componente o tag <hello-world name="string"></hello-world>
            bindings: {
                hello: '@',
                name: '@'

            }
        })
        .component("bye", {
            template: `<span class='greetings bye'>{{$ctrl.bye | uppercase }}!, {{$ctrl.name}}!</span>`,
            bindings: {
                bye: '@',
                name: '@'
            }
        })
        //Este componente es un refator de los anteriores 2, que podrían ser muchos más.
        //Y añadimos el atributo classes para que nos pa pase el componente padre.
        //Estás clases ya necesitaríamos que nos la pueda cambiar el componente padre.
        .component("greetNormal", {
            template: "<span class='greetings {{$ctrl.classes}}'>{{$ctrl.greeting}}, {{$ctrl.name}}</span>",
            bindings: {
                classes: '@',// podrian venir bien tipo one-way binding
                greeting: '@',
                name: '@'
            }
        })

        //Estos componentes no tienen controller y se les pasa solo un atring por lo que se suele decir que son stateless o sin estado o representativos nada más.
        //Es decir, son componentes tontos, sin lógica, no piesan. Toda la lógica se piensa en el padre.

        //Se podría hacer un componente más con string que tenga algo de lógica para saludar en funcion de la hora, y ya tendría un controller.
        .component("greetTime", {
            template: "<span class='greetings {{$ctrl.class}} {{$ctrl.classes}}'>{{$ctrl.ownGreeting }}!, {{$ctrl.name}}!</span>",
            bindings: {
                classses: '@',
                name: '@'
            },
            controller: function(){
                //TODO: Aquí surge la necesidad de que está variable sea reactiva o se esté evaluando.
                //TOKNOW: Para esto creo que es las variables reactivas de Meteor o los $watch de Angular. 
                var hour = new Date().getHours();
                //console.log(date.getHours());
                this.ownGreeting = undefined;
                //TODO: coger de una BBDD las franjas a usar y tner un array con un objeto con atributos ...
                //greting, init y fin en cada posicion, como franjas horarias.
                if(hour >= 5 && hour < 14){
                    this.ownGreeting = 'Goog morning';
                    //TODO:El atributo class nos permite pintar el componente de manera diferente dependiendo la hora del día.
                    //Esto sería bueno pasarlo al componente raiz (app) para que esa clase esté disponible en el body y que todo el DOM se pueda pintar al respecto de la hora del día.
                    this.class = 'morning';
                }else if(hour >= 14 && hour < 22 ){
                    this.ownGreeting = 'Good afternoon';
                    this.class = 'afternoon';
                }else if(hour >= 22 || hour < 5){
                    this.ownGreeting = 'Good night';
                    this.class = 'night';
                }
            }
        });

})();
