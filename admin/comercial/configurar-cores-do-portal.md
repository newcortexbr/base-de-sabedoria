---
id: admin-configurar-cores-do-portal
titulo: "mudar as cores do portal"
publico:
  - admin
modulo: configuracoes
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - mudar a cor do portal
  - cor dos botões
  - cor de destaque
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - lrTaEV5JnVM
  - XekThBh1ygU
---

## objetivo
aqui você muda as duas cores do portal: a primária, de tudo que se clica, e a de destaque.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `Configurações` e depois em `Layout`. [guia=menu:/painel/configuracoes/layout]
2. Clique em `Cores`. [guia=configuracoes-layout.partes]
3. Em `Cor Primária`, clique numa das cores prontas ou escolha na paleta. [guia=fora]
4. Em `Cor de Destaque`, escolha a cor do mesmo jeito. [guia=fora]
5. Clique em `Salvar cores`. [guia=configuracoes-layout.salvar]

## resultado
aparece "✓ Salvo!" e o site passa a usar as cores novas.

## desvios

- Se o site ainda mostrar a cor antiga, veja "salvei, mas o site ainda mostra o antigo".

## quando pedir ajuda

peça ajuda se aparecer "Falha ao revalidar layout".

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/layout/cores/page.tsx:12-38,134,166,197`.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/page.tsx:31,85`.

## lacunas

tela não validada no navegador nesta tarefa.
