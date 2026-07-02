# 1. Pedimos de forma manual cada número
print("Introduce los 3 números:")
num1 = int(input("Número 1: "))
num2 = int(input("Número 2: "))
num3 = int(input("Número 3: "))

# 2. Pedimos los operadores intermedios
print("\nIntroduce los signos de las operaciones (pueden ser +, -, *, /)")
op1 = input("Operación entre el número 1 y 2: ")
op2 = input("Operación entre el número 2 y 3: ")

# 3. ¡LÓGICA CON CONDICIONALES!
# Para que sea una calculadora real, primero debemos revisar si la SEGUNDA 
# operación es una multiplicación (*) o división (/), porque esas van primero.

# Caso A: Si la segunda operación tiene prioridad (ej: 2 + 4 * 3)
if op2 == "*" or op2 == "/":
    # Primero resolvemos la parte de la derecha (num2 y num3)
    if op2 == "*":
        derecha = num2 * num3
    elif op2 == "/":
        derecha = num2 / num3
        
    # Ahora aplicamos la primera operación usando el num1 y lo que dio la derecha
    if op1 == "+":
        resultado = num1 + derecha
    elif op1 == "-":
        resultado = num1 - derecha
    elif op1 == "*":
        resultado = num1 * derecha
    elif op1 == "/":
        resultado = num1 / derecha

# Caso B: Si la operaciones van en orden normal de izquierda a derecha (ej: 2 + 4 - 3)
else:
    # Primero resolvemos la parte de la izquierda (num1 y num2)
    if op1 == "+":
        izquierda = num1 + num2
    elif op1 == "-":
        izquierda = num1 - num2
    elif op1 == "*":
        izquierda = num1 * num2
    elif op1 == "/":
        izquierda = num1 / num2
        
    # Ahora aplicamos la segunda operación al resultado que ya llevábamos
    if op2 == "+":
        resultado = izquierda + num3
    elif op2 == "-":
        resultado = izquierda - num3

# 4. Mostramos el resultado final en pantalla
print("\nEl resultado final es:", resultado)