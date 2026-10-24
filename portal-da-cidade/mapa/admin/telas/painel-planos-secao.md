# /painel/planos/[secao]

Arquivos: `app/painel/planos/[secao]/page.tsx`, `SecaoDePlanos.tsx`, `Escada.tsx`, `Degrau.tsx`, `JanelaCriarPlano.tsx`, `JanelaEditarPlano.tsx`, `ModalPlano.tsx`, `regras.ts`, `publicidade/*`

## rota e gate
- chega-se por `Meus Planos` (parte Comercial do menu) e, no cartão da seção, pelo botão `Gerenciar` (ou `Definir preço`, quando nada está à venda; `Gerenciar espaços` nos banners); `← Meus Planos` volta. rota `/painel/planos/<chave-da-secao>`. client. gate `PainelGuard`. seção inexistente: "Esta seção não está disponível neste portal."

## o que faz
- define a escada de planos de uma seção (tipo `plano`) ou os preços dos espaços de publicidade (tipo `banner`).
- planos de seção: nome, preço, duração (semanal, mensal, semestral, anual, pagamento único) e liga/desliga "À venda". a escada é a mesma que o cliente vê ao contratar.

## ações
- "Mais planos": janela "CRIAR NOVO PLANO" (campos "Quais benefícios deseja replicar aqui", "Nome", "Valor" e "Como o cliente paga") (`JanelaCriarPlano.tsx`).
- botão `Editar` do cartão: janela "Editar plano" com "Nome do plano", "Preço" e a chave "Colocar este plano à venda"; "Como o cliente paga" aparece travado (`JanelaEditarPlano.tsx:58-97`).
- chave "À venda" grava na hora e desfaz se o servidor recusa; servidor recusa ativar plano pago com preço zero e a frase aparece no cartão (`SecaoDePlanos.tsx:77-90`).
- botão "Excluir" só existe em plano criado por "Mais planos", não nos planos fixos de piso (`regras.ts:240`); pede `confirm('Excluir este plano?')` (`SecaoDePlanos.tsx:93`).
- seções sem plano fixo: teto de 3 planos livres (`regras.ts:LIMITE_DE_PLANOS_LIVRES`), também recusado pelo servidor.
- publicidade: "Definir preço" no espaço abre o formulário "Novo preço" (campos "Nome", "Periodicidade", "Preço"; botões "Criar preço" e "Descartar"); em preço existente, "Salvar" e "Excluir" (`confirm('Excluir este preço?')`, `JanelaDePrecos.tsx:65`).
- plano gratuito de piso não pode ser replicado nem excluído pela escada (texto em `JanelaCriarPlano.tsx`).

## apis
- `comercial.catalogo.listar`, `comercial.planos.listar({secao})`, `criar`, `atualizar` (PATCH), `excluir` (`lib/admin-api.ts:1077-1091`), rotas `/painel/<slug>/comercial/...`.

## estados
- carregando só na primeira carga; erro `role=alert`; vazios "Nenhum plano cadastrado nesta seção." e "Nenhum espaço à venda ainda. Defina um preço para colocar à venda."; "Nenhum item vendável nesta seção."

## em nome do cliente
- não age sobre cliente nenhum. mexe no catálogo de preços.

## possíveis problemas
- fato: `confirm()` nativo para excluir plano e preço.
- fato: excluir um plano que já tem contratação ativa: a tela não avisa nem mostra quantas contratações dependem dele; a regra fica no servidor (não verifiquei).
- fato: `recarregar` engole nada, mas o `catch` só seta erro; se a recarga após excluir falhar, o plano excluído continua na tela até nova carga (hipótese).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-planos-secao.png](../prints/painel-planos-secao.png) · dados brutos: [json](../prints/json/painel-planos-secao.json)
- aberta em `/painel/planos/guia` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Meus Planos — Guia Comercial" — topo, no topo da página, ao centro (300,19,270,28)
- [link] "← Meus Planos" — conteúdo, na parte de cima, à esquerda (300,103,103,16)
- [título] "Guia Comercial" — conteúdo, faixa larga na parte de cima (300,131,956,32)
- [botão] "Mais planos" — conteúdo, na parte de cima, à direita, logo abaixo de “Guia Comercial” (1122,187,134,40)
- [título] "Plano B" — conteúdo, na parte de cima, à direita (949,290,242,26)
- [título] "Plano A" — conteúdo, na parte de cima, ao centro (657,336,242,26)
- [título] "Grátis" — conteúdo, no meio da tela, ao centro (365,382,242,26)
- [menu/links] "6 itens: Editar · Editar · Editar · À venda: Grátis · À venda: Plano A · À venda: Plano B" — rodapé, faixa larga no meio da tela (lista de 6 itens em coluna) (363,669,830,34)
- [botão] "Comparar todos os planos" — conteúdo, no meio da tela, ao centro (692,736,171,20)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)

## o que você vê
Aqui você define os planos de uma seção (nome, preço, período) ou os preços dos espaços de banner; é o mesmo que o cliente vê ao contratar.
- cartões de plano, do "Plano de entrada" ao "Mais completo": cada um com nome, preço, como o cliente paga (período) e os benefícios incluídos.
- "À venda" / "Fora de venda": se o plano aparece para o cliente contratar. fora de venda, ninguém consegue contratar o plano, mesmo com o módulo ligado. o servidor pode recusar colocar à venda (a frase do motivo aparece no cartão).
- Editar: muda "Nome do plano", "Preço" e a chave "Colocar este plano à venda". A forma de pagamento não muda.
- Mais planos: abre "CRIAR NOVO PLANO", que cria outro plano copiando os benefícios de um plano existente ("Quais benefícios deseja replicar aqui"), com "Nome", "Valor" e "Como o cliente paga" próprios.
- Excluir: só em planos criados por "Mais planos"; apaga o plano (pede confirmação).
- Comparar todos os planos / O que cada plano tem: tabela com "Tem" e "Não tem" para cada benefício.
- estrela (Recurso de vitrine): marca os benefícios de destaque do plano.
- seção de banners: cada espaço mostra "Onde fica na página" e os preços por forma de pagamento (cada forma vira uma aba). "Definir preço" abre o formulário "Novo preço"; "Criar preço" põe o espaço à venda; "Excluir" tira o preço.
- "Nenhum espaço à venda ainda": nenhum banner tem preço, então ninguém compra.
