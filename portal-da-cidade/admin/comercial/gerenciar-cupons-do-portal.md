---
id: gerenciar-cupons-do-portal
titulo: criar e gerenciar cupons de desconto das empresas
publico:
  - admin
modulo: cupons
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - pBHdF3bd1QI
---

## objetivo

Aqui você cria um cupom para uma empresa do Guia Comercial. Cada empresa tem um cupom.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Em `Conteúdo`, em `Guia Comercial`, clique em `Cupons de Desconto`. [t=9] [guia=menu:/painel/cupons]
2. Clique em `Novo cupom`. [t=25] [guia=cupons.novo]
3. Escolha `Empresa *`. [t=28] [guia=cupons.empresa]
4. Se quiser, envie uma imagem em `Foto de capa do cupom`. [t=28] [guia=cupons.foto]
5. Preencha `Código do cupom *` com letras e números, sem espaço nem acento. [t=30] [guia=cupons.codigo]
6. Preencha `Desconto (texto exibido) *`, como `10% OFF`. [t=33] [guia=cupons.desconto-texto]
7. Se quiser, preencha `Descrição do cupom`. [t=38] [guia=cupons.descricao]
8. Se quiser, preencha `Condições de uso`. [t=39] [guia=cupons.condicoes]
9. Escolha `Tipo de desconto`: `Percentual (%)` ou `Valor fixo (R$)`. [t=41] [guia=cupons.tipo]
10. Informe `Valor`; no desconto percentual, use um número entre 0 e 100. [t=44] [guia=cupons.valor]
11. Se quiser definir um prazo, preencha `Validade`. [t=46] [guia=cupons.validade]
12. Clique em `Salvar cupom`. [t=49] [guia=cupons.salvar]

## resultado

O painel mostra `Cupom salvo` e volta à lista. A exibição pública depende do benefício de cupom da empresa e da validade.

## desvios

- Empresas que já têm cupom não aparecem na seleção; use `Editar` na lista.
- Se aparecer `O cupom foi salvo, mas a foto não:`, os textos foram gravados. Envie a foto novamente pela edição.
- Para alterar um cupom, veja “editar um cupom do portal”; para apagar, veja “remover um cupom do portal”.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/cupons/CupomForm.tsx:95`.
- `frontend/src/app/painel/cupons/CupomForm.tsx:169`.
- `frontend/src/app/painel/cupons/page.tsx:171`.
- Vídeo `pBHdF3bd1QI`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/pBHdF3bd1QI.md` e legenda `videos/legendas/pBHdF3bd1QI.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
