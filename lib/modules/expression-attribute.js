(function(){
    //El módulo votesEvent&Binding va a tener componentes para entender el binding por referencia (sin usar el = de two-way binding)
    angular.module("votesExpressionsBinding", [])
    .component("parliamentAdd", {
        templateUrl: './templates/parliament-add.html',
        bindings: {
            //TODO: HAcer que se rompa la referencia cuando se modifique. Esto no se que sentido tiene,
            //pero se puede hacer como en el ejemplo. E incluso me parece más lógico en este caso no pasarlo y ya está definido identitariamente (pero vacio) en el hijo
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
                //Le pasamos a $event un objeto con todos los atributos que necesitamos en addEntity() del padre (que es la verdaderá expresión callback)
                that.onAddEntity({$event: {entity: that.entity}});
                console.log("despues de onAddEntity!!!!!!!!");

            }
        }
    });
})();
