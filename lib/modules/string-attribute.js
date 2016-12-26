(function(){
    //El módulo greetings va a tener varios componentes de saludos enriquecidos para ver diferencias.
    angular.module("greetings", [])
        //componente Hello
        //El nombre ha de estar en camelcase y definirá el tag con guión hellWorld sería  <hello-world></hello-world>
        .component("hello",{
            // es lo que se insertará en el HTML al marcar <hello-world></hello-world>
            template: "<span class='hello'>Hello {{$ctrl.name}}!</span>", //TODO: que se ejecuta antes controller o compilacion del template?
            //Son los atributos que se podrán pasar al componente o tag <hello-world name="string"></hello-world>
            bindings: { name: '@' },
        });
})();
