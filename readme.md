<h1 align="center">Cookmaster</h1>
<h2 align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Cookmaster&uri=https%3A%2F%2Fgithub.com%2Fdefauth98%2Fcookmaster%2Fblob%2Fmain%2FInsomnia_2021-11-06.json)

</h2>

**Descrição**

Projeto desenvolvido durante o modulo de backend da Trybe. Consiste em um projeto para realizar cadastro de receitas, e ver sobre upload de arquivos, token JWT e banco de dados não relacional.

### 🌟 Habilidades

* Entender o que há por dentro de um token de autenticação;
* Gerar tokens a partir de informações como login e senha;
* Autenticar rotas do Express, usando o token JWT;
* Fazer upload de arquivos em APIs REST;
* Salvar arquivos no servidor através de uma API REST;
* Consultar arquivos do servidor através de uma api REST.
* Realizar testes de integração

_Fonte: Repositório da Trybe_

### :nut_and_bolt: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS][nodejs]
- [Express][express]
- [MongoDB][mongo]

[nodejs]: https://nodejs.org/en/
[express]: https://expressjs.com/pt-br/
[mongo]: https://www.mongodb.com/pt-br

### :station: Rotas

**Autenticação**

- POST **/login** - Gera um token JWT.

**User:**

- POST **/users** - Cadastra um novo \usuário.

**Recipes (Necessita autenticação):**

- POST **/recipes** - Registra uma nova receita
- PUT **/recipes/:id** - Edita uma receita
- GET **/recipes** - Lista todos os receitas
- GET **/recipes/:id** - Lista uma receita pelo ID

### :thinking: Como rodar

```bash
# Clone o repositório
git clone https://github.com/defauth98/cookmaster.git cookmaster

# Entre no diretório
cd cookmaster

# Instale as depedências
npm install

# Rode o projeto
npm start
```

---

### :bust_in_silhouette: Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/defauth98">
        <img src="https://avatars.githubusercontent.com/u/52966246?v=4" width="100px;" alt=""/>
        <br />
          <sub>
            <b>Daniel Ribeiro</b>
          </sub>
      </a>
    </td>
  </tr>
</table>