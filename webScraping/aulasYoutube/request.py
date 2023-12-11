import requests as req

response = req.get("https://www.amazon.com.br/Verbo-Intransitivo-Id%C3%ADlio-Mario-Andrade/dp/8567097258/ref=sr_1_3?crid=2SFR2J4ISYT32&keywords=amar+verbo+intransitivo&qid=1702332719&sprefix=amar+verbo+in%2Caps%2C263&sr=8-3");
print(response.content);