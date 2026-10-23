---
id: ac-ferramentas-o-que-sao
titulo: "o que são as ferramentas e onde ficam"
publico:
  - cliente
modulo: ferramentas
aba: Ferramentas
tipo_problema:
  - onde-ficam-as-ferramentas
  - quais-ferramentas-tenho
  - duvida-geral
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - 2sVAq8AngnY
---

## objetivo
conhecer as ferramentas que vêm com o seu negócio e onde encontrá-las.

## pré-requisitos
- ter um negócio com licença ativa.

## passos
1. No menu da esquerda, clique em `Meus negócios` (`/negocios`) e depois em `Acessar meu negócio`. [guia=negocios.acessar-negocio]
2. No menu do negócio, clique em `Ferramentas` (`/negocios/<negócio>/ferramentas`). [guia=menu:/negocios/[licenseId]/ferramentas]
3. Em `Suas ferramentas`, veja os cartões. Cada um tem nome, descrição, uma etiqueta de situação e os botões. [guia=fora]

## resultado
você vê as ferramentas do seu produto. a tela diz: `Acesse suas ferramentas e aprenda a usar cada uma delas.`

## explicação
- ferramentas são sistemas de apoio para o seu negócio (por exemplo, para prospectar empresas e organizar o atendimento). elas abrem em outra aba.
- as ferramentas são do produto: aparecem iguais em todas as cidades do mesmo produto.
- etiquetas: `Disponível` (pode abrir), `Em breve` (ainda não liberada), `Suspenso` (negócio com pagamento pendente).
- botões: `Acessar ferramenta` abre a ferramenta; `Ver treinamento` abre a aula que ensina a usá-la (ou `Treinamento em preparação`, se a aula ainda não existe).
- várias ferramentas entram com a mesma conta da área do cliente, sem senha nova (login único).
- `As aulas mostram o uso de cada ferramenta. Nenhuma chave de acesso é exibida nesta página.`

## desvios
- `Nenhuma ferramenta liberada para este negócio ainda. Assim que houver, ela aparece aqui.`
- com o negócio suspenso: `Portal e ferramentas suspensos por pendência financeira.` o acesso volta quando o pagamento for confirmado.

## quando pedir ajuda
se uma ferramenta que você contratou não aparece, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:179`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:50`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:88`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:96`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:125`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:132`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:159`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:172`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:185`
- `src/domain/conteudo/tools.ts:1`

## lacunas
- a lista de ferramentas é cadastrada pela equipe e pode mudar. no ambiente conferido (21/10/2026) havia `Extrator Google Maps`, `Extrator da Receita Federal` (Prospecção) e `Zap Plus` (Atendimento: `Organize conversas no WhatsApp.`). a lista em produção não foi conferida.
- não há artigo sobre o Zap Plus: o código só tem o link externo, sem regras de acesso.
