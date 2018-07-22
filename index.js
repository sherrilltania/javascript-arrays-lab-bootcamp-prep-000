var kittens= ["Milo", "Otis", "Garfield"]

console.log(kittens);

function destructivelyAppendKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(name)
  console.log(kittens)
}

function destructivelyPrependKitten(name){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name)
  console.log(kittens)
}

function destructivelyRemoveLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  console.log(kittens)
}

function destructivelyRemoveFirstKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  console.log(kittens)
}

function appendKitten(name){
    kittens = ["Milo", "Otis", "Garfield"]
    console.log(kittens.push(name))
}

function removeLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"]

}
