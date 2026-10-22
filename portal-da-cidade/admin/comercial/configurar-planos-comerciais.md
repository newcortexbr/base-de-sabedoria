---
id: configurar-planos-comerciais
titulo: consultar e ajustar planos comerciais
publico:
  - admin
modulo: planos
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - 31ftVMQ_yr4
  - MbMNv59z7Bg
---

## objetivo

aqui você vê e ajusta os planos que o portal vende em cada parte do site.

## pré-requisitos

- Ter acesso administrativo ao painel.
- Saber qual seção comercial precisa ser consultada.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Planos`. A página mostra no topo quatro números (planos à venda, seções vendendo, seções sem venda e espaços de banner com preço) e, abaixo, os `Planos por seção do portal`: um quadro para cada parte do site que pode ser vendida. [guia=menu:/painel/planos] [t=7]
2. No quadro da parte que você quer, clique em `Gerenciar` (ou em `Definir preço`, se ainda não tiver plano). No quadro de publicidade, o botão é `Gerenciar espaços`. [guia=planos.gerenciar] [t=85]
3. Confira o que já está preenchido antes de mudar. Dependendo da parte, a página mostra planos ou espaços de publicidade (banners). [guia=planos.conteudo]
4. Salve pelo botão da própria página e espere a mensagem de que deu certo. [guia=planos.salvar]

## o que é fixo e o que você muda

- Limites e benefícios de cada plano são fixos, definidos pela plataforma: quantas vagas, quantos dias no ar, quantas fotos e quais destaques. O cliente recebe exatamente o que comprou.
- Você muda só o nome, o preço, colocar o plano à venda ou tirar de venda, e criar o mesmo plano em outras periodicidades.
- Há duas formas de cobrança: recorrente (mensal, semestral ou anual), em que o cliente é cobrado de novo a cada período, e pagamento único, sem renovação.
- Cada forma de pagamento do plano vira uma aba na seção (`Mensal`, `Semestral`, `Pagamento Único`).
- Em editar, você muda nome e preço e liga ou desliga `colocar este plano à venda`. A periodicidade de um plano que já existe fica travada.
- `Mais planos` replica os benefícios de um plano em outra periodicidade, com nome e valor próprios. A forma que já existe aparece bloqueada. O plano grátis não pode ser replicado. O botão excluir só aparece quando o mesmo plano existe em mais de uma forma de pagamento.
- `Comparar todos os planos` mostra lado a lado o que cada plano tem.

## como cada seção é vendida

- Vagas: o grátis dá 1 vaga no ar por vez, por 30 dias. O plano mensal é de vagas ilimitadas, por 90 dias, com destaque. Há também um pacote de pagamento único de cinco vagas.
- Classificados: o grátis tem 3 anúncios e 30 dias. O start mensal tem 10 anúncios e 180 dias. O premium mensal tem 50 anúncios. Os destaques valem por alguns dias a cada pagamento.
- Guia comercial: o grátis é a ficha básica. O start libera galeria, WhatsApp, redes, site, telefone e não exibir concorrentes. O premium libera destaque, orçamentos, cupom e páginas personalizadas. No guia os planos são só recorrentes.
- Eventos: a lógica é por evento. A divulgação simples e a com destaque são pagamento único (um evento por pagamento). O pacote de cinco eventos é mensal. Apagar um evento não devolve o uso.
- Notícias: plano único, de pagamento único (matéria patrocinada publicada pela equipe do portal). Você define nome, preço e se está à venda, e não há botão `Mais planos`.
- Artigos: plano único mensal, para colunistas (um artigo por semana).

## publicidade (banners)

- Em `Gerenciar espaços`, a lista da esquerda traz as páginas do portal (inicial, notícias, guia, vagas, classificados, turismo, eventos, orçamentos, artigos e cupons), cada uma com um contador e uma bolinha: verde (todos os espaços com preço), laranja (alguns) ou cinza (nenhum).
- Ao escolher a página, aparecem os espaços numerados, com o tamanho da arte e o preço. No desenho, verde é à venda e pontilhado é fora de venda. Exemplos: na página inicial o espaço 1 é o topo; em notícias, o 1 é o topo, o 2 fica entre os parágrafos e o 3 na lateral; no guia, o 2 aparece só nas páginas de categoria.
- Para vender um espaço, clique em `Definir preço`, dê um nome, escolha a periodicidade (semanal, mensal, semestral ou anual) e digite o valor. Depois clique em criar preço.
- Cada espaço aceita até três preços, um por periodicidade. Num espaço com preço dá para editar, excluir um preço ou adicionar outro.
- Espaço sem nenhum preço fica fora de venda, e a empresa não consegue contratá-lo.
- Lado da empresa: em banners publicitários, ela vê os banners no ar, em análise e aguardando pagamento e clica em novo banner. As abas mostram só os espaços à venda, cada cartão com o preço a partir de e um espelho de onde a marca aparece no computador e no celular. Ela escolhe o período entre os preços criados, envia a arte, confere o total e clica em pagar e publicar. O banner entra então na fila de aprovação antes de ir ao ar.

## resultado

A definição comercial da seção é salva. A tela organiza seções conforme o catálogo atual.

## desvios

A tela `Planos` define planos e preços oferecidos aos clientes do portal; ela não é a tela de faturas nem altera por si só uma cobrança já emitida. Não há valores universais neste artigo: nomes, preços e seções podem variar.

## quando pedir ajuda

peça ajuda antes de mexer em preço, vigência, benefício ou situação de venda quando houver dúvida sobre clientes atuais ou cobrança existente. A IA não altera preços, planos ou finanças.

## fontes

- `portal-cidade/frontend/src/app/painel/planos/page.tsx:3-18,35-44`
- `portal-cidade/frontend/src/app/painel/planos/[secao]/page.tsx:3-13`
- `portal-cidade/docs/PRODUCT.md:38-44,144-153`

## lacunas

não foram documentadas regras de reajuste, migração de clientes entre planos nem preços. Esses pontos exigem confirmação humana.
