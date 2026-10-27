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
tags:
  - ver
  - editar
  - classificado
  - anuncio
  - anunciante
  - cliente
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - S-YcDWiimEo
  - 4pc8AwOX0hA
---

## objetivo
consultar, atualizar ou encerrar anúncios próprios na área do cliente.

Para publicar um anúncio novo, veja o artigo "publicar um anúncio novo na área do cliente".

## pré-requisitos
- ter vínculo de anunciante e estar na área do cliente autenticada.
- não é um guia de login ou contratação de plano.

## passos

1. No menu da esquerda, clique em `Classificados` (na empresa, fica na parte `O que eu publico`). [t=9] [guia=menu:/minha-conta/classificados]
2. Na lista `Meus anúncios`, clique na aba da situação que quer ver: `Todos`, `Ativo`, `Pausado`, `Aguardando aprovação`, `Reprovado`, `Vendido` ou `Encerrado`. [guia=meus-anuncios.filtros]
3. No anúncio, clique no ícone de lápis `Editar` (o nome do anúncio é só texto: o clique que abre a edição é no lápis). Abre a página `Editar anúncio`. [t=99] [guia=meus-anuncios.editar]
4. Faça as mudanças no anúncio (título, descrição, preço, fotos, contato). [guia=anuncio-form.titulo]
5. Clique em `Salvar alterações`. Aparece a janela `Anúncio salvo`. [guia=anuncio-form.salvar]

## resultado esperado
você vê os anúncios associados ao próprio perfil e as situações exibidas: `Ativo`, `Pausado`, `Aguardando aprovação`, `Reprovado`, `Vendido` ou `Encerrado`. No topo, os quadros mostram anúncios no ar, em análise e vendidos.

## desvios
- os ícones à direita de cada anúncio são: ver no site (só se estiver no ar, com foto e dentro do prazo), editar, pausar ou reativar, marcar como vendido e excluir. [t=99]
- em anúncio `Reprovado` aparece o `Motivo da reprovação` com o link `Corrigir e reenviar`.
- para sair do plano grátis, use `Sair do grátis` na faixa do plano, ou `Ver planos de Classificados` no aviso de limite; a tela de planos compara os planos e o botão `Quero este` leva ao pagamento. [t=118]
- com o limite do plano atingido, o botão `Novo anúncio` fica desabilitado e aparece `Você chegou ao limite do plano`: pause um anúncio ou mude de plano.
- o artigo [formas de anunciar no portal](formas-de-anunciar-no-portal.md) (vídeo 4pc8AwOX0hA) é uma visão geral das oito formas de anunciar; só os classificados são tratados neste artigo.
- um anúncio ativo pode não aparecer publicamente se estiver sem foto ou fora da validade.
- quanto tempo o anúncio fica no ar depende do plano. Nos valores padrão do catálogo: Grátis, 30 dias, 3 anúncios e 3 fotos; assinaturas, 180 dias e 10 fotos (10 ou 50 anúncios). O prazo conta do dia em que ele é publicado (se o portal pede aprovação, do dia em que é aprovado). Passado o prazo, o anúncio é encerrado sozinho. Editar o anúncio não renova o prazo.
- não altere nem tente abrir anúncio de outra empresa.

## quando pedir ajuda
se um anúncio próprio não aparecer ou continuar invisível depois de corrigir os dados indicados, informe ao suporte o título público do anúncio.

## fontes
- `frontend/src/app/minha-conta/classificados/page.tsx:45-62` — situações; `:218-234` título e `Novo anúncio`; `:275-286` filtros; `:333-355` ícones de ação.
- `frontend/src/app/minha-conta/classificados/AnuncioForm.tsx:380` — `Editar anúncio`; `:600-606` `Salvar alterações`; `:614-626` janela `Anúncio salvo`.
- `frontend/src/app/minha-conta/_gestao/FaixaDoPlano.tsx:145` — `Sair do grátis`; `frontend/src/app/minha-conta/_gestao/AvisoDeLimite.tsx:25` — aviso de limite; `frontend/src/app/minha-conta/classificados/page.tsx:392` — `Ver planos de Classificados`; `frontend/src/app/minha-conta/planos/[secao]/page.tsx:362` — `Quero este`.
- `backend/comercial/catalogo.py:340-410` — valores padrão dos planos (editáveis pelo dono do portal).
- `backend/anuncios/views_admin.py:178-179` — `expira_em` = hoje + prazo do plano ao publicar.
- `backend/anuncios/moderacao.py:46-66` — na primeira aprovação o prazo conta dali; depois a edição mantém o `expira_em` original.
- `backend/anuncios/management/commands/encerrar_anuncios_expirados.py:59` — encerra anúncios ativos com `expira_em` vencido.

## lacunas
testado em tela (2026-10-15, plano grátis sintético, 1280 px e 390 px): criar com foto, listar, editar, página pública; erros por campo aparecem em português. não testado: pausar/vender/encerrar, excluir. preço, quantidade e destaque dos planos pagos são valores padrão do catálogo e podem ter sido alterados pelo dono do portal.
