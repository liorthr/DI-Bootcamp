##STATISTICS AND MATHEMATICS

import numpy as np

np.random.seed(0)
A = np.random.randint(0,10, [2,3])
# print(A.sum(axis=1 )) ## comme la fonction total sur un tableau

"""
Rappel: .axis = 0 c'est verticale ca va vers le bas en gros l'axe y
        .axis = 1 c'est horizontale ca va vers les cotes en gros l'axe x
"""


B = np.cos([1, 3, -2, 5])
# print(B)  
# B.sort()
# print(B)  

"""
Numpy fournit des functions mais a une limite mathématiques pour avoir un plus large 
choix on utilise https://docs.scipy.org/doc/numpy-1.13.0/reference/routines.math.html
Il suffit de mettre np.function_name(array)
"""

# print(np.log(B))


"""
STATISTIQUES
"""
Y = np.random.randint(0, 10 , [10,10])
# print(Y)
# print(Y.mean())
# print(Y.var()) 
# print(Y.std())

##CHECKER LE NB DE REPETTIONS
values , counts = np.unique(Y, return_counts=True)
# print(values[counts.argsort()])

"""
Quand on recoit bcp de data on doit filter nettoyer 

"""
Z = np.random.randn(5,5)
Z[0,2] = np.nan
Z[4,3] = np.nan
print(Z.mean())
print(np.nanmean(Z))
print(f' sum of nan {np.isnan(Z).sum()}')
print(f' size of nan {np.isnan(Z).sum()/Z.size}')