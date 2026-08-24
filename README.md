# Kellynha — site institucional

Landing page institucional da Kellynha, empresa brasileira de moda íntima fundada em 1984. O projeto apresenta a história, as linhas de produtos, a produção própria e os canais comerciais da marca em uma experiência editorial, clássica e responsiva.

## Direção visual

- Linguagem clássica contemporânea, com composição editorial.
- Paleta baseada em azul profundo, marfim e acentos suaves da identidade Kellynha.
- Tipografia de alto contraste para títulos e fonte sem serifa para leitura.
- Fotografias reais dos produtos, fábrica, matéria-prima e processo produtivo.
- Destaque para tradição, conforto e produção própria no Brasil.

## Experiência e acessibilidade

- Navegação adaptada para desktop, tablet e celular.
- Menu móvel acessível por teclado, com fechamento por `Escape`.
- Link para pular diretamente ao conteúdo principal.
- Hierarquia semântica de títulos e regiões da página.
- Textos alternativos em imagens relevantes.
- Foco visível, áreas de toque adequadas e suporte a movimento reduzido.
- Rolagem suave e animações discretas de entrada na viewport.
- CTAs direcionados ao WhatsApp com mensagens contextualizadas.

## Estrutura principal

```text
app/
  layout.tsx       Metadados, fontes e estrutura global
  page.tsx         Entrada da página no ambiente de publicação
assets/            Imagens-fonte da marca e dos produtos
public/
  assets/          Imagens servidas em produção
  main.js          Interações leves da interface
  og.png           Imagem de compartilhamento social
index.html         Conteúdo semântico da landing page
style.css          Design system e responsividade
main.js            Menu, header, ano e animações de entrada
vite.config.ts     Configuração de compilação e hospedagem
```

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

O terminal informa o endereço local da prévia. Alterações em conteúdo, estilos e interações são refletidas durante o desenvolvimento.

## Validação e compilação

```bash
pnpm build
```

A compilação gera a aplicação otimizada em `dist/`. Antes de publicar, valide o menu móvel, as âncoras, os links de WhatsApp, o carregamento das imagens e a ausência de overflow horizontal.

## Conteúdo comercial preservado

- WhatsApp: `(12) 99146-4471`
- Telefone: `(12) 3122-6049`
- E-mail: `lallynhaguara@gmail.com`
- CNPJ: `53.405.783/0001-50`
- Endereço: Rua Vereador Octaviano do Nascimento Monteiro, 365 — Guaratinguetá/SP

## Manutenção

- Edite textos e estrutura em `index.html`.
- Ajuste tokens visuais, componentes e breakpoints em `style.css`.
- Mantenha `main.js` e `public/main.js` sincronizados ao alterar comportamentos.
- Ao adicionar imagens usadas na página publicada, mantenha a cópia correspondente em `public/assets/`.
- Não remova o projeto configurado em `.openai/hosting.json`; ele identifica a publicação existente.
