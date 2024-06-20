## programme qui, à partir de la saisie d'un rayon et d'une hauteur, calcule le volume d'un cône droit.
# import math
# def cone_volume():
#     r = input('Write the rayon: ')
#     h = input('Write the hauteur: ')
#     base = math.pi * (int(r)**2)
#     volume = (base * int(h))/3
#     print(f'The volume is: {volume}')
# cone_volume()

import statistics

classe = {'Adrienne': [4, 18],
          'Joséphine': [10, 12, 20],
          'Margaret': [11],
          'Michel': [1],
          'Olivier': [1, 2, 3, 10, 7],
          'René': [17, 17, 20],
          'Édouard': [5, 17, 14, 12, 16]}
def moyenne_eleves(dictionnary):
    # name = dictionnary.keys()
    # notes = dictionnary.values()
    moyenne = {}
    for name, notes in dictionnary.items():
        # print(f'Name: {name}, have note: {sum(notes)/len(notes)}')   
        moyenne[name] = f'{sum(notes)/len(notes)}/20'
    return moyenne
print(moyenne_eleves(classe))