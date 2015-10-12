(function(exports) {
  "use strict";

  function Medida(valor,tipo) 
  {
    this.valor = valor || 0;
    this.tipo = tipo || " Sin tipo.";
    this.getMedida = function()
    {
      console.log("La medida es: " + this.valor + this.tipo);
      return this.valor + this.tipo;
    }
  }
  
  function Temperatura(valor,tipo)
  {
    Medida.call(this, valor,tipo);
  }
  
  exports.Temperatura = Temperatura;

  exports.convertir = function()
  {
    
  }
  
})(this);