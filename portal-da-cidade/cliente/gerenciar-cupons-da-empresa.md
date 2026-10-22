---
id: cliente-gerenciar-cupons-empresa
titulo: consultar os cupons da empresa na área do cliente
publico:
  - cliente
modulo: cupons
categoria: cupons
aba: Cupons
tipo_problema:
  - cupons-da-empresa
  - cupom-nao-aparece
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - v7uO6kjwVOA
---

## objetivo
criar, alterar e consultar o cupom de desconto da empresa na área `Cupons`.

## pré-requisitos
- estar na área de cliente autenticada e ter vínculo com a empresa.

## passos

1. No menu da esquerda da sua área, na parte `O que eu publico`, logo abaixo de `Guia Comercial`, clique em `Cupons` (`/minha-conta/cupons`). Essa opção só aparece se o seu plano do Guia inclui cupom. [guia=menu:/minha-conta/cupons]
2. Na página, veja o seu `Cupom de desconto` e a situação dele (`No ar`, `Não publicado` ou `Vencido`). Cada empresa tem um cupom só. [guia=cupom-empresa.situacao]
3. Preencha ou mude a `Foto de capa do cupom`. ela é opcional, mas deixa o cupom mais chamativo. [guia=cupom-empresa.campos]
4. Preencha o `Cupom de desconto` com a oferta em poucas palavras (é o destaque do cartão, por exemplo "15% off na instalação") e, na segunda linha do cartão, complemente a oferta (por exemplo "válido para instalações de tomadas e chuveiros"). [guia=cupom-empresa.campos]
5. Preencha o `Código do cupom`, com letras e números, sem espaços. [guia=cupom-empresa.campos]
6. Escolha o `Tipo de desconto` (`Percentual (%)` ou `Valor fixo (R$)`). [guia=cupom-empresa.campos]
7. Preencha o `Valor do cupom`. [guia=cupom-empresa.campos]
8. Escreva as condições de uso, que explicam as regras (por exemplo: não cumulativo, apresentar o código no orçamento). [guia=cupom-empresa.campos]
9. Escolha a data em `Cupom vale até`. depois dessa data o cupom sai do portal sozinho. [guia=cupom-empresa.campos]
10. Confira tudo e clique em `Salvar cupom`. Aparece a mensagem `Salvo.` e a situação muda para `No ar`. para alterar depois, volte em `Cupons`, mude o que quiser e salve de novo. [guia=cupom-empresa.salvar]

## resultado esperado
o cupom fica `No ar`. o visitante clica em pegar cupom e o código aparece com botão copiar.

## desvios
- a vitrine pública de cupons e a gestão da empresa são páginas distintas.
- quantidade, validade e publicação dependem das regras comerciais e da configuração do portal.

## quando pedir ajuda
se `Cupons` não estiver disponível ou um cupom próprio não aparecer, contate o suporte do portal com o nome público da empresa. não tente alterar cupom de outra empresa.

## fontes
- `portal-cidade/frontend/src/app/minha-conta/cupons/page.tsx:1`
- `portal-cidade/frontend/src/app/cupons/page.tsx:46`
- `portal-cidade/docs/PRODUCT.md:46`

## lacunas
o vídeo mostra o cliente criando e alterando o próprio cupom; a disponibilidade da opção depende de o plano do Guia incluir cupom.
