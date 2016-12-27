(function(){
    //El módulo greetings va a tener varios componentes de saludos enriquecidos para ver diferencias.
    angular.module("greetingsOneWayBinding", [])
        .component("greetTimeBind", {
            template: `<span class='greetings {{$ctrl.classes}}'>{{$ctrl.greeting }}!, {{$ctrl.name}}!</span>`,
            bindings: {
                greeting: '<',
                classes: '<',
                name: '@'
            }
        });
})();
