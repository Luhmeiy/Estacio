from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np
from faker import Faker
fake = Faker()

rng = np.random.default_rng()

with open("example.csv", "w") as f:
    f.write("name,number")
    f.write("\n")
    for i in range(100):
        f.write(f"{fake.first_name()},{rng.integers(1, 11)}")
        f.write("\n")
    f.close()

lista = pd.read_csv("example.csv")

# Histograma
plt.figure(figsize=(8, 4))
sns.histplot(lista.number)
plt.title("Histograma das Pontuações")
plt.xlabel("Pontuações")
plt.ylabel("Probabilidade")
plt.show()

# Nuvem de Palavras
numbers = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]

def n2w(n):
    return numbers[n-1]

comment_words = ''

for val in lista.number:
    val = n2w(val)
    tokens = val.split()
    comment_words += " ".join(tokens)+" "
 
wordcloud = WordCloud(width=800, height=400, background_color='black', min_font_size = 10).generate(comment_words)

plt.figure(figsize=(8, 4))
plt.imshow(wordcloud)
plt.axis("off")
plt.tight_layout(pad=0)
plt.show()