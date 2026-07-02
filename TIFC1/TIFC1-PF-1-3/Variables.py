#Variables: espacio en memoria que se utiliza para almacenar un dato 
#Tipos de variables 

#Guardamos texto dentro de una variable
nombre = "Mario" 
#Imprimiendo el resultado de la variable nombre
print (nombre)
#Mostrar el tipo de dato
print(type(nombre))

nombre1 = "Israel"
edad = 25 
ciudad = "Ciudad de México"

print (nombre1)
print(edad)
print(ciudad) 

#Enteros (int)
numero1= 7 
numero2= 9

print (numero1)
print(numero2)

#Operaciones matemáticas
print(numero1 + numero2) # Output: 16
print (numero1- numero2) # Output : -2
print (numero1* numero2) #Output : 63
print (numero1 // numero2) #Output :0.7 divisón con decimal
print (numero1 // numero2) #Output: 0 división entera

print(type(numero1))

#Flotantes (float)
precio1= 10.5
precio2= 5.5

print(precio1 + precio2) #Output: 16.0
print (precio1 - precio2) #Output:5.0
print(type(precio2))

#Cadenas de texto (str)
name="Santiago"
lastname = "López"
print(name)
print(lastname)

#Concatenar= unión
print(name + lastname) # Une los textos sin espacios
print (name + " "+ lastname) # Une los textos y agrega un espacio

print ("Bienvendo a la CH69" + name+ " "+ lastname)# Una frase mas completa

#Números como texto, # es un string
numero_texto1 = "7" 
numero_texto2 = "9"
#No sumamos números, sino que unimos texto
print(numero_texto1 + numero_texto2 ) #Output:79
print(type(numero_texto1))

#Convertimos texto a entero 
numero1 = int("7")
numero2 = int ("9")
#Ahora sí suma
print(numero1 + numero2)
print(type(numero1))

#Booleanos (bool)
activo = True # Verdadero = 1
finalizado = False #Falso = 0
print (activo)
print (finalizado)
print (type(activo))
print(type(finalizado))

#Booleanos como números
print (True + True ) # Output:1 +1 =2
print (True + False) #Output 1+ 0=1
print (False + True) #Output 0+1=1
print (False + False) #Output: 0 + 0 =0 

#Multiplicar Cadenas
mensaje = "Hello"
print (mensaje * 3) #Output:HelloHelloHello


