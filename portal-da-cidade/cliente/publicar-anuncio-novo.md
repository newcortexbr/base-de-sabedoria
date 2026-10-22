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
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - S-YcDWiimEo
  - zHOxx6KFIrk
---

## objetivo

publicar um anúncio novo nos classificados da sua empresa.

## pré-requisitos

- ter vínculo de anunciante e estar na área de cliente autenticada.
- não é um guia de login ou contratação de plano.
- no plano grátis, você pode ter até 3 anúncios no ar ao mesmo tempo, cada um por 30 dias, com até 3 fotos.

## passos

1. No menu da esquerda da sua área, na parte `O que eu publico`, clique em `Classificados` (`/minha-conta/classificados`). [guia=menu:/minha-conta/classificados]
2. Clique em `Novo anúncio`. Na primeira vez, antes disso aparece a página `Complete seu cadastro`. [guia=meus-anuncios.novo]
3. Preencha pelo menos o título, a descrição e uma foto. Escolha também a categoria, a subcategoria (opcional) e a cidade; informe se o item é novo ou usado; ponha o preço ou marque preço a combinar; e, se quiser, marque aceito negociar e aceito troca. [guia=meus-anuncios.novo]
   nos dados de contato, informe o WhatsApp e, se quiser, o e-mail; marque mostrar telefone no anúncio para exibi-lo. [guia=meus-anuncios.novo]
4. Clique em `Publicar anúncio`. [guia=meus-anuncios.novo]

## resultado

o portal confere o anúncio em até dois dias úteis e avisa por e-mail. Ao aprovar, o anúncio aparece `Ativo` com os dias restantes. Com 3 anúncios no ar, aparece o aviso `Você chegou ao limite do plano grátis`: para publicar outro, pause um ou mude de plano.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:3`
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:45`
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:47`
- `portal-cidade/docs/PRODUCT.md:44`
