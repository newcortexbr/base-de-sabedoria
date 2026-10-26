---
id: configurar-topo-do-portal
titulo: "mudar o topo (cabeçalho) e a ordem do menu do portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - He7XF-kolwk
  - XekThBh1ygU
---

## objetivo

aqui você muda o modelo do cabeçalho, o tamanho da logo, as cores e a ordem do menu do site.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

### abrir a edição

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações`. Só é preciso se as opções estiverem fechadas. [t=5] [guia=configuracoes.abrir-menu]
2. Clique em `Layout`. [t=7] [guia=menu:/painel/configuracoes/layout]
3. Clique no cartão `Topo`. [t=8] [guia=configuracoes-layout.topo]

### escolher o modelo

Use apenas a opção do modelo desejado.

1. Para o primeiro modelo, clique em `Topo 1`. [t=11] [guia=topo.modelo-1]

2. Para o segundo modelo, clique em `Topo 2`. [t=11] [guia=topo.modelo-2]

3. Para o terceiro modelo, clique em `Topo 3`. [t=11] [guia=topo.modelo-3]

4. Para o quarto modelo, clique em `Topo 4`. [t=11] [guia=topo.modelo-4]

5. Para incluir a previsão do tempo no modelo, clique em `Topo 5 — Com previsão do tempo`. [t=13] [guia=topo.modelo-5]

### ajustar tamanho e cores sólidas

Este exemplo usa logo média e cores sólidas. Se quiser manter uma escolha atual, pule apenas o ajuste correspondente.

1. Em `Tamanho da logo`, clique em `Média`. [t=18] [guia=topo.tamanho-media]
2. Em `Barra superior`, clique em `Cor sólida`. [t=22] [guia=topo.barra-superior-solida]
3. No campo de código da `Barra superior`, digite a cor no formato `#FFFFFF`. [guia=topo.barra-superior-codigo]
4. Em `Barra de navegação`, clique em `Cor sólida`. [t=24] [guia=topo.barra-navegacao-solida]
5. No campo de código da `Barra de navegação`, digite a cor no mesmo formato. [guia=topo.barra-navegacao-codigo]
6. Em `Links da navegação`, preencha o campo de código da cor. [t=26] [guia=topo.links-codigo]

### outros tamanhos da logo

Escolha apenas um tamanho; depois salve o topo.

1. Para a logo menor, clique em `Pequena` em `Tamanho da logo`. [t=18] [guia=topo.tamanho-pequena]
2. Para a logo maior, clique em `Grande` no mesmo quadro. [t=18] [guia=topo.tamanho-grande]

### gradiente na barra superior

No lugar da cor sólida, este exemplo usa uma combinação pronta de verde.

1. Em `Barra superior`, clique em `Gradiente`. [t=26] [guia=topo.barra-superior-gradiente]
2. Clique na amostra com a descrição `#134E4A → #0F8C7C`. [guia=topo.barra-superior-combinacao]
3. Clique em `Salvar Topo`. [t=37] [guia=configuracoes-layout.salvar]

### gradiente na barra de navegação

1. Em `Barra de navegação`, clique em `Gradiente`. [t=26] [guia=topo.barra-navegacao-gradiente]
2. Clique na amostra com a descrição `#134E4A → #0F8C7C`. [guia=topo.barra-navegacao-combinacao]
3. Clique em `Salvar Topo`. [t=37] [guia=configuracoes-layout.salvar]

### ordenar e salvar

1. Em `Ordem do menu`, arraste a linha da seção desejada para a nova posição. [t=32] [guia=topo.menu-arrastar]
2. Clique em `Salvar Topo`. [t=37] [guia=configuracoes-layout.salvar]

## resultado

aparece `Topo salvo`. As escolhas são enviadas ao site somente ao salvar; a prévia mostra o rascunho.

## explicação

Também existem os tamanhos `Pequena` e `Grande`. As barras admitem `Gradiente`; a cor dos links é sólida. `Início` fica sempre em primeiro no menu. As seções desligadas são identificadas como `não aparece no site`. Quando as seções não cabem, as últimas ficam em `Mais`.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/layout/topo/page.tsx:69` — controles de cor.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/topo/page.tsx:303` — modelos.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/topo/page.tsx:424` — tamanho, barras e salvar.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/topo/OrdemDoMenu.tsx:68` — ordenação.

## lacunas

Sem validação no navegador. Os exemplos de gradiente usam uma combinação pronta; não detalham a edição manual de suas cores e direção.
