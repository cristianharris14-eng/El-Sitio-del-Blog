# ==========================================
# REPASO DE PYTHON
# ==========================================
print("=== LISTAS ===")
frutas = ["manzana", "pera", "uva"]
print(frutas)
print("Primera fruta:")
print(frutas[0])
print("Segunda fruta:")
print(frutas[1])

print("\n=== DICCIONARIOS ===")
persona = {
    "nombre": "Jahel",
    "edad": 28,
    "ciudad": "Tlaxcala"
}
print(persona)
print("Nombre:")
print(persona["nombre"])
print("Edad:")
print(persona["edad"])

print("\n=== FUNCIONES ===")
def saludar(nombre):
    return f"Hola {nombre}"
mensaje = saludar("CH69")
print(mensaje)

print("\n=== FIN DEL REPASO PYTHON ===")