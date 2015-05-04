// Traditional imperative way with boilerplate

for (var i = 0; i < 100; i += 1) {
  if (i % 5 === 0 && i % 3 === 0) console.log('FizzBuzz')
  else if (i % 5 === 0)           console.log('Buzz')
  else if (i % 3 === 0)           console.log('Fizz')
  else                            console.log(i)
}

// Traditional procedural way with less boilerplace but relies on mutation

var out = null
for (var i = 0; i < 100; i += 1) {
  out = ''
  if (i % 3 === 0) out += 'Bizz'
  if (i % 5 === 0) out += 'Fuzz'
  if (!out)  out += i
  console.log(out)
}

// Functional declarative way

var list = Array.apply(null, Array(100 + 1)).map(function (_, i) {
  return bizzbuzz(i)
})

console.log(list.join('\n'))

function bizzbuzz(num) {
  return (
    (num % 3 === 0 ? 'Bizz' : '') +
    (num % 5 === 0 ? 'Buzz' : '') +
    (num % 15      ? num : '')
  )
}
