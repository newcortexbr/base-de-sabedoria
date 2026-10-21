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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - 4pc8AwOX0hA
---

## objetivo
consultar, atualizar ou encerrar anúncios próprios na área de cliente.

Para publicar um anúncio novo, veja o artigo "publicar um anúncio novo na área do cliente".


## pré-requisitos
- ter vínculo de anunciante e estar na área de cliente autenticada.
- não é um guia de login ou contratação de plano.

## passos

1. No menu da esquerda da sua área, na parte `O que eu publico`, clique em `Classificados` (`/minha-conta/classificados`). [guia=menu:/minha-conta/classificados]
2. Em `Meus anúncios`, procure o anúncio. Use as abas no topo da lista para ver só um tipo (`Todos`, `Ativo`, `Pausado`, `Aguardando aprovação`, `Reprovado`, `Vendido`, `Encerrado`). [guia=meus-anuncios.filtros]
3. Clique no anúncio para abrir a página `Editar anúncio`. [guia=meus-anuncios.editar]
4. Faça as mudanças no anúncio. [guia=meus-anuncios.editar]
5. Clique em `Salvar alterações`. Aparece a mensagem `Anúncio salvo`. [guia=anuncio-form.salvar]

## resultado esperado
você vê os anúncios associados ao próprio perfil e os estados exibidos, como `Ativo`, `Pausado`, `Aguardando aprovação`, `Reprovado`, `Vendido` ou `Encerrado`.

## desvios
- um anúncio ativo pode não aparecer publicamente se estiver sem foto ou fora da validade.
- quanto tempo o anúncio fica no ar depende do plano: no plano Grátis são 30 dias e nas assinaturas são 180 dias, contados do dia em que ele é publicado (se o portal pede aprovação, do dia em que é aprovado). Passado o prazo, o anúncio é encerrado sozinho. Editar o anúncio não renova o prazo.
- publicação e destaque obedecem condições e limites comerciais; a área do cliente apresenta eventuais bloqueios.
- não altere nem tente abrir anúncio de outra empresa.

## quando pedir ajuda
se um anúncio próprio não aparecer ou continuar invisível depois de corrigir os dados indicados, informe ao suporte o título público do anúncio.

## fontes
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:3`
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:45`
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:47`
- `portal-cidade/docs/PRODUCT.md:44`
- `portal-cidade/backend/comercial/catalogo.py:344,354,389,413` — prazo por plano (Grátis 30 dias; assinaturas 180 dias).
- `portal-cidade/backend/anuncios/views_admin.py:178-179` — `expira_em` = hoje + prazo do plano ao publicar.
- `portal-cidade/backend/anuncios/moderacao.py:46-66` — na primeira aprovação o prazo conta dali; depois a edição mantém o `expira_em` original.
- `portal-cidade/backend/anuncios/management/commands/encerrar_anuncios_expirados.py:59` — encerra anúncios ativos com `expira_em` vencido.

## lacunas
testado em tela (2026-10-15, plano grátis sintético, 1280 px e 390 px): criar com foto, listar, editar, página pública; erros por campo aparecem em português. não testado: pausar/vender/encerrar, excluir, limites de plano. este artigo não promete quantidade, preço ou destaque.
