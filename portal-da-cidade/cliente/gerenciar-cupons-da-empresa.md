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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - v7uO6kjwVOA
---

## objetivo
criar, alterar e consultar o cupom de desconto da empresa na página `Cupons`. Cada empresa tem um cupom só.

## pré-requisitos
- estar na área do cliente autenticada e ter vínculo com a empresa.
- o plano do Guia Comercial precisa incluir cupom.

## passos

1. No menu da esquerda, na parte `O que eu publico`, logo abaixo de `Guia Comercial`, clique em `Cupons`. Essa opção só aparece se o seu plano do Guia inclui cupom. [t=11] [guia=menu:/minha-conta/cupons]
2. Veja a situação do cupom ao lado do nome da empresa: `No ar`, `Não publicado` ou `Vencido`. [t=19] [guia=cupom-empresa.situacao]
3. Se quiser, clique em `Adicionar` (ou `Trocar`) para a `Foto de capa do cupom`. É opcional e só aparece se o plano inclui foto do cupom. [t=27] [guia=cupom-empresa.campos]
4. Em `Cupom de desconto`, escreva a oferta em poucas palavras (é o destaque do cartão, por exemplo "15% off na instalação"). [t=34] [guia=cupom-empresa.campos]
5. Em `2ª linha do card (opcional)`, complemente a oferta (por exemplo "válido para instalações de tomadas e chuveiros"). [t=43] [guia=cupom-empresa.campos]
6. Em `Condições de uso (opcional)`, escreva as regras (até 200 letras). [t=47] [guia=cupom-empresa.campos]
7. Em `Código do cupom`, escreva o código com letras e números, sem espaços nem símbolos. [t=55] [guia=cupom-empresa.campos]
8. Em `Tipo de desconto`, escolha `Percentual (%)` ou `Valor fixo (R$)`. [t=62] [guia=cupom-empresa.campos]
9. Em `Valor do cupom`, digite o valor. [t=68] [guia=cupom-empresa.campos]
10. Em `Cupom vale até`, escolha a data final. [t=70] [guia=cupom-empresa.campos]
11. Clique em `Salvar cupom`. Aparece `Salvo.` [t=78] [guia=cupom-empresa.salvar]

## resultado esperado
o cupom fica `No ar` quando tem código preenchido, está dentro da validade e a empresa está no ar. Sem código, a situação é `Não publicado`; passada a data de `Cupom vale até`, é `Vencido`. O visitante clica em pegar cupom e o código aparece. Para alterar depois, volte em `Cupons`, mude o que quiser e salve de novo. [t=105]

## desvios
- a vitrine pública de cupons e a gestão da empresa são páginas distintas; o cupom também pode ser editado em `Guia Comercial` (é o mesmo cupom).
- sem cupom no plano, a página mostra "O plano atual da sua empresa no Guia Comercial não inclui cupom de desconto." com o botão `Ver planos e assinaturas`.
- sem empresa cadastrada, a página pede para cadastrar a empresa no Guia Comercial.
- código com espaço ou símbolo é recusado com "Use só letras e números no código do cupom, sem espaços nem símbolos."

## quando pedir ajuda
se `Cupons` não estiver disponível ou um cupom próprio não aparecer, contate o suporte do portal com o nome público da empresa. não tente alterar cupom de outra empresa.

## fontes
- `frontend/src/app/minha-conta/cupons/page.tsx:72-92` — situações do cupom; `:204` título `Cupons`; `:221-240` avisos; `:243-362` campos, `Salvar cupom`, `Salvo.`
- `frontend/src/app/minha-conta/ClienteSidebar.tsx:115-120` — item `Cupons` abaixo do Guia, só com cupom liberado.
- `backend/guia/cupom.py:69-80` — regra do código do cupom.

## lacunas
tela não validada no navegador nesta tarefa. A data de validade é conferida pelo navegador do cliente (`cupons/page.tsx:75-86`).
