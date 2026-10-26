---
id: gerenciar-equipe-da-empresa
titulo: "equipe: cadastrar na página da empresa do Guia"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - okWcwnwq5Bk
  - -cq2YnG0vis
---

## objetivo

aqui você mostra os profissionais da empresa, com foto, nome e especialidade.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A empresa ter ficha completa. A cortesia do portal também libera o recurso; o plano Grátis não.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=19]
3. Em `Conteúdo da ficha`, no cartão `Equipe`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-equipe] [t=22]
4. Clique em `Adicionar membro`. [guia=guia-empresas-equipe.adicionar] [t=43]
5. Se quiser, em `Adicionar foto`, escolha a imagem do profissional. [guia=guia-empresas-equipe.foto] [t=46]
6. Escreva o `Nome *`. [guia=guia-empresas-equipe.nome] [t=50]
7. Escreva o `Cargo / Especialidade *`. [guia=guia-empresas-equipe.cargo] [t=53]
8. Se o profissional tiver registro em conselho, preencha `Registro profissional (opcional)` (por exemplo, CRM). [guia=guia-empresas-equipe.registro] [t=60]
9. Clique em `Salvar membro`. [guia=guia-empresas-equipe.salvar] [t=67]

## resultado

O membro é salvo na lista da equipe. Este cadastro mostra um profissional na ficha; não cria um login para ele.

## desvios

- Use a chave "no ar" para esconder alguém sem apagar (por exemplo, de férias).
- `Editar` muda os dados; a lixeira exclui.
- A própria empresa também pode cuidar disso pela área do cliente; a tela é a mesma.

## quando pedir ajuda

peça ajuda se o cartão não aparecer ou se salvar der erro.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:948,975-979,1735-1744`.
- `portal-cidade/frontend/src/app/painel/guia/empresas/[id]/equipe/page.tsx:123-150,178-180,275-276`.

## lacunas

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.
