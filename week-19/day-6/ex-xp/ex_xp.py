##EX 1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# combine = zip(keys, values)
# # combine = zip(f'{keys} : {values}')
# print(tuple(combine))

##EX 2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# price= 0
# for key, value in family.items():
#     if(value<3):
#         print(f'for {key} its free')
#         price += 0
#     elif(3<value<12):
#         print(f'for {key} its 10$')
#         price += 10
#     else:
#         print(f'for {key} its 15$')
#         price += 15
# print(f'The final price is {price}$')

##EX 3
# brand = {
#     "name": "Zara", 
#     "creation_date": 1975,
#     "creator_name": "Amancio Ortega Gaona",
#     "type_of_clothes": ["men", "women", "children", "home"],
#     "international_competitors": ["Gap", "H&M", "Benetton"], 
#     "number_stores": 7000,
#     "major_color":{ 
#         "France": "blue", 
#         "Spain": "red", 
#         "US": ["pink", "green"]
#     }
# }
# brand["number_stores"]=2
# # print(f'{brand["name"]} is created in {brand["creation_date"]} by {brand["creator_name"]}')
# brand.update({'country_creation': 'Spain'})
# brand_key = brand.keys()

# if "international_competitors" in brand_key:
#     brand["international_competitors"].append('Desigual')

# brand.pop("creation_date")
# # print(brand["international_competitors"][-1])
# # print(brand["major_color"]["US"])

# # print(len(brand))
# # print(brand.keys())

# more_on_zara = {
#     "creation_date": 1975, 
#     "number_stores": 10000
# }

# new_dictionnary = {**more_on_zara, **brand}
# # print(new_dictionnary)
# print(len(new_dictionnary.keys()))

##EX 4
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# i = 0
# while i < len(users):
#     print(users[i], i)
#     i +=1
# i = 0
# while i < len(users):
#     print(i, users[i])
#     i +=1
# new_users = sorted(users)
# print(new_users)
# while i < len(new_users):
#     print(new_users[i], i)
#     i += 1
