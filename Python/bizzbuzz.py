#
# Imperative traditional way with boilerplate
#

for i in range(100):
  if not i % 15:
    print ('BizzBuzz') 
  elif not i % 3:
    print('Bizz')
  elif not i % 5:
    print('Buzz')
  else:
    print(i)
