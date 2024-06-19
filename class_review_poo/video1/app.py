class Voiture():
    def __init__(self, marque, model, power, color, year, sale):
        self.marque = marque
        self.model = model
        self.power = power
        self.color = color
        self.year = year
        self.sale = sale
    def saling(self):
        self.sale = False
    def accelerate(self):
        self.power += 200
    def broked(self):
        self.year = 2024


voiture_01 = Voiture('Lambo', 'Huracan', 300, 'blue', 2014, True)
voiture_02 = Voiture('Ferrari', 'Pista', 250, 'red', 2020, False)
print(f' Power before 1 : {voiture_01.power}')
print(f' Power before 2 : {voiture_02.power}')
voiture_01.accelerate()
voiture_02.accelerate()
print(f' Power after 1 : {voiture_01.power}')
print(f' Power after 2 : {voiture_02.power}')

        