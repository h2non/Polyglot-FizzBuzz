//
// Traditional imperative way with boilerplate
//

for (var i = 0; i < 100; i += 1) {
  if (i % 15 === 0)      console.log('FizzBuzz')
  else if (i % 5 === 0)  console.log('Buzz')
  else if (i % 3 === 0)  console.log('Fizz')
  else                   console.log(i)
}

//
// Traditional procedural way with less boilerplace but relies on mutation
//

var out = null
for (var i = 0; i < 100; i += 1) {
  out = ''
  if (i % 3 === 0) out += 'Bizz'
  if (i % 5 === 0) out += 'Fuzz'
  if (!out)        out += i
  console.log(out)
}

//
// Functional declarative way
//

function bizzbuzz(num) {
  return (
    (num % 3 === 0 ? 'Bizz' : '') +
    (num % 5 === 0 ? 'Buzz' : '') +
    (num % 15      ? num    : '')
  )
}

var list = Array.apply(null, Array(100)).map(function (_, i) {
  return bizzbuzz(i)
})

console.log(list.join('\n'))

//
// Another functional-style approach (less concise, explicit and efficient)
//

var pairs = { 3: 'Bizz', 5: 'Buzz', 15: 'BizzBuzz' }
var keys = Object.keys(pairs)

var out = Array.apply(null, Array(100)).map(function (_, i) {
  return keys.map(function (num) {
    return i % num === 0 ? pairs[num] : null
  }).filter(function (num) {
    return num
  }).pop() || i
})

console.log(out.join('\n'))
