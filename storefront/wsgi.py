"""
WSGI config for storefront project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

# import os

# from django.core.wsgi import get_wsgi_application

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'storefront.settings')

# application = get_wsgi_application()


# my_list = [1, 2, 4, 7, 2, 10]

# for num in my_list:
#     print(num)

# O(num)

##1. bad function
def getSum(n):
    sum = 0
    for number in range(1, n + 1):
        sum += number
    return sum

##2. good function
def getSum2(n):
    return n * (n + 1) / 2

# ##compare 
# import time
# start = time.time()

# # getSum(10000000)
# getSum2(100000)

# end = time.time()
# elapsed = end - start

# print(f'Executing time : {elapsed:.2}ms')

print(getSum(5))
# print(getSum2(5))