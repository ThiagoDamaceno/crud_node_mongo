## Crud simples utilizando nodejs e mongodb
<br>

<h2>Resumo do que foi feito:</h2>

<br>

<p>Uma api em nodejs, utilizando-se da linguagem typescript e do framework express. Para a persistência dos dados, o mongodb (executando no docker) com o framework mongoose. Por fim, o desing pattern "Factory", princípios do SOLID e clean code, visando manter a reutilização, organização e simplicidade na interpretação do código</p>

<br>

<p>Tecnologias utilizadas:</p>

<ul>
    <li>Nodejs - Requisito</li>
    <li>Typescript - Facilidade para a utilização de princípios do SOLID e o design pattern "Factory"</li>
    <li>Mongodb (Mongoose) - Requisito</li>
    <li>Express - Simples, bem estabelecido no mercado e ótima liberdade para estruturar o projeto de várias maneiras.</li>
    <li>Docker / Docker-compose - Facilidade para a criação, remoção e inicialização do banco de dados</li>
</ul>

<br>

<p>Requisitos para iniciar o projeto</p>

<ul>
    <li>Nodejs</li>
    <li>Npm ou yarn</li>
    <li>Docker e Docker-compose</li>
</ul>

<br>

<h2>Executando o projeto</h2>

<br>

<p>Iniciando o mongodb:</p>

```
docker-compose up -d
```

<br>

<p>Executando testes da api: </p>

```
yarn test
```

<br>

<p>Inserindo dados no mongodb: </p>

```
yarn insert-seeders
```

<br>

<p>Gerar build em js (opcional para ambiente de testes): </p>

```
yarn build
```

<br>

<p>Executando ambiente de desenvolvimento: </p>

```
yarn dev
```

<br>

<p>Executando build em js: </p>

```
yarn start
```
