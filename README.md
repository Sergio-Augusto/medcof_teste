# Node.js Auth Project

## Descrição

Projeto de exemplo para autenticação em Node.js usando TypeScript, JWT e testes unitários com Jest.

## Como executar

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` com a chave `JWT_SECRET`
4. Inicie o servidor: `npm start`
5. Execute os testes: `npm test`

## Documentação da API

A documentação da API está disponível através do Swagger. Para acessá-la, siga os passos abaixo:

1. Certifique-se de que o servidor está em execução. Se ainda não estiver, inicie-o com `npm start`.
2. Abra seu navegador e acesse: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

A interface do Swagger fornecerá uma documentação interativa para a API, permitindo que você visualize e teste os endpoints disponíveis.

### Endpoints Disponíveis

- **GET /**: Rota de inicialização que retorna uma mensagem simples indicando que a API está em funcionamento.
- **POST /api/auth/login**: Endpoint para autenticação de usuários. 

### Exemplo de Requisição para Autenticação

Para autenticar um usuário, envie uma requisição POST para `/api/auth/login` com o seguinte corpo:

```json
{
  "username": "testuser",
  "password": "testpassword"
}
