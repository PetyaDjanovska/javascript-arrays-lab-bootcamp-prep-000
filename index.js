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