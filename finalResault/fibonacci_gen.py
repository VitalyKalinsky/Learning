def fibonacci_gen(n):
  fibonacci_list = []
  for i in range(n):
    if i < 2:
      fibonacci_list.append(i)
    else:
      fibonacci_list.append(fibonacci_list[i-2] + fibonacci_list[i-1])
  return fibonacci_list