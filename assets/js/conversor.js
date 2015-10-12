(function(exports) {
  "use strict";

  function Medida(valor,tipo) 
  {
    this.valor = valor || 0;
    this.tipo = tipo || " Sin tipo.";
    this.getMedida = function()
    {
        return this.valor + this.tipo;
    }
  }
  
  function Temperatura(valor,tipo)
  {
    Medida.call(this, valor,tipo);
  }
  
  exports.convertir = function()
  {
    var inputData = window.toConvert.value;
    var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfF])\s*$/i;
    inputData = inputData.match(regexp);
    
  }

})(this);