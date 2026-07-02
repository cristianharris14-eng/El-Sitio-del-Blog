# sumar los números de una lista
def addmultiplenumbers(lista_numeros):
    total = 0
    for numero in lista_numeros:
        total = total + numero  # se acomula suma
    return total  # regresa resultado final

# multiplicación:Si la lista está vacía, regresamos 0 para evitar errores
def multiplymultiplenumbers(lista_numeros):
   
    if lista_numeros == []:
        return 0

   
    total = 1  # 1 por que si doy 0 todo dará 0
    for numero in lista_numeros:
        total = total * numero  
    return total

# ¿el número es par?
def isiteven(num):
    
    if num % 2 == 0:
        return True
    else:
        return False

# ¿el número es entero? recordando que type(num) nos dice qué tipo de dato es
def isitaninteger(num):

    if type(num) == int:
        return True
    else:
        return False

# parte donde se interactúa con el usuario
def main():
    print("¡Hola! Bienvenido!")
    print("--------------------------------------------")
    
    # Se realizan pruebas
    mis_numeros = [2, 4, 6]
    
    print(f"Lista de prueba: {mis_numeros}")
    print(f"La suma es: {addmultiplenumbers(mis_numeros)}")
    print(f"La multiplicación es: {multiplymultiplenumbers(mis_numeros)}")
    
    numero_prueba = 5
    print(f"\n¿El número {numero_prueba} es par?: {isiteven(numero_prueba)}")
    print(f"¿El número {numero_prueba} es un entero?: {isitaninteger(numero_prueba)}")

# interruptor de ecendido 
if __name__ == "__main__":
    main()