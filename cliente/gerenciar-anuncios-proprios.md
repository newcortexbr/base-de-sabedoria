---
id: cliente-gerenciar-anuncios-proprios
titulo: acompanhar e editar anúncios próprios
publico:
  - cliente
modulo: classificados
categoria: classificados
aba: Classificados
tipo_problema:
  - anuncios-proprios
  - status-do-anuncio
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - 4pc8AwOX0hA
---

## objetivo
consultar, atualizar ou encerrar anúncios próprios na área de cliente.

## pré-requisitos
- ter vínculo de anunciante e estar na área de cliente autenticada.
- não é um guia de login ou contratação de plano.

## passos
1. abra `Classificados` na área do cliente.
2. encontre o anúncio em `Meus anúncios`; use as abas (`Todos`, `Ativo`, `Pausado`, `Aguardando aprovação`, `Reprovado`, `Vendido`, `Encerrado`).
3. clique no anúncio para abrir a edição.
4. altere e clique em `Salvar alterações` (mensagem `Anúncio salvo`).
5. para publicar outro, clique em `Novo anúncio`. obrigatórios: título, descrição e ao menos uma foto. clique em `Publicar anúncio`. na primeira vez aparece antes `Complete seu cadastro`.

## resultado esperado
você vê os anúncios associados ao próprio perfil e os estados exibidos, como `Ativo`, `Pausado`, `Aguardando aprovação`, `Reprovado`, `Vendido` ou `Encerrado`.

## desvios
- um anúncio ativo pode não aparecer publicamente se estiver sem foto ou fora da validade.
- publicação e destaque obedecem condições e limites comerciais; a área do cliente apresenta eventuais bloqueios.
- não altere nem tente abrir anúncio de outra empresa.

## quando pedir ajuda
se um anúncio próprio não aparecer ou continuar invisível depois de corrigir os dados indicados, informe ao suporte o título público do anúncio.

## fontes
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:3`
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:45`
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:47`
- `portal-cidade/docs/PRODUCT.md:44`

## lacunas
testado em tela (2026-10-15, plano grátis sintético, 1280 px e 390 px): criar com foto, listar, editar, página pública; erros por campo aparecem em português. não testado: pausar/vender/encerrar, excluir, limites de plano. este artigo não promete quantidade, preço ou destaque.
