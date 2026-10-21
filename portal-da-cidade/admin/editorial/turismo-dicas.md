---
id: editorial-turismo-dicas
titulo: "turismo: dicas para visitantes"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Dicas
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-20
validacao: docs-e-codigo
---

## objetivo
aqui você cadastra dicas curtas para quem visita a cidade. Dicas têm tela própria, separada de roteiros, pontos turísticos e eventos.

## pré-requisitos/permissões
Entrar no painel como administrador, com o módulo de turismo ativo no portal.

## passos

1. Abra a página `Dicas para Visitantes`. Ela não tem botão no menu: troque o final do endereço do painel por `/painel/turismo/dicas` e aperte Enter. [guia=fora]
2. Clique em `+ Nova Dica`. [guia=dicas.nova]
3. Escreva o `Título *` da dica. [guia=dicas.titulo]
4. Se quiser, escreva a `Descrição` da dica. [guia=dicas.descricao]
5. Clique em `Salvar Dica`. [guia=dicas.salvar]

## resultado
a dica fica na área de Turismo, separada dos roteiros.

## desvios
- Para cadastrar roteiros, veja o artigo "turismo: roteiros".

## quando pedir ajuda
peça ajuda se salvar retornar erro ou se a dica não surgir na lista após recarregar a página.

## fontes
- `portal-cidade/frontend/src/app/painel/turismo/roteiros/page.tsx:1` — tela de roteiros.
- `portal-cidade/frontend/src/app/painel/turismo/dicas/page.tsx:1` — tela de dicas.
- `portal-cidade/frontend/src/app/painel/turismo/roteiros/[id]/fotos/page.tsx:1` — fotos do roteiro.
- `docs/PRODUCT.md:41` — galeria de Turismo com vídeo do YouTube.
- `docs/PRODUCT.md:193` — independência entre Turismo e Agenda de Eventos.
