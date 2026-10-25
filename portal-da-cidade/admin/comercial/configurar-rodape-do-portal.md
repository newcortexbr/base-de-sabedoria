---
id: admin-configurar-rodape-do-portal
titulo: "mudar o rodapé do portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - configuracao
  - o que aparece lá embaixo
  - parte de baixo do site
  - final da página
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - vPnHq9kRWW8
  - XekThBh1ygU
---

## objetivo

aqui você muda o modelo, o texto, as cores e o tamanho da logo do rodapé.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

### abrir a edição

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações` para abrir as opções, se estiverem fechadas. [t=5] [guia=configuracoes.abrir-menu]
2. Clique em `Layout`. [t=7] [guia=menu:/painel/configuracoes/layout]
3. Clique no cartão `Rodapé`. [t=9] [guia=configuracoes-layout.rodape]

### escolher o modelo

Use apenas a opção desejada.

1. Para o modelo em uma linha, clique em `Linha única`. [t=11] [guia=rodape.modelo-1]

2. Para o modelo centralizado, clique em `Centralizado`. [t=12] [guia=rodape.modelo-2]

3. Para o modelo com chamada, clique em `Faixa de chamada`. [t=14] [guia=rodape.modelo-3]

### ajustar e salvar

1. Preencha `Texto abaixo da logo` com até 300 caracteres. [t=16] [guia=rodape.texto]
2. Para copiar a cor atual da barra de navegação, clique em `Herdar cor do topo`. [t=20] [guia=rodape.herdar-cor-topo]
3. Em `Cor dos textos e links`, preencha o campo de código da cor, no formato `#FFFFFF`. [t=22] [guia=rodape.cor-texto]
4. Em `Tamanho da logo no rodapé`, clique em `Média` para usar o tamanho médio. [t=25] [guia=rodape.tamanho-media]
5. Clique em `Salvar`. [t=28] [guia=configuracoes-layout.salvar]

### usar fundo de cor sólida própria

Esta sequência substitui o passo de herdar a cor do topo; use-a antes de salvar.

1. Em `Cor de fundo do rodapé`, clique em `Cor sólida`. [t=19] [guia=rodape.fundo-solido]
2. No campo de código dessa cor, digite o valor no formato `#084A43`. [guia=rodape.fundo-codigo]
3. Clique em `Salvar`. [t=28] [guia=configuracoes-layout.salvar]

### usar um gradiente pronto no fundo

Esta sequência é uma alternativa ao fundo sólido ou à cópia da cor do topo.

1. Em `Cor de fundo do rodapé`, clique em `Gradiente`. [t=19] [guia=rodape.fundo-gradiente]
2. Clique na amostra com a descrição `#134E4A → #0F8C7C`. [guia=rodape.fundo-combinacao]
3. Clique em `Salvar`. [t=28] [guia=configuracoes-layout.salvar]

### outros tamanhos da logo

Escolha apenas um tamanho; depois salve o rodapé.

1. Para a logo menor, clique em `Pequena` em `Tamanho da logo no rodapé`. [t=25] [guia=rodape.tamanho-pequena]
2. Para a logo maior, clique em `Grande` no mesmo quadro. [t=25] [guia=rodape.tamanho-grande]
3. Clique em `Salvar`. [t=28] [guia=configuracoes-layout.salvar]

## resultado

aparece `Rodapé salvo` e as escolhas são enviadas ao site. A prévia é um rascunho até salvar. `Herdar cor do topo` copia a cor atual; não cria um vínculo automático para mudanças futuras no topo.

## explicação

Também existem `Pequena` e `Grande` para a logo, e `Gradiente` para o fundo. Para manter o tamanho atual, não altere essa escolha.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/layout/rodape/page.tsx:43` — cor sólida.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/rodape/page.tsx:198` — modelos.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/rodape/page.tsx:267` — texto, cópia de cor e tamanho.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/rodape/page.tsx:352` — salvar.

## lacunas

Sem validação no navegador ou medição do tempo de atualização pública. O exemplo de gradiente usa uma combinação pronta.
