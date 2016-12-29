(function(){
    //El módulo votesEvent&Binding va a tener componentes para entender el binding por referencia (sin usar el = de two-way binding)
    angular.module("votesExpressionsBinding", [])
    .component("parliamentAdd", {
        templateUrl: './templates/parliament-add.html',
        bindings: {
            entity: '<',
            //Angular guardará la expresión pasada en el atributo on-add-entity y nosotros la ejecutaremos cuando
            //querramos, como una function. Es decir, es una expresión callback.
            onAddEntity: '&'
        },
        controller: function(){
            var that = this;

            this.onSubmit = function() {
                console.log("onSubmit!!!!!!!!!!!!");
                if (!that.entity.name) return;
                console.log("onSubmit existe name!!!!!!!!!!!!");
                // Ejecutamos la expresión callback.
                that.onAddEntity();
                console.log("despues de onAddEntity!!!!!!!!");

            }
        }
    });
})();
