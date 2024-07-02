value = '#FF00FF'
value = value.lstrip('#')
i = 4
# print(int(value[i:i+2], 16))

exemple_code_couleur = "#FF00FF"

# Votre code ici 👇
# def convertir_hex_en_rgb(value):
#     value = value.lstrip('#')
#     return tuple(int(value[i:i+2], 16) for i in (0, 2, 4))

def convertir_hex_en_rgb(code_couleur: str) -> tuple:
    rouge = int(code_couleur[1:3], 16)
    vert = int(code_couleur[3:5], 16)
    bleu = int(code_couleur[5:7], 16)
    return rouge, vert, bleu


print(convertir_hex_en_rgb(exemple_code_couleur))