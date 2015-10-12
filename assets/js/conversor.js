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
    Temperatura.call(this,valor,this.tipo);
    this.toCelsius = function()
    {
      console.log("Dato convertido " + ((this.valor - 32)  * (5/9)) + " Celsius");
      return (this.valor - 32)  * (5/9);
    }
  }
  
  function Distancia(valor, tipo)
  {
    Medida.call(this,valor,tipo);
  }
  
  function Metros(valor)
  {
    this.tipo = 'm';
    Distancia.call(this,valor,this.tipo);
    this.toCentimetros = function()
    {
      console.log("Dato convertido " + (this.valor * 100) + " Centimetros");
      return (this.valor * 100);
    }
  }
  
  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;
  exports.Distancia = Distancia;
  exports.Metros = Metros;

  exports.convertir = function()
  {
    var valor     = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
        regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z])\s*$/i,
        valor     = valor.match(regexp);
    
    if(valor)
    {
      var numero = valor[1],
          tipo   = valor[2].toLowerCase();
      
      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);
      
      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          elemento.innerHTML = celsius.toFarenheit().toFixed(2) + " Farenheit";
          break;
        case 'f':
          var farenheit = new Farenheit(numero);
          elemento.innerHTML = farenheit.toCelsius().toFixed(2) + " Celsius";
          break;
        case 'm':
          var metros = new Metros(numero);
          elemento.innerHTML = metros.toCentimetros().toFixed(2) + " Centimetros";
          break;
        
        default:
          var medida = new Medida(numero,tipo);
          elemento.innerHTML = medida.getMedida();
      }
    }
    else
      elemento.innerHTML = "";
  }
  
})(this);