# /minha-conta/orcamentos

Arquivo: `src/app/minha-conta/orcamentos/page.tsx`

## quem acessa
- empresa (lojista com empresa no Guia). Perfis reduzidos não têm a rota.
- login obrigatório (`layout.tsx`).

## gate de módulo/plano
- não é seção vendida: é benefício do plano do Guia (`secoes-do-cliente.ts:65-66`).
- o menu mostra o grupo "Orçamentos > Pedidos recebidos" só com `ficha.orcamentos_liberado`, com selo de pedidos novos (`ClienteSidebar.tsx:180-190`).
- a URL direta abre sempre; o servidor responde 403 (sem plano) ou 404 (sem empresa) e a tela mostra o aviso do servidor (`page.tsx:90-91,151-158`).
  - 403: botão "Ver planos do Guia Comercial".
  - 404: link "Ir para o Guia Comercial".
- aviso extra: `sem_servico` — "Falta escolher o seu serviço… Sem ele, nenhum pedido novo chega até você." com link para o Guia (`:163-172`).

## o que faz
- lista os pedidos de orçamento enviados por visitantes para o serviço (subcategoria) da empresa; deixa responder pelo WhatsApp e marcar como visto.

## ações e campos
- cartões: Novos para você, Recebidos no total, Já vistos.
- busca por nome, número ou cidade (até 80, espera 350 ms); abas Todos, Novos, Já vistos.
- cada pedido: título, tag Novo/Visto, data e hora, serviços, descrição (curta; completa ao expandir), local, nome e telefone.
- expandido: fotos enviadas (nova aba) e link informado (só abre se for http/https; senão mostra como texto).
- botões: "Responder no WhatsApp" (mensagem pronta; marca como visto), "Ver pedido completo/Recolher" (marca como visto ao abrir), "Marcar como visto".
- "Atualizar" manual. Não há recarga automática.

## APIs
- `GET /{portal}/comercial/minha-empresa/orcamentos/pedidos/?situacao&busca` (`cliente-api.ts:1754-1764`).
- `POST /{portal}/comercial/minha-empresa/orcamentos/pedidos/{id}/visto/` (`:1767`).
- evento `EVENTO_ORCAMENTOS_VISTOS` faz o menu refazer a contagem.

## estados de erro/vazio
- carregando "Carregando pedidos…".
- vazio: "Nenhum pedido de orçamento chegou ainda. Quando alguém pedir, você recebe um e-mail e ele aparece aqui." (`:229`).
- com filtro: "Nenhum pedido encontrado com esse filtro." + "Limpar filtros".
- erro genérico em faixa vermelha; falha de "visto" desfaz a marca e mostra o erro (`:115-118`).
- truncado: "Mostrando os N pedidos mais recentes. Use a busca para achar os demais." (`:239`).
- sem slug: "Não foi possível identificar o portal da sua sessão."

## possíveis problemas para leigo
- fato: "visto" é marcado só de abrir ou clicar no WhatsApp; o leigo pode abrir sem querer e perder o destaque "Novo". Hipótese.
- fato: o rodapé diz que "outras empresas do mesmo serviço também recebem cada pedido" (`:320`) — pode surpreender quem achava exclusivo. Mensagem honesta.
- fato: a promessa de "e-mail" no vazio depende de configuração de e-mail fora da tela; não verificado.
- fato: não há "responder" dentro do portal nem registro de quem já foi atendido; só WhatsApp externo. Hipótese: o lojista esquece quem respondeu.
- fato: sem recarga automática, ao contrário do delivery; pedido novo só aparece ao clicar em "Atualizar" (o menu tem contagem própria via alertas).
- fato: "sem_servico" usa a palavra "subcategoria" no texto (`:168`), jargão.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-orcamentos.png](../prints/minha-conta-orcamentos.png) · versão celular: [minha-conta-orcamentos-390.png](../prints/minha-conta-orcamentos-390.png) · dados brutos: [json](../prints/json/minha-conta-orcamentos.json)
- aberta em `/minha-conta/orcamentos`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Pedidos de orçamento" — topo, no topo da página, ao centro (436,46,732,28)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [link] "Ir para o Guia Comercial" — conteúdo, na parte de cima, ao centro (365,222,162,21)
