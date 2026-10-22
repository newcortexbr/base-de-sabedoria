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
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - pBHdF3bd1QI
---

## objetivo

aqui você cria, muda e apaga cupons de qualquer empresa do Guia, em nome do lojista.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para mudar um cupom, veja o artigo "editar um cupom do portal".
- para apagar um cupom, veja o artigo "remover um cupom do portal".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Cupons de Desconto`. [guia=menu:/painel/cupons] [t=9]
2. Para criar, clique em `Novo cupom`. [guia=cupons.novo] [t=22]
3. Escolha a `Empresa`. Cada empresa só pode ter um cupom; por isso, as que já têm não aparecem na lista. [guia=cupons.empresa] [t=25]
4. Envie a `Foto de capa do cupom`. [guia=cupons.foto] [t=28]
5. Escreva o `Código do cupom *`, só com letras e números. [guia=cupons.codigo] [t=31]
6. Escreva o `Desconto (texto exibido) *`, que aparece no selo (por exemplo, 10% off). [guia=cupons.desconto-texto] [t=33]
7. Escreva a `Descrição do cupom`. [guia=cupons.descricao] [t=35]
8. Escreva as `Condições de uso`. [guia=cupons.condicoes] [t=39]
9. Escolha o `Tipo de desconto` (`Percentual (%)` ou `Valor fixo (R$)`). [guia=cupons.tipo] [t=41]
10. Informe o `Valor`. [guia=cupons.valor] [t=43]
11. Escolha a `Validade`. [guia=cupons.validade] [t=44]
12. Clique em `Salvar cupom`. [guia=cupons.salvar] [t=46]

## resultado

o cupom aparece para os visitantes. na página pública de cupons, o visitante pode buscar, filtrar por categoria e clicar em `pegar cupom`: o código aparece na hora, com o botão `copiar`, e basta apresentá-lo no estabelecimento. Remover só apaga o cupom; a empresa continua no Guia.

## desvios

- Se a lista de empresas vier vazia, todas já podem ter cupom ou não há empresas no Guia.
- Se a foto falhar, o cupom já foi salvo; edite e envie a foto de novo.
- Cupom depende do plano da empresa.
- Você não precisa cadastrar os cupons sozinho: a própria empresa pode gerenciar o cupom pelo painel do cliente, se o plano dela incluir cupom (o item `Cupons` aparece no menu dela, abaixo de `Guia Comercial`). ao salvar por lá, o selo muda para "no ar" e o cupom já aparece no portal. é o mesmo cupom que você vê no seu painel.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/cupons/`
- `suporte-kb/mapa/admin/telas/painel-cupons.md`, `painel-cupons-novo.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
