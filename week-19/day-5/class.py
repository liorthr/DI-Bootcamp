# dict1 = {'num1': 1, 'num2': 2}
# print(dict1.keys())

# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict["class"]['student']['marks']['history'])

# user = {
#     "name": "Jhon",
#     "lastname": "Doe",
#     "age": 36,
#     "sexe": "Man",
# }

# key_remove = ["name", "sexe"]
# for key in key_remove:
#     del ()

# student_grades = {
#     "Alice": [88, 92, 100],
#     "Bob": [75, 78, 80],
#     "Charlie": [92, 90, 85],
#     "Dana": [83, 88, 92],
#     "Eli": [78, 80, 72]
# }

# student_averages = {}
# for key, value in student_grades.items():
#     student_averages[key] = int((value[0]+value[1]+value[2])/3)
# print(student_averages)
#     # print(f'Name: {key} and average is : {int((value[0]+value[1]+value[2])/3)}/100')

# student_letter_grades={}
# for key, value in student_averages.items():
#     if student_averages[key] > 90:
#         student_letter_grades[key] = 'A'

#     elif 80<student_averages[key]<89:
#         student_letter_grades[key] = 'B'

#     elif 70 <student_averages[key]<79:
#         student_letter_grades[key] = 'C'

#     elif 60 <student_averages[key]<69:
#         student_letter_grades[key] ='D'

#     else:
#         student_letter_grades[key] = 'F'
# print(student_letter_grades)

# total_average = sum(student_averages.values())
# class_size = len(student_averages)
# class_average = total_average / class_size

# print(f'The average is : {class_average}/100 of all the class')

# for item in enumerate('abcd'):
#     print(item)

list1 = [1,2,3]
list2 = ['a','b','c']
list3 = [1.1, 2.2, 3.3, 4.4, 5.5]
print(zip(list1, list2, list3))

for item in zip(list1, list2, list3): # only go as far it is possible
    print(item)