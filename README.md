# 💻 Digital Learning Hub

🇧🇷 Português | [🇺🇸 English](README.en.md) | [🇪🇸 Español](README.es.md)

> Protótipo institucional educacional fictício, desenvolvido como case de front-end e aplicação do sistema visual NEXA Studio.

## Sobre

O **Digital Learning Hub** é um projeto independente criado a partir de um protótipo institucional anterior e reorganizado como **case de portfólio autocontido**.

A versão atual utiliza a linguagem visual do **NEXA Studio** como referência para layout, tipografia, grid, contraste, componentes e direção gráfica. O sistema de marca do NEXA utiliza **Space Grotesk**, **DM Sans**, fundo preto, superfícies grafite, branco quente e acentos acid green, violet e cyan. fileciteturn36file0

O conteúdo do site permanece fictício e sanitizado, sem referências a organizações, serviços, pessoas atendidas, números operacionais ou outros elementos ligados a contextos reais.

## 🎨 Direção visual — NEXA Studio

A integração foi pensada como uma relação de **design system → aplicação**:

- **Space Grotesk** para títulos e elementos de identidade;
- **DM Sans** para textos corridos e interface;
- fundo `#050505` e superfícies `#101114`;
- branco quente `#f2f2ee`;
- acid green `#d9ff00` como cor de ação;
- violet `#8b5cf6` e cyan `#22d3ee` como acentos;
- grid técnico de 80px;
- bordas discretas e ausência de sombras pesadas;
- tipografia grande e expressiva no hero;
- componentes modulares e responsivos.

Essa direção é coerente com o sistema visual documentado no NEXA Studio. fileciteturn36file0

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Git
- GitHub
- GitHub Pages

## ✨ Funcionalidades

- navegação entre páginas;
- layout responsivo;
- sistema visual consistente;
- tipografia integrada ao NEXA Studio;
- skip link para navegação acessível;
- formulário demonstrativo;
- validação básica no navegador;
- conteúdo sem backend;
- deploy automatizado via GitHub Actions.

## 🗂️ Estrutura

```text
digital-learning-hub/
├── .github/
│   └── workflows/
│       └── pages.yml
├── index.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## 🌐 GitHub Pages

O projeto possui workflow de publicação automática em `.github/workflows/pages.yml`.

A cada atualização na branch `main`, o GitHub Actions prepara o conteúdo estático e publica uma nova versão no GitHub Pages.

Se o GitHub solicitar configuração inicial, em **Settings → Pages**, selecione **GitHub Actions** como fonte de publicação.

URL esperada após o primeiro deploy:

`https://sayjinblackbelt.github.io/Digital-Learning-Hub/`

## ▶️ Execução local

```bash
git clone https://github.com/sayjinblackbelt/Digital-Learning-Hub.git
cd Digital-Learning-Hub
```

Abra `index.html` diretamente no navegador ou utilize **Live Server** no VS Code.

## 🔐 Sanitização e privacidade

Este repositório foi estruturado para publicação pública. Não contém:

- dados pessoais de terceiros;
- nomes de instituições ou projetos reais;
- contatos reais;
- credenciais;
- documentos restritos;
- dados de alunos, participantes ou colaboradores;
- integrações com serviços privados;
- informações operacionais confidenciais.

Qualquer conteúdo futuro destinado a este projeto deve seguir o mesmo princípio: utilizar material fictício, genérico ou devidamente autorizado.

## 🚧 Roadmap

- [x] Reposicionamento como projeto de portfólio
- [x] Conteúdo institucional fictício
- [x] Sanitização do contexto
- [x] Navegação entre páginas
- [x] Responsividade
- [x] Acessibilidade inicial
- [x] Sistema visual NEXA Studio
- [x] Workflow de GitHub Pages
- [ ] Favicon e Open Graph
- [ ] Seção de projetos destacados
- [ ] Testes automatizados de acessibilidade
- [ ] Microinterações avançadas
- [ ] Componentização adicional

## 👨‍💻 Autor

**Filipe G Morais**

Projeto de estudo e portfólio voltado a desenvolvimento web, design de interfaces e experiências digitais educacionais.