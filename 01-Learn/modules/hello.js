var s = 'Hello';

function greet(name) {
  console.log(s + ',' + name + '!')
}

function hello() {
  console.log(s)
}

module.exports = {
  greet: greet,
  hi: hello
};