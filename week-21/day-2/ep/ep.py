##EX 1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# cat_01 = Cat('Pookie', 2)
# cat_02 = Cat('Teddy', 1)
# cat_03 = Cat('Marcus', 7)
# list_of_cat = []
# list_of_cat.append(cat_01)
# list_of_cat.append(cat_02)
# list_of_cat.append(cat_03)

# def find_old(list):
#     oldest_cat = None
#     for cat in list:
#         if oldest_cat is None or cat.age > oldest_cat.age:
#             oldest_cat = cat
#     print(f'Oldest cat is {oldest_cat.name} age {oldest_cat.age}')
# find_old(list_of_cat)

##EX 2
# class Dog():
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height
#     def bark(self):
#         print(f'{self.name} goes woof!')
#     def jump(self):
#         print(f'{self.name} jump {(int(self.height))*2}cm hight')
# david_dogs = Dog('Rex', 50)
# # print(david_dogs.name, david_dogs.height)
# # david_dogs.bark()
# # david_dogs.jump()

# sarahs_dog = Dog('Teacup', 20)
# # print(sarahs_dog.name, sarahs_dog.height)
# # sarahs_dog.bark()
# # sarahs_dog.jump()

# list_of_dogs = [david_dogs, sarahs_dog]

# def whos_bigger(list):
#     bigger = None
#     for dog in list:
#         if bigger is None or dog.height > bigger.height:
#             bigger = dog
#     print(f'the bigger dog is {bigger.name}')
# whos_bigger(list_of_dogs)

        
##EX 3
# class Song():
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
#     def sing_me_a_song(self):
#         list_of_words = self.lyrics
#         for word in list_of_words:
#             print(word)
# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()
        

##EX 4
class Zoo():
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals_in_zoo = []
    def add_animals(self, new_animal):
        self.animals_in_zoo.append(new_animal)
    def get_animals(self):
        return self.animals_in_zoo
    def sell_animal(self, animal_sold):
        return self.animals_in_zoo.remove(animal_sold)
    def sort_animals(self):
        new_list_sorted = sorted(self.animals_in_zoo)
        return new_list_sorted
    # def get_groups(self):
    #     for animal in self.new_list_sorted:
    #         if animal[0] == 

zoo = Zoo("Central Park Zoo")

# Add some animals
zoo.add_animals("Lion")
zoo.add_animals("Giraffe")
zoo.add_animals("Elephant")
zoo.add_animals("Zebra")

animals = zoo.get_animals()
print(f"Animals in {zoo.zoo_name}: {animals}")


    
        