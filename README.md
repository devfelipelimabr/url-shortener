
# URL Shortener API

Uma API REST para encurtar URLs, redirecioná-las e fornecer estatísticas de uso. Este projeto foi desenvolvido com Node.js e MongoDB, utilizando boas práticas para criar uma aplicação modular e escalável.

## Funcionalidades

- Encurtar URLs longas.
- Redirecionar URLs encurtadas para o endereço original.
- Obter estatísticas de cliques de URLs encurtadas.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para construção do servidor.
- **Express**: Framework para gerenciamento de rotas e middlewares.
- **MongoDB**: Banco de dados NoSQL para armazenar URLs e estatísticas.
- **Mongoose**: ODM para facilitar a interação com o MongoDB.
- **nanoid**: Biblioteca para gerar identificadores únicos e curtos para URLs.

## Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/devfelipelimabr/url-shortener.git
   cd url-shortener
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione sua URI de conexão com o MongoDB:

     ```env
     MONGO_URI=mongodb://127.0.0.1:27017/urlshortener
     PORT=3000
     ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

   O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

### 1. Encurtar URL

- **URL**: `/api/shorten`
- **Método**: `POST`
- **Descrição**: Recebe uma URL longa e retorna uma URL encurtada.
- **Body**:

  ```json
  {
    "originalURL": "https://www.exemplo.com/uma-url-longa"
  }
  ```

- **Resposta**:

  ```json
  {
    "shortURL": "abc123"
  }
  ```

### 2. Redirecionar URL

- **URL**: `/:shortURL`
- **Método**: `GET`
- **Descrição**: Redireciona o usuário para a URL original.
- **Parâmetros de URL**:
  - `:shortURL`: O código encurtado da URL.
- **Resposta**: Redireciona para a URL original.

### 3. Estatísticas de URL

- **URL**: `/api/stats/:shortURL`
- **Método**: `GET`
- **Descrição**: Retorna as estatísticas de uma URL encurtada, como o número de cliques.
- **Parâmetros de URL**:
  - `:shortURL`: O código encurtado da URL.
- **Resposta**:

  ```json
  {
    "originalURL": "https://www.exemplo.com/uma-url-longa",
    "shortURL": "abc123",
    "clicks": 5,
    "createdAt": "2024-11-17T10:00:00Z"
  }
  ```

## Estrutura de Pastas

```plaintext
url-shortener/
│
├── config/
│   └── database.js       # Configuração de conexão com o MongoDB
│
├── controllers/
│   └── urlController.js  # Lógica de encurtamento, redirecionamento e estatísticas
│
├── models/
│   └── URL.js            # Definição do modelo de URL no MongoDB
│
├── routes/
│   └── urlRoutes.js      # Definição das rotas da API
│
├── .env                  # Variáveis de ambiente
├── .gitignore
├── package.json
├── package-lock.json
└── server.js             # Ponto de entrada do servidor
```

## Notas de Desenvolvimento

- **ES Modules**: O projeto utiliza ES Modules. Para garantir compatibilidade, o arquivo `package.json` contém `"type": "module"`.
- **Variáveis de Ambiente**: A URI do MongoDB é armazenada em um arquivo `.env` para segurança.

## Próximos Passos

1. **Autenticação**: Adicionar autenticação para limitar o acesso ao serviço de encurtamento.
2. **Expiração de URLs**: Permitir URLs com expiração após determinado período.
3. **Caching**: Implementar cache com Redis para melhorar o desempenho de redirecionamentos frequentes.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests no repositório.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

Esse `README.md` fornece uma visão geral do projeto, detalha as funcionalidades da API e inclui instruções de configuração e execução.
