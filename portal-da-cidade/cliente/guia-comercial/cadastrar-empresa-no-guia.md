---
id: cliente-guia-comercial-cadastrar-empresa
titulo: "cadastrar sua empresa no Guia Comercial: dados, endereço, categoria e horário"
publico:
  - cliente
modulo: guia-comercial
categoria: guia-comercial
aba: Guia Comercial
tipo_problema:
  - cadastrar-empresa
status: rascunho-documental
revisado_em: 2026-10-24
validacao: video
videos:
  - Uv6Zt7V9YN0
---

## objetivo

cadastrar a empresa no Guia Comercial para ela aparecer aos visitantes, no computador e no celular.

## pré-requisitos

- estar logado na área do cliente com acesso ao Guia Comercial.

## explicação

- no topo da tela `Guia Comercial` aparece o seu plano com os recursos que ele inclui. `Mudar plano` mostra as outras opções do portal.
- o cadastro é dividido em blocos que abrem um de cada vez; no cadastro novo o botão de cada bloco é `Continuar`.
- a categoria define as páginas extras: restaurantes, por exemplo, ganham cardápio e delivery; hotéis e pousadas ganham quartos.
- a subcategoria é obrigatória: é por ela que os visitantes encontram a empresa nas buscas e que os pedidos de orçamento chegam até ela.
- em vez de digitar tudo, dá para trazer os dados do Google; quem prefere preencher à mão usa os campos direto, sem passar pelo Google (a janela do Google também oferece `Cadastrar manualmente`).

## passos

1. No menu da esquerda, clique em `Guia Comercial`. [t=12] [guia=menu:/minha-conta/guia]
2. No bloco `Dados da empresa`, clique em `Pegar dados do Google Meu Negócio`. [t=29] [guia=guia.google]
3. Na janela `Buscar no Google Meu Negócio`, escreva o nome da empresa como aparece no Google. [t=36] [guia=google.nome]
4. Clique em `Buscar`. [t=38] [guia=google.buscar]
5. Escolha a sua empresa na lista; nome, endereço, telefone e horários vêm preenchidos para você conferir antes de salvar. [t=41] [guia=fora]
6. Em `Nome da empresa`, confira ou escreva o nome como os clientes a conhecem. [t=54] [guia=guia.nome]
7. Em `Descrição`, conte em poucas linhas o que a empresa oferece. [t=56] [guia=guia.descricao]
8. Escreva o `CEP`. [t=62] [guia=campo-cep.cep]
9. Confira a `Cidade` e o `Bairro`. [t=65] [guia=local:cidade]
10. Em `Endereço`, complete com o número. A localização no mapa é descoberta pelo endereço. [t=68] [guia=guia.endereco]
11. Clique em `Continuar`. [t=74] [guia=guia.proxima-secao]
12. No bloco `Categoria e horário`, escolha a `Categoria`. [t=78] [guia=guia.categoria]
13. Escolha a `Subcategoria`. [t=92] [guia=guia.subcategoria]
14. Em `Horário de funcionamento`, preencha abertura e fechamento da segunda-feira. [t=100] [guia=guia.horario]
15. Clique em `Aplicar horário de segunda a todos os dias`. [t=102] [guia=guia.horario-aplicar]
16. Ajuste os dias diferentes e marque `Fechado` no dia de folga ou `Aberto 24h`, se for o caso. [t=107] [guia=guia.horario]
17. Clique em `Publicar no Guia`. [t=116] [guia=guia.salvar]

## resultado

aparece a confirmação de que a empresa foi enviada para análise, e o aviso "Seu cadastro está em análise" fica no topo. Abaixo aparecem os outros blocos da ficha (contatos, fotos, cupons e links) e as páginas da empresa: serviços, equipe e catálogo valem para qualquer empresa; cardápio e delivery aparecem para restaurantes. Quando o portal aprova, a tela mostra "Sua empresa está publicada no site." e o botão `Ver no site` abre a ficha como o visitante vê. O próximo passo é "completar a ficha da empresa no Guia Comercial".

## desvios

- não achou a empresa no Google: a janela oferece `Tentar outro nome` ou `Cadastrar manualmente`.
- subcategoria em branco: sem ela a empresa não recebe pedidos de orçamento.
- dia sem horário: marque `Fechado` ou `Aberto 24h`; o sistema recusa os dois juntos ("Não dá para estar fechado e aberto 24h no mesmo dia.").

## quando pedir ajuda

se o cadastro não for enviado ou a aprovação demorar, peça ajuda ao portal.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/guia/secoes-da-ficha.ts:34-110` — títulos dos blocos.
- `portal-cidade/frontend/src/app/minha-conta/guia/page.tsx:1184-1193,1647,1683,1751-1766,1831,1844-1876,1905-1945,2466` — campos, `Continuar`, `Publicar no Guia`, avisos.
- `portal-cidade/frontend/src/components/painel/BuscaNoGoogle.tsx:406,429,465-477,542,652-663` — busca no Google.
- `portal-cidade/frontend/src/components/CampoCep.tsx:108-114` — `CEP`.

## lacunas

- que o CEP preencha cidade e bairro sozinho vem do vídeo; no código o CEP preenche pelo menos o endereço (`page.tsx:1786`).
- o campo de número não é separado: o número vai no `Endereço`.
- se o texto da aprovação muda por plano ou categoria não foi verificado.
