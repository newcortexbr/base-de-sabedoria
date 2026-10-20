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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - pBHdF3bd1QI
---

## objetivo

aqui você cria, muda e apaga cupons de qualquer empresa do Guia, em nome do lojista.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Cupons de Desconto`. [guia=menu:/painel/cupons] [t=9]
2. Veja na lista a empresa, o código, o desconto e a validade de cada cupom. Cupom vencido aparece marcado. [guia=menu:/painel/cupons]
3. Para criar, clique em `Novo cupom`. [guia=cupons.novo] [t=22]
4. Escolha a `Empresa`. Cada empresa só pode ter um cupom; por isso, as que já têm não aparecem na lista. [guia=cupons.empresa] [t=25]
5. Envie a `Foto de capa do cupom`. [guia=cupons.foto] [t=28]
6. Escreva o `Código do cupom *`, só com letras e números. [guia=cupons.codigo] [t=31]
7. Escreva o `Desconto (texto exibido) *`, que aparece no selo (por exemplo, 10% off). [guia=cupons.desconto-texto] [t=33]
8. Escreva a `Descrição do cupom`. [guia=cupons.descricao] [t=35]
9. Escreva as `Condições de uso`. [guia=cupons.condicoes] [t=39]
10. Escolha o `Tipo de desconto` (`Percentual (%)` ou `Valor fixo (R$)`). [guia=cupons.tipo] [t=41]
11. Informe o `Valor`. [guia=cupons.valor] [t=43]
12. Escolha a `Validade`. [guia=cupons.validade] [t=44]
13. Clique em `Salvar cupom`. [guia=cupons.salvar] [t=46]
14. Para mudar um cupom, clique em `Editar` na linha do cupom que você quer. [guia=cupons.editar] [t=49]
15. Para apagar, clique em `Remover` na linha dele. [guia=cupons.remover]
16. Confirme na janela que o navegador abre. A empresa continua no Guia. [guia=cupons.remover]

## resultado

o cupom aparece para os visitantes. Remover só apaga o cupom; a empresa continua no Guia.

## desvios

- Se a lista de empresas vier vazia, todas já podem ter cupom ou não há empresas no Guia.
- Se a foto falhar, o cupom já foi salvo; edite e envie a foto de novo.
- Cupom depende do plano da empresa.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/cupons/`
- `suporte-kb/mapa/admin/telas/painel-cupons.md`, `painel-cupons-novo.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
