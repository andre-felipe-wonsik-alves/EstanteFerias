import requests as req
from bs4 import BeautifulSoup

response = req.get("https://a.co/d/buXB5JF");
conteudo = response.content;
site = BeautifulSoup(conteudo, 'html.parser');

produtos = site.find('div', attrs={'class':'a-section a-spacing-none'});
print(produtos)
# for produto in produtos:
#     print(produto.find('h1', attrs={'class':'a-spacing-none a-text-normal'}));