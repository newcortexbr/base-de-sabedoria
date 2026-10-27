---
id: ac-treinamento-modulos-e-aulas
titulo: "como navegar pelos módulos e aulas"
publico:
  - cliente
modulo: treinamento
aba: Treinamentos
tipo_problema:
  - assistir-aula
  - proxima-aula
  - continuar-de-onde-parei
  - filtrar-modulos
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo
abrir um módulo, assistir às aulas e passar para a próxima.

## pré-requisitos
- ter acesso a `Treinamentos` no seu negócio.

## passos
1. Em `Treinamentos` (`/negocios/<negócio>/treinamento`), veja o quadro do próximo passo. Clique em `Começar`, `Continuar aula`, `Começar próximo módulo` ou `Rever o treinamento`, conforme o que aparecer. [guia=treinamento.continuar]
2. Ou, em `Seus módulos`, escolha um módulo e clique em `Assistir aulas` (ou `Continuar` / `Rever aulas`). [guia=fora]
3. Na aula, assista ao vídeo e leia `Sobre esta aula`. [guia=fora]
4. Para seguir, clique em `Próxima aula`. Para voltar, `Aula anterior`. [guia=aula.proxima]
5. Para voltar à lista, clique em `Treinamentos` na trilha do topo. [guia=menu:/negocios/[licenseId]/treinamento]

## resultado
você assiste às aulas na ordem do módulo.

## explicação
- não há ordem obrigatória nem bloqueio: você pode abrir qualquer módulo e qualquer aula.
- o módulo marcado `Comece aqui` é o sugerido para começar.
- cada módulo mostra quantas aulas você concluiu (`<x> de <y> aulas`) e uma situação: `Não iniciado`, `Em andamento`, `Concluído`, `Aulas em preparação`.
- dá para filtrar a lista por `Todos os status`, `Em andamento`, `Não iniciados` e `Concluídos`.
- também dá para filtrar por tema: `Todos`, `Configuração` (deixar o portal pronto: Start/comece por aqui e os tutoriais do painel), `Ferramentas` (treinamentos das ferramentas bônus, como Zap Plus, Extrator da Receita Federal e Extrator do Google Maps; ferramentas novas entram aqui) e `Crescimento` (fontes de receita, marketing com IA, fama na cidade, tráfego pago). Só aparecem os temas que têm módulo.
- `Buscar módulo` filtra pelo nome. Digite `bônus` para ver os módulos bônus (ferramentas bônus, rede de parceiros, vídeos tutoriais para seus clientes, venda de sites com IA); alguns ainda chegam em breve e funcionam como os demais.
- dentro da aula, ao lado do vídeo, fica a lista de todas as aulas do módulo, com `Buscar aula` só para elas.
- conteúdo (vídeo de 26/10/2026): os módulos vão do primeiro passo às estratégias de vendas (fontes de faturamento, estrutura do portal, marketing com IA, prospecção de anunciantes, tráfego pago). O módulo 8 tem os tutoriais de todas as funções do painel admin do portal; os mesmos vídeos aparecem dentro do painel admin.
- `Vídeos tutoriais para seus clientes` (bônus): aulas que ensinam os seus clientes a usar o painel dos produtos que compram no seu portal. Elas já aparecem para o cliente dentro do painel dele; se precisar, mande ao cliente o link da aula certa para a dúvida.
- na última aula do módulo, o botão `Próxima aula` não aparece.

## desvios
- `Em breve` no módulo: as aulas ainda estão em preparação.
- `Nenhum módulo com este filtro.`: troque o filtro ou clique em `Ver todos os módulos`.

## quando pedir ajuda
se uma aula abrir vazia ou com erro, abra um chamado em `Suporte` com o nome do módulo e da aula.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:119`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:122`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:130`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:138`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/CarrosselModulos.tsx:30`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/CarrosselModulos.tsx:37`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/CarrosselModulos.tsx:162`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/CarrosselModulos.tsx:174`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/CarrosselModulos.tsx:191`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/page.tsx:118`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/page.tsx:169`
- `docs/PRODUCT.md:66`

## lacunas
o seletor `Ir para outro módulo` existe no código, mas a posição dele na tela da aula não foi conferida.
