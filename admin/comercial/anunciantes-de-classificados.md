---
id: admin-anunciantes-de-classificados
titulo: "cadastrar um anunciante de classificados"
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - anunciante
  - cadastrar anunciante
  - loja que anuncia nos classificados
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você cadastra quem anuncia nos classificados (pessoa ou loja), com logo e contatos.

## pré-requisitos

- Ter acesso de administrador ao painel.

## passos

1. No menu da esquerda, clique em `Classificados` e depois em `Anunciantes`. [guia=menu:/painel/classificados/anunciantes]
2. Clique em `+ Novo Anunciante`. [guia=fora]
3. Escreva o `Nome *`. [guia=fora]
4. Se quiser, preencha a descrição, o logo, a localização e os contatos. [guia=fora]
5. Clique em `Criar Anunciante`. [guia=fora]

## resultado
o anunciante entra na lista.

## desvios

- Excluir um anunciante tira o vínculo dele com os anúncios.
- A coluna `Acesso` mostra se o anunciante tem login para cuidar dos próprios anúncios.

## quando pedir ajuda

peça ajuda se aparecer "Corrija os campos do acesso do proprietário antes de salvar." e você não souber o que corrigir.

## fontes

- `portal-cidade/frontend/src/app/painel/classificados/anunciantes/page.tsx` — lista, colunas e exclusão.
- `portal-cidade/frontend/src/app/painel/classificados/anunciantes/cadastrar/page.tsx` — campos e "Criar Anunciante".

## lacunas

tela não validada no navegador nesta tarefa.
