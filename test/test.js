const expect = require ('chai').expect
const platzom = require ('..').default

describe('#platzom', function(){
	it('Si la palabra termina en ar se le quitan esos 2 carateres', function(){
		const tranlation = platzom("programar")
		expect(tranlation).to.equal("program")
	})
	it('Si la palabra inicia con Z se le añade "pe" al final', function(){
		const tranlation = platzom("zorro")
		const tranlation2 = platzom("zarpar")

		expect(tranlation).to.equal("zorrope")
		expect(tranlation2).to.equal("zarppe")
	})
	it('Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con guion', function(){
		const tranlation = platzom("abecedario")
		expect(tranlation).to.equal("abece-dario")	
	})
	it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intecalando Mayusculas y minusculas', function(){
		const tranlation = platzom("sometemos")
		expect(tranlation).to.equal("SoMeTeMoS")
	})
})