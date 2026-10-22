---
id: admin-configurar-rodape-do-portal
titulo: "mudar o rodapé do portal"
publico:
  - admin
modulo: configuracoes
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - mudar o rodapé
  - cor do rodapé
  - logo do rodapé
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - vPnHq9kRWW8
  - XekThBh1ygU
---

## objetivo
aqui você muda o modelo, o texto, as cores e o tamanho do logo no rodapé do portal.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `Configurações` e depois em `Layout`. [guia=menu:/painel/configuracoes/layout]
2. Clique em `Rodapé`. [guia=configuracoes-layout.partes]
3. Em `Modelo do rodapé`, escolha `Linha única`, `Centralizado` ou `Faixa de chamada`. [guia=fora]
4. Escreva o texto curto que aparece abaixo da logo no rodapé (até 300 caracteres).
5. Escolha a `Cor de fundo do rodapé` e a `Cor dos textos e links`. [guia=fora]
6. Em `Tamanho da logo no rodapé`, escolha `Pequena`, `Média` ou `Grande`. [guia=fora]
7. Clique em `Salvar`. [guia=configuracoes-layout.salvar]

## resultado
aparece "Salvo com sucesso!". o novo rodapé passa a aparecer em todas as páginas do site.

## desvios

- `Herdar cor do topo` usa no rodapé a mesma cor da barra do topo.
- Se o site ainda mostrar o rodapé antigo, veja "salvei, mas o site ainda mostra o antigo".

## quando pedir ajuda

peça ajuda se aparecer erro ao salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/layout/rodape/page.tsx:127,195-351`.

## lacunas

tela não validada no navegador nesta tarefa.
