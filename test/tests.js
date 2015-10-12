var expect = chai.expect;

describe("Conversor", function() {
    
    describe("Constructor", function() {
    
        it("Valor por defecto", function() {
          var temperatura = new Temperatura();
          expect(temperatura.valor).to.equal(0);
        });
        
        it("Tipo por defecto", function() {
          var temperatura = new Temperatura();
          expect(temperatura.tipo).to.equal(" Sin tipo.");
        });
    
    });
    
});