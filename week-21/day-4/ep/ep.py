
# class Batiments():
#     def __init__(self, nb_etages, adresse):
#         self.nb_etages = nb_etages
#         self.adresse = adresse

# class Immeuble(Batiments):
#     def __init__(self, nb_etages, adresse, balcon):
#         super().__init__(nb_etages, adresse)
#         self.balcon = balcon

# class Supermache(Batiments):
#     def __init__(self, nb_etages, adresse, nb_rayons):
#         super().__init__(nb_etages, adresse)
#         self.nb_rayons = nb_rayons

# class Banque(Batiments):
#     def __init__(self, nb_etages, adresse, nb_coffres):
#         super().__init__(nb_etages, adresse)
#         self.nb_coffres = nb_coffres

# immeuble_01 = Immeuble(12, '22 harav kuk', 21)
# immeuble_02 = Immeuble(9, '14 Smilansky', 1)
# immeuble_03 = Immeuble(4, '7 Gad Mahnes', 100)
# immeuble_04 = Immeuble(32, '12 Pancho', 3)

# supermache_01= Supermache(1, 'Jabotinsky 2', 200)
# supermache_01 = Supermache(2, 'Yerushalim 32', 19)
# supermache_03 = Supermache(1, 'David Hamelekh 1', 156)

# banque_01 = Banque(2, 'American Express', 1000)

# print(immeuble_02.adresse)
# print(supermache_03.nb_rayons)
# print(banque_01.nb_coffres)

##EX 1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals
#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# all_cats = [Bengal, Chartreux, Siamese]
# print(all_cats)
# sara_pets = Pets()

##NOT CLEAR I DONT UNDERSTAND

##EX 2
class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f'{self.name} is barking'
    def run_speed(self):
        speed_dog = (self.weight) / (self.age *10)
        return speed_dog
    def fight(self, other_dog):
        if (self.run_speed * self.weight) > (other_dog.run_speed * other_dog.weight):
            print(f'{self.name} winner')
        else:
            print(f'{other_dog.name} winner')

dog_01 = Dog('Pookie', 2, 12)
dog_02 = Dog('Teddy', 1, 22)
dog_03 = Dog('Marcus', 9, 32)

print(dog_01.run_speed())
print(dog_02.run_speed())
print(dog_03.run_speed())

        
##EX 3
## in new.py

##EX 4
# class Family():
#     def __init__(self, members, last_name):
#         self.members = members
#         self.last_name = last_name
#     def born(self, **kwargs):
#         child = ", ".join(**kwargs)
#         self.members += child
#         print('Mazal Tov, Ad 120')
#     def is_18(self, name, age_of_name):
#         if  age_of_name > 18:
#             name = True
#         else:
#             name = False
#     def family_presentation(self):
#         all_name = self.name 
#         return f'{all_name} and last name is {self.last_name}'


        