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
  
  function Celsius(valor)
  {
    this.tipo = 'c';
    Temperatura.call(this, valor, this.tipo);
    this.toFarenheit = function()
    {
      console.log("Dato convertido " +((this.valor * 9/5) + 32) + " Farenheit");
      return (this.valor * 9/5) + 32;
    }
  }
  
  function Farenheit(valor)
  {
    this.tipo = 'f';
    Temperatura.call(this,valor,this.tipo)
    this.toCelsius = function()
    {
      console.log("Dato convertido " + ((this.valor - 32)  * (5/9)) + " Celsius");
      return (this.valor - 32)  * (5/9);
    }
  }
  
  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;


  exports.convertir = function()
  {
    
  }
  
})(this);