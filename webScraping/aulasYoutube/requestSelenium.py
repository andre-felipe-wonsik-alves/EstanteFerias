import requests as req
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
from time import sleep

opcoes = Options()
opcoes.add_argument('window-size=400,800')
# opcoes.add_argument('--headless')

navegador = webdriver.Chrome(options = opcoes)
navegador.get('https://airbnb.com')

sleep(2) #Carregar os elementos da página (por causa do React)
botaoPesquisar = navegador.find_element(By.TAG_NAME, 'button')
botaoPesquisar.click()

inputPesquisar = navegador.find_element(By.TAG_NAME, 'input')
inputPesquisar.send_keys('Paraná')
inputPesquisar.submit()

# site = BeautifulSoup(navegador.page_source, 'html.parser') #Traduzo os dados do Selenium para HTML legível
# print(site.prettify())

while(True):
    pass