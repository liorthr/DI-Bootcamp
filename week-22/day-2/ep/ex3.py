import random
import string

word_lenght = 5
ran = ''.join(random.choices(string.ascii_lowercase + string.ascii_uppercase, k = word_lenght))    
print(str(ran))