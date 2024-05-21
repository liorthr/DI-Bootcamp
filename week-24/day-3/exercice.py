import numpy as np 

A = np.array([1,2,3])
# print(A.ndim)
 

"""
    Important en machine learning

    shape
    size
"""

B = np.zeros((3,2))
# print(B)
# print(B.ndim)
# print(B.shape)
# print(type(B.shape))

C = np.ones((3,4))
# print(A)
np.random.seed(0)
D = np.random.randn(2,10)
# print(D) 

# np.linspace(début, fin, quantité_de_nb)
# np.arrange(début, fin, pas)

# Choix du type de données 
# ajouter dtype
##exemple
E= np.linspace(0,10, 20, dtype=np.float16)
# print(E)


##MANIPULATION DE TABLEAUX 
T1 = np.zeros((3,3))
T2 = np.ones((3,3))

# print(T1)
# print(T2)

T3 = np.hstack((T1,T2)) ##concatenate((T1,T2), axis=0)
T4 = np.vstack((T1,T2)) ##concatenate((T1,T2), axis=1)
# print(T3)
# print(T4)

##METHIDE RAVEL() APPLATI UN TABLEAU SUR 1 DIMENSION 

def initialisation(m,n):
    new_array_01 = np.array([m])
    new_array_02 = np.array([n])
    final_array = np.concatenate((new_array_01, new_array_02), axis=0)
    print(final_array)
    print('shape' , final_array.shape)
    print('ndim' , final_array.ndim)

initialisation(2,3)