symbole = "$ "
taille = 10

# i = 0
# esg = 0
# esd=0
# es = ' '
# while taille > i:
#     print((es*esg)+(taille*symbole)+(es*esd))
#     taille-=1
#     esg+=1
#     esd+=1

##first way
i = 0
esg = 10
esd=10
es = ' '
while i < taille:
    print((es*esg)+(i*symbole)+(es*esd))
    i+=1
    esg-=1
    esd-=1

##not working
for i in range(1, taille+1):
    espaces = " " * (taille - i)
    print(espaces + (symbole + " ") * i)

    
##not clear
for i in range(1, taille+1):
    print(' '*(taille - i) + (' '+symbole)*i)
