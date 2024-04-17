# print('Hello World')
# print('resultat est ' , 10/2)
# print(10//2)
# print(4*4)

# a = 42
# b =" just test to see the type"

# print (type(a))
# type(b)

# print(4 == 4.0)
# print(4 == 2)

# print(dir(42))
# print(type(2147483647))
a= 2
b = 3
c= 'Zoro'
d= 'test'
# print(str(a+b), " " +c)
a = 20
# print(str(a+b), " " +c)
# print(d.upper())

#print('hello lior'.replace('lior', 'shanna'))
# print(10%3)

# my_age = 20
# my_future_age = my_age + 123879
# print('in 123879 years i will be ', my_future_age, 'years old')

# first_name = 'Jhon'
# last_name = 'Doe'
# print(f'my first name is {first_name} and last {last_name}')
# print(False or True)
# print(b>4 or a>-2)


# name = input('Enter your name')
# print(f'Hey {name}')

# a = input('a: ')
# b = input('b: ')

# if a > b : 
#     print(f'a is greatter than b ')
# elif a == 0:
#     print (f'a equal zero')
# elif b == 0:
#     print (f'b equal zero')
# else:
#     print(f'else')
# week = ['monday', 'tuesady', 'thursdfay', 'wendesday']
# if 'monday' in week:
#     print('Its a real week')
# else:
#     print('not a real week')

number_user = input('Write your number: ')
if int(number_user)% 3 == 0:
    print('Fizz')
elif int(number_user)%5 == 0 or int(number_user)%5 == 5 :
    print('Buzz')
elif int(number_user)% 3 == 0 and int(number_user)%5 == 0 or int(number_user)%5 == 5:
    print('FizzBuzz')
else:
    print('nothing')