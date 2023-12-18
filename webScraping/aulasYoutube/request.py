import requests as req
from bs4 import BeautifulSoup

while True:
    nomeLivro = input("Nome do livro: ")
    if nomeLivro == "sair":
        break
    url = f"https://www.estantevirtual.com.br/busca?q={nomeLivro}"

    res = req.get(url)
    paginaLivro = BeautifulSoup(res.text, 'html.parser')
    paginaLivro.find('div', attrs={'class': 'livro'})

    tituloLivro = paginaLivro.find('h2', attrs={'itemprop': 'name'})
    autorLivro = paginaLivro.find('span', attrs={'itemprop' : 'author'})
    print(tituloLivro.text)
    print(autorLivro.text)