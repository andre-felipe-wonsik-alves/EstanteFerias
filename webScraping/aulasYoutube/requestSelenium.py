import requests as req
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

opcoes = Options()
opcoes.add_argument('window-size=400,800')

navegador = webdriver.Chrome(options = opcoes)
navegador.get('https://airbnb.com')