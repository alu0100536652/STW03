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
    this.celsiusToFarenheit = function()
    {
      console.log("Dato convertido " +((this.valor * 9/5) + 32) + " Farenheit");
      return (this.valor * 9/5) + 32;
    }
    this.farenheitToCelsius = function()
    {
      console.log("Dato convertido " + ((this.valor - 32)  * (5/9)) + " Celsius");
      return (this.valor - 32)  * (5/9);
    }
  }
  
  exports.Temperatura = Temperatura;

  exports.convertir = function()
  {
    
  }
  
})(this);