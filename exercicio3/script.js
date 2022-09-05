const pokemon1 = {
	nome: 'Bulbasaur',
	tipo: 'Grama',
	nivel: 5,
}

const pokemon2 = {
    ...pokemon1,
	nome: 'Squirtle',
	tipo: 'Agua',
}

const tackle ={
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}

const razorLeaf ={
    nome: 'Folha Navalha',
    dano: 40,
    tipo: 'Grama',
    precisao: 100
}

const waterGun ={
    nome: 'Jato dagua',
    dano: 40,
    tipo: 'Agua',
    precisao: 100
}


pokemon1.ataques = []
pokemon1.ataques.push(tackle)
pokemon2.ataques = [...pokemon1.ataques]
pokemon1.ataques.push(razorLeaf)
pokemon2.ataques.push(waterGun)














console.log(pokemon1)
console.log(pokemon2)