# WeatherInfos
Acesse em <a href='https://weather-infos-2gki.vercel.app'> weather-infos-2gki.vercel.app </a>

![WeatherInfos](https://i.imgur.com/1PITBkL.png)

## Descrição

O **WeatherInfos** é uma aplicação web construída em React que consome a API do OpenWeatherMap para exibir informações meteorológicas em tempo real. Com uma interface amigável, você pode facilmente buscar o clima de qualquer cidade e visualizar dados como temperatura, umidade, e condições do tempo.

## Funcionalidades

- **Busca por cidade**: Digite o nome de uma cidade e obtenha as informações climáticas atualizadas.
- **Exibição de dados detalhados**: Veja a temperatura atual, umidade, e condições climáticas.
- **Interface amigável**: Uma interface simples e intuitiva para uma experiência de usuário agradável.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Cliente HTTP para realizar requisições à API de clima.
- **API do OpenWeatherMap**: API externa que fornece dados meteorológicos.

## Como Executar o Projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

Além disso, é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### Instalação

Clone este repositório:

```bash
git clone https://github.com/joaobenedetmachado/WeatherInfos.git
```
Acesse a pasta do projeto no terminal/cmd:

```bash
cd WeatherInfos
```
Instale as dependências:

```bash
npm install
```
Executando a Aplicação
Para iniciar a aplicação, utilize o comando:

```bash
npm start
```
A aplicação inciará na porta http://localhost:3000.

Configuração da API do OpenWeatherMap
Para utilizar a API do OpenWeatherMap, você precisa obter uma chave de API seguindo os passos abaixo:

Crie uma conta no OpenWeatherMap.
Após criar a conta, vá para a seção "API Keys" e crie uma nova chave de API.
Crie um arquivo .env na raiz do projeto e adicione sua chave de API:
makefile
```REACT_APP_WEATHER_API_KEY=your_api_key_here```
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests. Para grandes mudanças, abra primeiro uma issue para discutir o que você gostaria de mudar.

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato
João Benedet Machado - joaobenedetmachado@gmail.com
