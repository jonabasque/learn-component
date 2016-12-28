(function(){
    //El módulo votesSystemsTwoWayBinding va a tener componentes para entender el binding por referencia (sin usar el = de two-way binding)
    angular.module("votesTwoWayBinding", [])
        .component("parliamentChart", {
            templateUrl: './templates/parliament.html',
            bindings: {
                //parliament y last tendrán one-way binding con el padre grácias a esta funcionalidad de Angular, pero tanbién tendrán due-binding grácias al funcionamiento de JS
                //TOKNOW: Hay alguna manera de pasar un objeto sin usar el one-way binding para hacer trabajar menos a Angular y usar su referencia en los 2 sentidos?
                parliament: '<',
                classes: '<',
                last: '<'
            },
            controller: function($scope){
                var that = this;

                //TODO: Hacer que no nos deje votar a más de uno.
                this.vote = function(newEntity){
                    angular.forEach(that.parliament.entities, function(value, key){
                        //cuando encontremos en alterior, le quitamos un punto.
                        if(value.name === that.last.name){
                            //console.log("restando a:"+value.name);
                            value.points -= 1;
                        }
                        //cuando encotramos el nuevo voto, le sumamos un punto.
                        if(value.name === newEntity){
                            //console.log("sumando a:"+value.name);
                            value.points += 1;
                        }
                    })
                    //Y cambiamos los atributos de last, que en el padre es lastVote y se cambiará
                    //por que tienen la misma referencia nativa, por lo que no necesitamos hacer un due-binding.
                    //TOKNOW: Y si no es un objeto, es otro atributo, y queremos que se cambie en el padre ? entender por que se dice que no usar two-way binding.
                    that.last.name = newEntity;
                    that.last.date = new Date();
                };

                //own properties
                this.select = "";

                //TODO: Hacer que al buscar el ng-repeat cambie los items.
                //2 opciones se ven de momento,
                //1- cada vez que se ejecuta onkeypress se hace un $apply() y así se rearma el DOM y con el el ng-repetar evaluando el ng-if
                //2- cada vez que se ejecuta onkeypress se extrae las entities no concordantes y se hace el $apply(). Sobraría en ng-if
                //3 usarun array nuevo e insertar los que coincidan del array entities cada vez que se inserta un caracter en el input.
                /*
                this.options = [];
                this.equal = function(){
                    //var enti = new String(entity);
                    //console.log(enti);
                    //entity = "entity"
                    that.options = [];
                    angular.forEach(that.parliament.entities, function(value, key){
                        angular.forEach(that.select, function(char, pos){
                            if(value.name.charAt(pos) !== char){
                                that.options.splice(pos, 1);
                            }
                        });
                        that.options.push(that.parliament.entities[key]);
                    });

                    angular.forEach(this.select, function(value, key){
                        if(this.parliament.entities[key].charAt(key) === value){
                            if(this)
                            this.options.push(this.parliaments.entities[key]);
                        }else{
                            this.options.splice(key,1);
                        }
                    });
                    return true;

                }
                */
            }
        });
})();
