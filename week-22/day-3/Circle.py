# import math 

# class Circle:
#     def __init__(self, radius, diameter):
#         self.diameter = diameter
#         self.radius = radius
#         self.radius = self.diameter/2
#         self.diameter = self.radius*2
#     def circle_area(self):
#         return  math.pi * (self.radius**2) or math.pi * ((self.diameter**2)/4)
    
# circle_01 = Circle(radius=10)
# circle_02 = Circle(diameter=5)

# print(circle_01.circle_area())
# print(circle_02.circle_area())
        
# import googletrans

# from googletrans import Translator
# translator = Translator()
# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# translated = translator.translate(french_words , src='fr', dest='en')

# print(translated)


# import python_weather

# import asyncio
# import os

# async def getweather():
#   # declare the client. the measuring unit used defaults to the metric system (celcius, km/h, etc.)
#   async with python_weather.Client(unit=python_weather.IMPERIAL) as client:
#     # fetch a weather forecast from a city
#     weather = await client.get('New York')
    
#     # returns the current day's forecast temperature (int)
#     print(weather.temperature)
    
#     # get the weather forecast for a few days
#     for daily in weather.daily_forecasts:
#       print(daily)
      
#       # hourly forecasts
#       for hourly in daily.hourly_forecasts:
#         print(f' --> {hourly!r}')

# if __name__ == '__main__':
#   # see https://stackoverflow.com/questions/45600579/asyncio-event-loop-is-closed-when-getting-loop
#   # for more details
#   if os.name == 'nt':
#     asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
  
#   asyncio.run(getweather())