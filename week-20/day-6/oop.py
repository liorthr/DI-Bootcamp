class Voiture:
    voiture_crees = 0
    def __init__(self, marque):
        Voiture.voiture_crees += 1
        self.marque = marque


voiture_01 = Voiture('Paganni')
voiture_02 = Voiture('Bugatti')
voiture_03 = Voiture('Nissan')

print(Voiture.voiture_crees)
