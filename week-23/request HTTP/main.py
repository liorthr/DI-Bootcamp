import requests
import json

r = requests.get('http://localhost:3000/users')

print('Status: ' , r.status_code)

print(r.json())
