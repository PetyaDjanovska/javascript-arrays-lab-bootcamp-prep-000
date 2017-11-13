const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(`${name}`);
  var newKittens = kittens.slice();
  return newKittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(`${name}`);
  var newKittens = kittens.slice();
  return newKittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  var newKittens = kittens.slice();
  return newKittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  var newKittens = kittens.slice();
  return newKittens;
}

function appendKitten(name){
  var newKittens = [...kittens, `${name}`];
  return newKittens;
}

function prependKitten(name){
  var newKittens = [`${name}`,...kittens];
  return newKittens;
}
