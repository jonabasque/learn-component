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
        });
})();
