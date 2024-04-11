##EX 1

import random
# def get_random_temp(season):
#     if season == 'winter':
#         return random.uniform(-10.0,0.0)
#     elif season == 'spring':
#         return random.uniform(0.0,20.0)
#     elif season == 'fall':
#         return random.uniform(20.0,30.0)
#     elif season == 'summer':
#         return random.uniform(30.0,40.0)
#     else:
#         print('Write correctly')

# def main():
#     user_season = input('What season you want:  ')
#     temperature = get_random_temp(user_season)
#     print(temperature)
#     if temperature < 0:
#         print('Brrr, that’s freezing! Wear some extra layers today')
#     elif 0 < temperature < 16:
#         print('Quite chilly! Don’t forget your coat')
#     elif 16 < temperature < 23:
#         print('The temperature is between 16 and 23')
#     elif 24 < temperature < 32:
#         print('The temperature is between 24 and 32')
#     elif 32 < temperature < 40:
#         print('The temperature is between 32 and 40')
# main()

##EX 2
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

# correct_answers = 0
# incorrect_answers = 0
# wrong_answer = []
# def ask_questions(data):
#     global correct_answers, incorrect_answers  # Declare the variables as global inside the function
#     questions_lenght = len(data)
#     question =  data['question'] 
#     answer_correct = data['answer']
#     answer_user = input(f'{question}: ')
#     if answer_user == answer_correct:
#             print('GooD job')
#             correct_answers += 1
#     else:
#             print('you loose point')
#             incorrect_answers += 1
#             wrong_answer.append(answer_user)

# def inform_user():
#     print(f'You have {correct_answers} correct answers and {incorrect_answers} incorrect answers.')
#     if wrong_answer:
#         print(f'Your incorrect answers are: {", ".join(wrong_answer)}')

# def test():
#     for question in data:
#         ask_questions(question)
#     inform_user()

# test()

##EX 3
# import datetime

# def get_age(year, month, day):
#     # Hardcoded current year
#     actual_year = 2024
#     date_of_birth = datetime.date(year, month, day)
#     age = actual_year - date_of_birth.year
#     return age

# def can_retire(gender, date_of_birth):
#     possible = False
#     year, month, day = date_of_birth
#     age = get_age(year, month, day)
#     if gender.lower() == 'man' and age >= 67:
#         possible = True
#         print('You can retire')
#     elif gender.lower() == 'woman' and age >= 62:
#         possible = True
#         print('You can retire')
#     else:
#         possible = False
#         print('Not now, bro')

# can_retire('Woman', (1990, 10, 10))

##EX 4
# def calculate(x):
#     first = x
#     second = x*11
#     three = x*111
#     four = x*1111
#     result = first + second + three + four
#     return result
# print(calculate(3))