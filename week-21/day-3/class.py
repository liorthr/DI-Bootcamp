# class Shape:
#     side = 4
#     name = 'square'
#     def description(a):
#         print(f'the {a.name} have {a.side} side')
# s1 = Shape()
# s1.description()

# class Zoo():
#     def __init__(self, number_animals, name_of_zoo):
#         self.number_animals = number_animals
#         self.name_of_zoo = name_of_zoo

# class Animal(Zoo):
#     def bark(self):
#         print()
        

# class Circle:
#     color = "red"

# class NewCircle(Circle):
#     color = "blue"

# nc = NewCircle
# print(nc.color)
# ##oupout: blue
        
# class MyClass(object):
#     def func(self):
#         print("I'm being called from the Parent class")


# class ChildClass(MyClass):
#     def func(self):
#         print("I'm actually being called from the Child class")
#         print("But...")
#         # Calling the `func()` method from the Parent class.
#         super(ChildClass, self).func()

# my_instance_2 = ChildClass()
# my_instance_2.func()

# class Door:
#     is_opened = True

# class BlockedDoor(Door):
#     def open_door(self):
#         self.is_opened = True
#     def close_door(self):
#         self.is_opened = False


# door_02 = BlockedDoor()
# print(door_02.is_opened)
# door_02.open_door()
# print(door_02.is_opened)
# door_02.close_door()
# print(door_02.is_opened)

# class Alien():
#     def __init__(self, name, planet):
#         self.name = name
#         self.planet = planet

#     def fly(self):
#         print(self.name, 'is flying!')

#     def sleep(self):
#         print("Aliens don't sleep")
# class Animal():
#     def __init__(self, name):
#         self.name = name

#     def sleep(self):
#         print("zzzZZZZZ")
# class Dog(Animal):
#     def bark(self):
#         print("{} barked, WAF !".format(self.name))
# class AlienDog(Alien, Dog):
#     def bark(self):
#         print("{} barked, 0ul10ul0u (that's how aliens dogs bark..) !".format(self.name))


# my_normal_dog = Dog("Roger")
# my_normal_dog.sleep()

# my_normal_dog.bark()

# my_alien_dog = AlienDog("Rex", "Neptune")
# print(my_alien_dog.planet)

# my_alien_dog.fly()

# my_alien_dog.sleep()

# my_alien_dog.bark()

# class Animal():
#     name = ''
#     age = 2
#     health = ''
#     hunger = ''
#     hapiness = ''
#     def speak(self):
#         return ('WOUAhh')
#     def eat(self):
#         return ('EAt')
# class Lion(Animal):
#     def speak():
#         print ('Rrrrrhhh')
#     def eat():
#         print('XL')

# class Elephant(Animal):
#     def speak():
#         print ('Tuuuuuuu')
#     def eat():
#         print('XXL')
# class Monkey(Animal):
#     def speak():
#         print ('OOOOOOOO')
#     def eat():
#         print('M')

def make_pizza(size, *toppings):
    """
    Summarize the pizza we are about to make.
    """    
    print("\nMaking a {}-inch pizza with the following toppings:".format(size))   
    for topping in toppings:        
        print("- " + topping)

