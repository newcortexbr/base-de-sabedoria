---
id: ac-treinamento-buscar
titulo: "procurar um assunto nas aulas"
publico:
  - cliente
modulo: treinamento
aba: Treinamentos
tipo_problema:
  - buscar-aula
  - pesquisar-assunto
  - nao-encontro-a-aula
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
achar a aula que fala do que você precisa, sem abrir módulo por módulo.

## pré-requisitos
- ter acesso a `Treinamentos`.

## passos
1. Em `Treinamentos` (`/negocios/<negócio>/treinamento`), vá ao quadro `Busca no treinamento` (`Qual é a sua dúvida?`).
2. Digite a dúvida (exemplo: `como encontrar empresas no Google Maps?`).
3. Clique em `Encontrar conteúdo`.
4. Clique na aula que aparecer na lista.

## resultado
você abre a aula que trata do assunto.

## desvios
- a página `Início` tem a mesma busca (exemplo: `como vender banners no meu portal?`).
- se nada for encontrado, a tela sugere ver todos os treinamentos ou falar com o suporte.
- `Não foi possível pesquisar agora. Tente novamente em instantes.`: tente de novo depois.

## quando pedir ajuda
se o assunto não existir em nenhuma aula, abra um chamado em `Suporte` com a sua dúvida.

## fontes
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:209`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:212`
- `area-clientes/src/app/(cliente)/inicio/page.tsx:355`
- `area-clientes/src/app/(cliente)/inicio/page.tsx:373`
- `area-clientes/src/app/(cliente)/inicio/page.tsx:387`

## lacunas
não foi conferido como a busca escolhe os resultados (por título ou por texto da aula).
