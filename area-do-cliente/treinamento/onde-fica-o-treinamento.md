---
id: ac-treinamento-onde-fica
titulo: "onde fica o treinamento e as aulas"
publico:
  - cliente
modulo: treinamento
aba: Treinamentos
tipo_problema:
  - onde-ficam-as-aulas
  - acessar-treinamento
  - navegar-area-do-cliente
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
encontrar os treinamentos do seu produto.

## pré-requisitos
- ter um negócio com licença ativa do produto.

## passos
1. No menu da esquerda, clique em `Meus negócios` (`/negocios`).
2. No cartão da cidade, clique em `Acessar meu negócio`.
3. No menu do negócio, clique em `Treinamentos` (`/negocios/<negócio>/treinamento`).

## resultado
abre a tela `Treinamentos` (`Aprenda, coloque em prática e faça seu portal crescer.`), com o seu progresso, o próximo passo e a lista `Seus módulos`.

## explicação
- o treinamento é do produto, não da cidade. se você tem duas cidades do mesmo produto, as mesmas aulas aparecem dentro de cada negócio, e o que você concluiu em um aparece concluído no outro.
- na página `Início` também há um atalho `Explore os treinamentos` e a busca no treinamento.
- se você abrir o endereço `/treinamento` direto e tiver só um negócio, vai direto para os treinamentos dele; com mais de um, vai para `Meus negócios` para você escolher.

## desvios
- `Nenhum módulo publicado até agora.`: as aulas ainda não foram publicadas para o seu produto.
- se aparecer `Como voltar a ter acesso`, o treinamento está bloqueado por pendência de pagamento. veja o artigo sobre treinamento bloqueado.

## quando pedir ajuda
se você tem negócio ativo e não vê nenhum módulo, abra um chamado em `Suporte`.

## fontes
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/labels.ts:178`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:147`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:257`
- `area-clientes/src/app/(cliente)/treinamento/redirect-target.ts:1`
- `area-clientes/src/app/(cliente)/inicio/page.tsx:435`
- `area-clientes/docs/PRODUCT.md:48`

## lacunas
não testado em tela com duas cidades.
