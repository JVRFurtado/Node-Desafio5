# 🏎️ Minimal API da Fórmula 1 com Node.js e Fastify

> Projeto desenvolvido como parte do desafio da formação **Node.js Fundamentals** da [DIO](https://www.dio.me/).  
> Este projeto consiste em uma **Minimal API** para listar **times** e **pilotos** da Fórmula 1, construída com **Node.js**, **TypeScript** e **Fastify**.

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-5.x-black?style=for-the-badge&logo=fastify)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---

## ✨ Funcionalidades

- ✅ **Listar equipes** da Fórmula 1.
- ✅ **Listar pilotos** da Fórmula 1.
- ✅ **Buscar piloto por ID**.
- ✅ API simples e rápida com **Fastify**.
- ✅ Suporte a **CORS** para requisições externas.



## 📂 Estrutura do Projeto

```

Node-Desafio5/
├── src/
│   └── server.ts      # Código principal da API
├── tsconfig.json       # Configuração do TypeScript
├── package.json        # Dependências e scripts
├── .gitignore
└── README.md

````



## ⚙️ Tecnologias Utilizadas

- **Node.js** (18+)
- **Fastify** (5.x)
- **TypeScript**
- **TSX** (execução no ambiente dev)
- **Tsup** (build para produção)



## ✅ Pré-requisitos

- Node.js **18+**
- npm ou yarn instalado



## 🔧 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/JVRFurtado/Node-Desafio5.git

# Acesse o diretório do projeto
cd Node-Desafio5

# Instale as dependências
npm install
````



### ▶️ Executando o projeto

#### ✅ Ambiente de Desenvolvimento:

```bash
npm run start:dev
```

#### ✅ Modo Watch (auto-reload):

```bash
npm run start:watch
```

#### ✅ Build para Produção:

```bash
npm run dist
```

#### ✅ Executar versão compilada:

```bash
npm run start:dist
```



## 🌐 Endpoints da API

### **Base URL**

```
http://localhost:3636
```

### **1. Listar todas as equipes**

```
GET /teams
```

**Exemplo de Resposta:**

```json
{
  "teams": [
    { id: 1, name: "MacLaren", engine: "Mercedes", drivers: ["Oscar Piastri", "Lando Norris"], base: "Woking, United Kingdom"},
    { id: 2, name: "Ferrari", engine: "Ferrari", drivers: ["Charles Leclerc", "Lewis Hamilton"], base: "Maranello, Italy"},
    { id: 3, name: "Mercedes", engine: "Mercedes", drivers: ["George Russell", "Kimi Antonelli"], base: "Brackley, United Kingdom"},
    { id: 4, name: "Red Bull Racing", engine: "Honda RBPT", drivers: ["Max Verstappen", "Yuki Tsunoda"], base: "Milton Keynes, United Kingdom"},
    { id: 5, name: "Williams", engine: "Mercedes", drivers: ["Alexander Albon", "Carlos Sainz"], base: "Grove, United Kingdom"},
    { id: 6, name: "Kick Sauber", engine: "Ferrari", drivers: ["Nico Hulkenberg", "Gabriel Bortoleto"], base: "Hinwil, Switzerland"},
    ...
  ]
}
```



### **2. Listar todos os pilotos**

```
GET /drivers
```

**Exemplo de Resposta:**

```json
{
  "drivers": [
    { id: 1, name: "Oscar Piastri", team: "McLaren", birth: "06/04/2001", place: "Melbourne, Victoria"},
    { id: 2, name: "Lando Norris", team: "McLaren", birth: "13/11/1999", place: "Bristol, England"},
    { id: 3, name: "Charles Leclerc", team: "Ferrari", birth: "16/10/1997", place: "Monte Carlo, Monaco"},
    { id: 4, name: "Lewis Hamilton", team: "Ferrari", birth: "07/01/1985", place: "Stevenage, England"},
    { id: 5, name: "George Russell", team: "Mercedes", birth: "15/02/1998", place: "King's Lynn, England"},
    { id: 6, name: "Kimi Antonelli", team: "Mercedes", birth: "25/08/2006", place: "Bologna, Italy"},
    ...
  ]
}
```



### **3. Buscar piloto por ID**

```
GET /drivers/:id
```

**Exemplo:**

```
GET /drivers/7
```

**Resposta:**

```json
{
  "driver": { id: 7, name: "Max Verstappen", team: "Red Bull Racing", birth: "30/09/1997", place: "Hasselt, Belgium"},
}
```

**Erro (ID não encontrado):**

```json
{
  "message": "Driver Not Found"
}
```



## 🔐 Variáveis de Ambiente (.env)

Atualmente, a porta do servidor está definida diretamente no código (`3636`).
Você pode alterar facilmente para usar uma variável de ambiente.



## 📜 Licença

Projeto distribuído sob licença **ISC**.



## ✍️ Autor

Desenvolvido com ☕🖥 por mim.

[GitHub](https://github.com/JVRFurtado) | [LinkedIn](https://linkedin.com/in/joao-vitor-r)
