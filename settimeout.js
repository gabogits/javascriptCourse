var juan = {
  nombre: 'Juan',
  edad: 30,
  imprimir: function () {
    var self = this; //para hacer referencia al objeto
    setTimeout(function () {
      /*
      console.log(this); //aqui hay que tener cuidado por que this no se refiere al al objeto juan si no al objeto global
      console.log(this.nombre);
      console.log(this.edad);
      */
      console.log(self); //guardando el valor de this en una variable se hace referncia al objeto en el que nos encontramos
      console.log(self.nombre);
      console.log(self.edad);

    }, 1000)
  }
}

juan.imprimir();