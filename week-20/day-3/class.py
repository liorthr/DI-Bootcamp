# numbers = [1,2, 3,4,5]
# even_numbers = filter(lambda x: x%2 == 0, numbers)
# print(list(even_numbers))

# points = [(1,2), (4,6), (-2,12),(34, -45)]
# sorted_points = sorted(points, key = lambda x: x[1])
# print(sorted_points)


# try:
#     division = 10/0
# except NameError as e:
#     print(f'ok maybe error {e}')

# def check_arguments(*args):
#     print(f"These are the arguments {args}")
# check_arguments(1, 2, 'hey')

# def  check_keywordedarguments(**kwargs):
#     print(kwargs)

# check_keywordedarguments(name="Sarah", age=24)

# def sum_number(*args):
#     return sum(args)
# print(sum_number(20,30,10,2))
# def check_keywordedarguments(**kwargs):
#     for key, value in kwargs.items():
#         print(key,":",value)

# check_keywordedarguments(name="Sarah", age=24, sexe= 'F', city='Paris')

# def upper_string(s):
#     return s.upper()

# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# map_object = map(upper_string, fruit)

# print(list(map_object))

def merge_dictionnaries(*args):
    print('test')
