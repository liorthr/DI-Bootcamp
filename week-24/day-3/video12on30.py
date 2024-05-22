##STATISTICS AND MATHEMATICS

import numpy as np

np.random.seed(0)
A = np.random.randint(0,10, [2,3])
# print(A.sum(axis=1 )) ## comme la fonction total sur un tableau

"""
Rappel: .axis = 0 c'est verticale ca va vers le bas en gros l'axe y
        .axis = 1 c'est horizontale ca va vers les cotes en gros l'axe x
"""


B = np.array([1, 3, -2, 5])
print(B)  
B.sort()
print(B)  
