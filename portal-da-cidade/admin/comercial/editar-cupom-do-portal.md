---
id: editar-cupom-do-portal
titulo: "editar um cupom do portal"
publico:
  - admin
modulo: cupons
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - editar
  - cupom
  - empresa
  - guia
  - preco
  - desconto
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - pBHdF3bd1QI
---

## objetivo

Aqui você altera o cupom de uma empresa. A empresa fica fixa durante a edição.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Guia Comercial`, clique em `Cupons de Desconto`. [t=9] [guia=menu:/painel/cupons]
2. Clique em `Editar` na linha da empresa desejada. [t=52] [guia=cupons.editar]
3. Se quiser, envie uma imagem em `Foto de capa do cupom`. [guia=cupons.foto]
4. Preencha `Código do cupom *` com letras e números, sem espaço nem acento. [guia=cupons.codigo]
5. Preencha `Desconto (texto exibido) *`, como `10% OFF`. [guia=cupons.desconto-texto]
6. Se quiser, preencha `Descrição do cupom`. [guia=cupons.descricao]
7. Se quiser, preencha `Condições de uso`. [guia=cupons.condicoes]
8. Escolha `Tipo de desconto`: `Percentual (%)` ou `Valor fixo (R$)`. [guia=cupons.tipo]
9. Informe `Valor`; no desconto percentual, use um número entre 0 e 100. [guia=cupons.valor]
10. Se quiser definir um prazo, preencha `Validade`. [guia=cupons.validade]
11. Clique em `Salvar cupom`. [guia=cupons.salvar]

## resultado

O painel mostra `Cupom salvo`. A validade e o benefício de cupom continuam condicionando a exibição pública.

## desvios

- você pode ajustar foto, código, desconto, condições, tipo, valor e validade; só a empresa não muda.
- a empresa também pode editar o mesmo cupom pelo painel do cliente.

- Se a foto falhar, o texto já pode ter sido salvo; corrija o envio da foto sem criar outro cupom.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/cupons/page.tsx:195`.
- `frontend/src/app/painel/cupons/CupomForm.tsx:251`.
- `frontend/src/app/painel/cupons/CupomForm.tsx:169`.
- Vídeo `pBHdF3bd1QI`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/pBHdF3bd1QI.md` e legenda `videos/legendas/pBHdF3bd1QI.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
