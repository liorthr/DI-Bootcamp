# from ep import Dog
# import random

# class PetDog(Dog):
#     def __init__(self, name, age, weight):
#         super().__init__(name, age, weight)
#         self.trained = False
#     def train(self):
#         self.trained = True
#         print(super().bark())
#     def play(self, *args):
#         dog_names = ", ".join(args)
#         print(f"{self.name} plays together with {dog_names}")
#     def do_a_trick(self):
#         if self.trained is True:
#             list_of_sentence= [
#                 f'{self.name} does a barel roll',
#                 f'{self.name} stands on his back legs',
#                 f'{self.name} shakes your hand',
#                 f'{self.name} play dead'
#             ]
#             select_sentence = random.choice(list_of_sentence)
#             print(select_sentence)
    
# pet_dog_01 = PetDog('Rocky', 5, 28)

# pet_dog_01.train()
# # pet_dog_01.play()
# pet_dog_01.do_a_trick()