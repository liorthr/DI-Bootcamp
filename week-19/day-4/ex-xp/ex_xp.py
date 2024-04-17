##EX 1

# my_fav_numbers = set()
# my_fav_numbers.add(1)
# my_fav_numbers.add(2)
# print(my_fav_numbers)
# my_fav_numbers.remove(2)
# print(my_fav_numbers)

# friend_fav_number = set()
# friend_fav_number.add(770)
# friend_fav_number.add(18)
# friend_fav_number.add(26)
# print(friend_fav_number)

# our_fav_numbers = my_fav_numbers.union(friend_fav_number)
# print(our_fav_numbers)


##EX 2
# No tuple are unchangeable

##EX 3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.pop()
# basket.append('Kiwi')
# basket.insert(0, "Apples")
# count = basket.count("Apples")
# basket.clear()
# print(count)
# print(basket)

##EX 4
# float has . like '1.02' or '0.12344' and integer is without . like '12' or '245257'
# list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
# i=0
# list2=[]
# while i < 5:
#     list2.append(i)
#     i+=0.5
# print(list2)

##EX 5
# i = 1
# while i <=20:
#     print(i)
#     i += 1

# i = 1
# while i <=20:
#     if i % 2 == 0:
#         print(i)
#     i += 1

##EX 6
# ask = True
# while ask:
#     user_name = input('Enter your name:  ')
#     if user_name == 'Lior':
#         ask = False
#         print('Good job')

##EX 7
# user_fruits_favorites = input('Enter you favorite(s) fruits:  ')
# user_fruits_favorites_final = user_fruits_favorites.split()
# print(user_fruits_favorites_final)

# user_ask_fruit_fav = input('Okay write a favorites fruites:  ')
# if user_ask_fruit_fav in user_fruits_favorites_final:
#     print('You chose one of your favorite fruits! Enjoy!')
# else:
#     print('You chose a new fruit. I hope you enjoy')

##EX 8
# ask_for_topping_pizza = True
# list_topping = []
# price_pizza = 10
# while ask_for_topping_pizza:
#     user_topping = input('Enter your topping:  ')
#     list_topping.append(user_topping)
#     price_pizza += 2.5
#     if user_topping == 'quit':
#         ask_for_topping_pizza= False
#         print('You quit the application ')
#         break
#     print(f' You list of topping {list_topping} and the total price is {price_pizza}')


##EX 9
