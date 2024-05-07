##EX 4
# import datetime
# print(datetime.date.today())

##EX 5
# import datetime
# today_date = datetime.date.today()
# future_date = datetime.date(2025,1,1)

# time_between = future_date - today_date
# print(time_between.days , ' days')

##EX 6
# import datetime 
# today_date = datetime.date.today()
# year_birthday = input('Year: ')
# month_birthday = input('Month: ')
# day_birthday = input('Day: ')
# birthday_date = datetime.date(int(year_birthday),int(month_birthday), int(day_birthday))

# time_in_life = today_date - birthday_date
# print(f"You live since {time_in_life.min} minutes")

##EX 7
# from faker import Faker

# fake = Faker()

# list_of_users = []

# def generate_data():
#     user_dictionnary = {}
#     user_dictionnary['name'] = fake.name()
#     user_dictionnary['adress'] = fake.address()
#     user_dictionnary['langage_code'] = fake.language_code()
#     return user_dictionnary

# number_users_data = 0
# while number_users_data < 5:
#     user_created = generate_data()
#     list_of_users.append(user_created)
#     number_users_data +=1
    
# print(list_of_users)
