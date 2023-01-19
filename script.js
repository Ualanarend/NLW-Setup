const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)

function add() {
  alert('QUEM CLICOU É VIADO')
}

const data = { 
  run: ["02-01", "02-03", "02-05"],
  takePills: ["02-02", "02-04", "02-06"],
  food: ["02-08", "02-10", "02-12"],
  water: ["02-09", "02-11", "02-12"],
  study: ["02-07"],
}

nlwSetup.setData(data)
nlwSetup.load()
