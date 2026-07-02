import json
import requests

response = requests.get("https://rickandmortyapi.com/api/character/6?json")
trivia = json.loads(response.content)

print(trivia)