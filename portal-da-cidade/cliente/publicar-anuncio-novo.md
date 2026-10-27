---
id: cliente-publicar-anuncio-novo
titulo: publicar um anúncio novo na área do cliente
publico:
  - cliente
modulo: classificados
categoria: classificados
aba: Classificados
tipo_problema:
  - anuncios-proprios
  - status-do-anuncio
tags:
  - criar
  - publicar
  - classificado
  - anuncio
  - foto
  - preco
  - anunciante
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - S-YcDWiimEo
  - zHOxx6KFIrk
---

## objetivo

publicar um anúncio novo nos classificados.

## pré-requisitos

- ter vínculo de anunciante e estar na área do cliente autenticada.
- não é um guia de login ou contratação de plano.
- nos valores padrão do plano grátis, você pode ter até 3 anúncios no ar ao mesmo tempo, cada um por 30 dias, com até 3 fotos.

## passos

1. No menu da esquerda, clique em `Classificados` (na empresa, fica na parte `O que eu publico`). [t=9] [guia=menu:/minha-conta/classificados]
2. Clique em `Novo anúncio` (ou em `Criar meu primeiro anúncio`, se ainda não há anúncios). [t=30] [guia=meus-anuncios.novo]
3. Escreva o `Título do anúncio *`. [t=33] [guia=anuncio-form.titulo]
4. Escolha a `Categoria` e a `Subcategoria` (as duas são opcionais) e confira a cidade. [t=40] [guia=anuncio-form.titulo]
5. Escreva a `Descrição *` e escolha a `Condição` (novo ou usado). [t=52] [guia=anuncio-form.descricao]
6. Digite o `Preço (R$)` ou marque `Preço a combinar`. Se quiser, marque `Aceito negociar` e `Aceito troca`. [t=59] [guia=anuncio-form.preco]
7. Em `Fotos *`, adicione ao menos uma foto. [t=70] [guia=anuncio-form.fotos]
8. Confira o `Nome para contato` e o `WhatsApp para contato`. O `E-mail para contato` é opcional. Deixe marcado `Mostrar telefone no anúncio (além do botão de WhatsApp)` se quiser exibir o número. [t=75] [guia=anuncio-form.contato]
9. Clique em `Publicar anúncio`. [t=86] [guia=anuncio-form.salvar]

## resultado

se o portal exige aprovação, aparece `Anúncio enviado para aprovação`: a análise leva de 24h a 48h úteis e você é avisado por e-mail. Ao aprovar, o anúncio aparece `Ativo` com os dias restantes. Sem aprovação, aparece `Seu anúncio foi publicado com sucesso.` Com 3 anúncios no ar (plano grátis padrão), aparece o aviso `Você chegou ao limite do plano`: para publicar outro, pause um ou mude de plano. [t=88]

## desvios

- na primeira vez, antes do formulário pode aparecer a página `Complete seu cadastro` (nome, WhatsApp e documento são pedidos ali).
- sem foto, o formulário recusa: "Envie ao menos uma foto para publicar o anúncio."
- `Cancelar` no fim do formulário sai sem publicar.

## fontes

- `frontend/src/app/minha-conta/classificados/page.tsx:218-234` — `Novo anúncio`; `:259-266` `Criar meu primeiro anúncio`.
- `frontend/src/app/minha-conta/classificados/AnuncioForm.tsx:380-606` — campos e botão `Publicar anúncio`; `:312` foto obrigatória; `:614-626` mensagens.
- `frontend/src/app/minha-conta/_gestao/AvisoDeLimite.tsx:25` — aviso de limite.
- `backend/comercial/catalogo.py:340-353` — plano Grátis padrão (3 anúncios, 3 fotos, 30 dias).

## lacunas

tela não validada no navegador nesta tarefa. Os limites do plano grátis são os valores padrão do catálogo; o dono do portal pode alterá-los. Não foi conferido o conteúdo exato de `Complete seu cadastro` para anunciante.
