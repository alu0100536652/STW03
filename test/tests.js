var expect = chai.expect;

describe("Conversor Temperatura", function() {
  
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });
    
  describe("Constructor", function() {
  
    it("Valor por defecto debe ser 0", function() {
      var temperatura = new Temperatura();
      expect(temperatura.valor).to.equal(0);
    });
    
    it("Tipo por defecto debe ser 'Sin tipo.'", function() {
      var temperatura = new Temperatura();
      expect(temperatura.tipo).to.equal(" Sin tipo.");
    });
    
    it("Temperatura debe poder recibir dos parametros", function() {
      var temperatura = new Temperatura(2,'c');
      expect(temperatura.valor).to.equal(2);
      expect(temperatura.tipo).to.equal('c');
    });
  
  });
  
  describe("Metodos",function() {
    
    it("GetMedida() debe devolvernos la medida 2C",function(){
      var temperatura = new Temperatura(2,'c');
      expect(temperatura.getMedida()).to.equal("2c");
    });
    
    it("Si pasamos 0.0 Celsius debemos obtener 32 Farenheit",function(){
      var temperatura = new Temperatura(0.0,'c');
      expect(temperatura.celsiusToFarenheit()).to.equal(32);
    });
    
    it("Si pasamos 32 Farenheit debemos obtener 0 Celsius",function(){
      var temperatura = new Temperatura(32.0,'f');
      expect(temperatura.farenheitToCelsius()).to.equal(0);
    });
    
  });
  
  describe("Logs", function() {
    
    it("Debe haber un log para el metodo GetMedida()", function() {
      var log = (new Temperatura(2,'c').getMedida());
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "La medida es: 2c");
    });
    
    it("Debe haber un log para el metodo celsiusToFarenheit()", function() {
      var log = (new Temperatura(0,'c').celsiusToFarenheit());
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Dato convertido 32 Farenheit");
    });
    
    it("Debe haber un log para el metodo farenheitToCelsius()", function() {
      var log = (new Temperatura(32,'f').farenheitToCelsius());
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Dato convertido 0 Celsius");
    });
    
  });
    
});