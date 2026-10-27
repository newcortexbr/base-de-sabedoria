---
id: admin-configurar-cores-do-portal
titulo: "mudar as cores do portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
tags:
  - cor
  - tema
  - editar
  - portal
  - layout
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - lrTaEV5JnVM
  - XekThBh1ygU
---

## objetivo

aqui você muda a cor primária, usada nos elementos clicáveis, e a cor de destaque, usada em títulos de seção, selos e etiquetas.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações`. Só é preciso se as opções estiverem fechadas. [t=4] [guia=configuracoes.abrir-menu]
2. Clique em `Layout`. [t=6] [guia=menu:/painel/configuracoes/layout]
3. Clique no cartão `Cores`. [t=7] [guia=configuracoes-layout.cores]
4. Em `Cor Primária`, preencha o código da cor. Use o formato `#000000`. [t=10] [guia=cores.primaria]
5. Em `Cor de Destaque`, preencha o código da outra cor. Use o mesmo formato. [t=16] [guia=cores.destaque]
6. Clique em `Salvar cores`. [t=32] [guia=configuracoes-layout.salvar]

## resultado

aparece `Cores salvas` e o site recebe as novas cores. Antes de salvar, os exemplos e a prévia mostram o rascunho.

## explicação

Cada cor também tem sugestões prontas e uma paleta. O quadro `Onde ela aparece` mostra exemplos e avisos de legibilidade. As cores das barras do cabeçalho e do rodapé são ajustadas nos artigos de `Topo` e `Rodapé`.

## desvios

Se salvar falhar, a tela mostra o erro. A prévia sozinha não confirma que o site foi atualizado.

## campos e prévia

- Cor primária: botões, links, paginação, campos de formulário e área do cliente. Cor de destaque: nome das seções, barrinha do título, selos e etiquetas.
- A prévia troca entre `Computador` e `Celular` e entre páginas do site (início, guia, empresa, notícia, vagas, classificados e telas de conta).
- `Acender`: `Tudo`, `Só a Primária` ou `Só a de Destaque` apaga o resto da página e mostra onde cada cor aparece.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/layout/cores/page.tsx:76` — salvamento.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/cores/page.tsx:133` — duas cores.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/cores/page.tsx:256` — campos de código.

## lacunas

Sem validação no navegador ou medição do tempo de atualização pública.
