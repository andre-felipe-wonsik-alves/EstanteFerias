import requests as req
from bs4 import BeautifulSoup

nomeLivro = input("Nome do livro: ")
        
url = f"https://www.estantevirtual.com.br/busca?q={nomeLivro}"

res = req.get(url)
paginaLivro = BeautifulSoup(res.text, 'html.parser')

livros = paginaLivro.findAll('div', attrs={'class': 'livro'})

for livro in livros:
    tituloLivro = livro.find('h2', attrs={'itemprop': 'name'})
    autorLivro = livro.find('span', attrs={'itemprop' : 'author'})
    capaLivro = livro.find('img', attrs={'itemprop':'image'})

    if(tituloLivro): print(tituloLivro.text)
    if(autorLivro): print(autorLivro.text)
    if(capaLivro): print(capaLivro.text)