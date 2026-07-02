
def trivia_fetch(num):
url= (f"https://rickandmortyapi.com/api/character/{num}")
response= requests.get(url)

if response.status_code== 200:
  datos_personaje=response.json()
  return datos_personaje

else:
  return {"error":{"Personaje no encontrado"}}


def main():
  print("Hello learners!")
  pirnt("\n===========")
  print ("¡Bienvenido al Quiz de Rick and Morty")
  pirnt("\n===========")






  

