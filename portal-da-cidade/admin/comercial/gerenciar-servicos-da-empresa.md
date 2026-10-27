---
id: gerenciar-servicos-da-empresa
titulo: "serviços: cadastrar na página da empresa do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - criar
  - servico
  - preco
  - empresa
  - guia
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - aE3QL3ErK0k
  - FwKU_0GF6iU
---

## objetivo

aqui você monta a tabela de serviços e preços de uma empresa do Guia.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter ficha completa. A cortesia do portal também libera o recurso; o plano Grátis não.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=17]
3. Desça até `Conteúdo da ficha` e, no cartão `Serviços`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-servicos] [t=20]
4. Escreva o nome da seção (por exemplo, Consultas). [guia=guia-empresas-servicos.nome-secao] [t=33]
5. Clique em `Criar seção`. [guia=guia-empresas-servicos.criar-secao] [t=36]
6. Na seção, clique em `Adicionar serviço`. [guia=guia-empresas-servicos.adicionar-servico] [t=54]
7. Escreva o `Nome *` do serviço. [guia=guia-empresas-servicos.nome] [t=57]
8. Escreva a `Descrição`. [guia=guia-empresas-servicos.descricao] [t=60]
9. Informe o `Valor (R$)`. [guia=guia-empresas-servicos.valor] [t=60]
10. Se o preço varia, preencha o `Texto de valor (opcional)` (por exemplo, "a partir de R$ 1.800/m²"): ele aparece no lugar do valor. [guia=guia-empresas-servicos.texto-de-valor] [t=65]
11. Se quiser, preencha `Duração (opcional)`. [guia=guia-empresas-servicos.duracao] [t=73]
12. Se quiser, preencha `Detalhe (opcional)`. [guia=guia-empresas-servicos.detalhe] [t=76]
13. Se quiser, escolha um `Ícone (opcional)`. [guia=guia-empresas-servicos.icone] [t=82]
14. Clique em `Salvar serviço`. [guia=guia-empresas-servicos.salvar] [t=84]

## resultado

O serviço fica salvo na seção escolhida. `Texto de valor (opcional)`, quando preenchido, substitui o valor fechado na apresentação.

## desvios

- Cada seção e cada serviço tem a chave "no ar" para publicar ou esconder. a seção mostra também o contador de serviços publicados.
- Setas mudam a ordem; `Renomear` e `Excluir seção` cuidam da seção.
- A própria empresa também pode cuidar disso pela área do cliente; a tela é a mesma.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:948,975-979,1735-1744`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/servicos/page.tsx:113-165,338-339,454-467`.

## lacunas

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.
