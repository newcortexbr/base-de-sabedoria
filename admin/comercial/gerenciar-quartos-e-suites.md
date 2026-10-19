---
id: gerenciar-quartos-e-suites
titulo: "quartos e suítes: cadastrar na página da empresa do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - reZ3e1a4o-o
---

## objetivo

mostrar as acomodações de hotel ou pousada com fotos, comodidades e preço por noite.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Quartos` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas` (`/painel/guia/empresas`).
2. Na linha da empresa, clique no lápis (`Editar`).
3. Desça até `Conteúdo da ficha` e, no cartão `Quartos e suítes`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela.
4. Escreva o nome da seção (por exemplo, Suítes) e clique no botão de mais.
5. Na seção, clique para adicionar um quarto (`Novo quarto`).
6. Preencha o `Título *`, o `Subtítulo` e a `Descrição`.
7. Informe o `Preço por noite`. Para promoção, preencha também o `Preço promocional`.
8. Em `Comodidades do quarto`, escreva cada item (por exemplo, Wi-Fi) e clique no mais.
9. Se quiser, mude a `Ordem` do quarto na seção.
10. Clique em `Salvar quarto`.
11. Para as fotos, clique em `Fotos` no quarto e use `+ Adicionar fotos` (também aceita vídeo do YouTube).

## resultado

a página da empresa ganha o bloco `Quartos & Suítes` com preço por noite e botões de reserva e WhatsApp.

## desvios

- A categoria precisa ter `Quartos` marcado em `Gerenciar Categorias`; sem isso o cartão não aparece.
- Cada quarto pode estar `Publicado` ou `Despublicado`.
- A própria empresa também pode cuidar disso pela área do cliente; a tela é a mesma.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/quartos/page.tsx:1`
- vídeo `reZ3e1a4o-o`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela.
