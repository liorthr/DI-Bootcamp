import math

class Circle:
    def __init__(self, radius, diameter):
        self.radius = radius
        self.diameter = diameter
    def calculate_area(self):
        area_radius = (math.pi) * (self.radius**2)
        area_diameter = (math.pi) * ((self.diameter**2)/4)
        print(f'Radius : {area_radius} \n Diameter : {area_diameter}')


circle_01 = Circle(radius=10, diameter=20)
circle_01.calculate_area()