## TABLEAU NUMPY

##plus souvent sur des tableaux en 2D comme un tableau donc
# astuces toujours se deplacer sur un axe seulement

#exemple
import numpy as np 

# A = np.array([[1,2,3], [4,5,6], [7,8,9]])
# print(A)
#accéder au premier éléments
# print(A[0,0]) #en gros A[row, column]

#obtenir une row or une column
# print(A[:, 0])
# print(A[0, :])

#obtenir un bloc en partant de 0
# print(A[0:1,0:3])

#obtenir un bloc sur le tableau
# print(A[1:3,0:2])

##ecercice
# B = np.zeros((4,4))
# print(B)
# B[1:3, 1:3]= 3
# print(B)

##execice hard
# C = np.zeros((5,5))
# print(C)
# C[0:5:2 , 0:5:2] = 1
# print(C)


"""
BOOLEAN INDEXING
"""

# A = np.random.randint(0,10, [5,5])
# print(A)
# A[A<5] = 10
# print(A)

# IMAGE = np.random.randint(0, 255, [1024, 720])
# print(IMAGE)

##EXERCICE IMAGE
from scipy import misc
import matplotlib.pyplot as plt 
face = misc.face(gray = True)
plt.imshow(face, cmap = plt.cm.gray)
plt.show()
print(f'Type is: {type(face)}')
print(f'Ndim is: {face.shape}')
print(f'Shape is: {face.ndim}')