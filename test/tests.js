var expect = chai.expect;

describe("Conversor", function() {
  
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
      var temperatura = new Temperatura(2,'C');
      expect(temperatura.valor).to.equal(2);
      expect(temperatura.tipo).to.equal('C');
    });
  
  });
  
  describe("Metodos",function() {
    
    it("Debe haber un log para el metodo GetMedida()", function() {
      var log = (new Temperatura(2,'C').getMedida());
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "La medida es: 2C");
    });
    
    it("GetMedida() debe devolvernos la medida 2C",function(){
      var temperatura = new Temperatura(2,'C');
      expect(temperatura.getMedida()).to.equal("2C");
    });
    
  });
    
});