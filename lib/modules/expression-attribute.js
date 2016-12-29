(function(){
    //El módulo votesEvent&Binding va a tener componentes para entender el binding por referencia (sin usar el = de two-way binding)
    angular.module("votesExpressionsBinding", [])
    .component("parliamentAdd", {
        templateUrl: './templates/parliament-add.html',
        bindings: {
            //Angular guardará la expresión pasada en el atributo on-add-entity y nosotros la ejecutaremos cuando
            //querramos, como una function. Es decir, es una expresión callback.
            onAddEntity: '&'
        },
        controller: function(){
            var that = this;

            this.entity = {
                name: '',
                points: 0
            }

            this.onSubmit = function() {
                console.log("onSubmit!!!!!!!!!!!!");
                if (!that.entity.name) return;
                console.log("onSubmit existe name!!!!!!!!!!!!");
                // Ejecutamos la expresión callback.
                //Le pasamos a $event un objeto con todos los atributos que necesitamos en addEntity() del padre (que es la verdaderá expresión callback)
                that.onAddEntity({$event: {entity: that.entity}});
                that.entity = {
                    name: '',
                    points: 0
                }
            }
        }
    });
})();
