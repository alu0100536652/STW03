var expect = chai.expect;

describe("Conversor", function() {
    
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
        it("GetMedida() debe devolvernos la medida",function(){
          var temperatura = new Temperatura(2,'C');
          expect(temperatura.getMedida()).to.equal("2C");
        });
    });
    
});