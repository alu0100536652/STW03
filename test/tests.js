var expect = chai.expect,
    should = chai.should();

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
  
    it("Instancia de Temperatura() - Valor de una Medida por defecto debe ser 0", function() {
      var temperatura = new Temperatura();
      expect(temperatura.valor).to.equal(0);
    });
    
    it("Instancia de Temperatura() - Tipo de una Medida por defecto debe ser 'Sin tipo.'", function() {
      var distancia = new Distancia();
      expect(distancia.tipo).to.equal(" Sin tipo.");
    });
    
    it("Instancia de Temperatura() - Temperatura debe poder recibir dos parametros", function() {
      var temperatura = new Temperatura(2,'c');
      expect(temperatura.valor).to.equal(2);
      expect(temperatura.tipo).to.equal('c');
    });
    
    it("Instancia de Temperatura() - El atributo tipo tiene que ser string", function() {
      var temperatura = new Temperatura(0,'c');
      expect(temperatura.tipo).to.be.a('string');
    });
    
    it("Instancia de Celsius() - Celsius tiene que tener el attributo tipo igual a 'c'", function() {
      var temperatura = new Celsius(0);
      temperatura.should.have.property('tipo').equal('c');
    });
  
    it("Instancia de Farenheit() - Farenheit tiene que tener el atributo tipo igual a 'f'", function() {
      var temperatura = new Farenheit(0);
      temperatura.should.have.property('tipo').equal('f');
    });
    
     it("Instancia de Distancia() - Distancia debe recibir dos parametros", function() {
      var distancia = new Distancia(2,'m');
      expect(distancia.valor).to.equal(2);
      expect(distancia.tipo).to.equal('m');
    });
    
     it("Instancia de Metros() - El atributo tipo de Metro tiene que ser 'm'", function() {
      var metro = new Metros(0);
      metro.should.have.property('tipo').equal('m');
    });
    
  });
  
  describe("Metodos",function() {
    
    it("Metodo: getMedida() - 2c debe devolvernos la medida 2c",function(){
      var temperatura = new Temperatura(2,'c');
      expect(temperatura.getMedida()).to.equal("2c");
    });
    
    it("Metodo: toFarenheit() - 0.0 Celsius debe ser 32 Farenheit",function(){
      var temperatura = new Celsius(0);
      temperatura.toFarenheit().should.equal(new Temperatura(32,'f').valor);
    });
    
    it("Metodo: toCelsius() - 32 Farenheit debe ser 0 Celsius",function(){
      var temperatura = new Farenheit(32.0);
      temperatura.toCelsius().should.equal(new Temperatura(0,'c').valor);
    });
    
    it("Metodo: toCentimetros() - 1 Metro deben ser 100 Centimetros",function(){
      var metro = new Metros(1);
      metro.toCentimetros().should.equal(new Distancia(100,'m').valor);
    });
    
  });
  
  describe("I/O Formulario HTML", function() {
    
    it("Formulario HTML - Si el input tiene 32f nos debe devolver '0.00 Celsius'",function(){
      convert.value = "32F";
      convertir();
      expect(converted.innerHTML).to.equal("0.00 Celsius");
    });
      
    it("Formulario HTML - Si el input no contiene nada, el span tampoco debe contener nada",function(){
      convert.value = "";
      convertir();
      expect(converted.innerHTML).to.equal("");
    });
    
    it("Formulario HTML - Si la medida pasada no es reconocida debe crear una instancia de Medida",function() {
      convert.value = "20v";
      convertir();
      expect(converted.innerHTML).to.equal("20v");
    });
    
    it("Formulario HTML - Si la medida pasada es celsius, debe crear una instanca de Celsius", function() {
      convert.value = "20C";
      convertir();
      expect(converted.innerHTML).to.equal("68.00 Farenheit");
    });
    
    it("Formulario HTML - Si la medida pasada es metro, debe crear una instanca de Metros",function() {
      convert.value = "2m";
      convertir();
      expect(converted.innerHTML).to.equal("200.00 Centimetros")
    })
      
  });
  
  describe("Logs", function() {
    
    it("Console.log() - Debe haber un log para el metodo GetMedida()", function() {
      var log = (new Temperatura(2,'c').getMedida());
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "La medida es: 2c");
    });
    
    it("Console.log() - Debe haber un log para el metodo toFarenheit()", function() {
      var log = (new Celsius(0).toFarenheit());
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Dato convertido 32 Farenheit");
    });
    
    it("Console.log() - Debe haber un log para el metodo toCelsius()", function() {
      var log = (new Farenheit(32).toCelsius());
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Dato convertido 0 Celsius");
    });
    
  });
    
});