# Backend: **Cripto API V2** usando **Node.js** e **TypeScript**

## Introdução
Este projeto é uma API que usa Node.js e TypeScript para fornecer o preço de qualquer criptomoeda. A API retorna o preço em USD da moeda escolhida.

## Rotas:
- **`/api/price/{cryptocurrency}`**: Retorna o preço em USD.

## Pré-requisitos
1. Node.js instalado no seu sistema.

```sh
## Instalação
1. Clone o repositório:
   git clone https://github.com/endlessproxy/crypto-data-v2.git
   cd crypto-data-v2/

## Instale as dependencias
2. Dependencias:
   npm install

## Execute o programa no CMD
3. Executar:
   npm start
   curl -s http://localhost:8023/api/price/{cryptocurrency} | jq
