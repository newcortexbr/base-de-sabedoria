# /minha-conta/materia-patrocinada

Arquivo: `src/app/minha-conta/materia-patrocinada/page.tsx`

## quem acessa
- empresa. Entrada do menu "Notícias" via `rotaDaSecao('noticias')` → `materia-patrocinada` (`secoes-do-cliente.ts:46,53-56`).
- jornalista tem outra tela (`/minha-conta/noticias`) e não alcança esta (`perfil-da-area.ts:63`). Colunista e pessoa física também não.

## gate de módulo/plano
- seção `noticias` é vendida por item (pagamento único por matéria), sem plano para comparar (`MODULOS_POR_ITEM`, `secoes-do-cliente.ts:237`).
- entra na lista do menu desde 2026-10-09 (D-387, `:43-45`).
- sem plano à venda: "Este portal não está vendendo matérias patrocinadas no momento." (`page.tsx:335-339`).
- o plano mostrado é o primeiro contratável com preço > 0 (`:96`).

## o que faz
- vende a "matéria patrocinada" e, depois de paga, manda falar com a equipe pelo WhatsApp. A tela não tem editor: a equipe escreve e publica (`:184-186`).

## ações e campos
- Antes de comprar: texto de venda, temas (empresas, inaugurações, pessoas, políticos regionais), vídeo do YouTube, exemplo fictício, botão "Contratar matéria patrocinada".
- cartão do plano: nome, preço "por notícia", benefícios, botão "Contratar minha notícia" (ou "Pagar minha notícia" se há pendente, "Contratar outra matéria" se já comprou).
- pendente: faixa "Aguardando pagamento" com `InstrucoesDePagamento`.
- após pagar: "Plano de Notícias contratado", botão "Falar com a equipe no WhatsApp" (ou "Falar com a equipe" para `/contato` se o portal não tem número), passos 1–3, lista "Suas compras", "Contratar outra matéria".
- modal de pagamento (`ModalPagamentoFatura`) abre se a fatura vem com `asaas_status === 'enviado'` (`:112`).

## APIs
- `GET /{portal}/comercial/minhas-materias/` (`cliente-api.ts:822`).
- `GET /{portal}/comercial/planos/?secao=noticias` (`:826`).
- `createPortalApi(portal).guia.config()` (best-effort, dá nome, cidade e WhatsApp).
- `POST /{portal}/comercial/contratar/` com `plano.id` (`contratarPlano`, `:1084`).

## estados de erro/vazio
- carregando "Carregando…".
- erro de carga: "Não foi possível carregar agora. Tente novamente em instantes." (genérico, sem distinguir 403 — `:99`).
- erro de compra: mostra erro de documento, e-mail ou mensagem geral; padrão "Não foi possível concluir agora. Tente novamente." (`:117`).
- vazio sem plano: ver acima.

## possíveis problemas para leigo
- fato: depois de pagar, a matéria "não é publicada sozinha" (`:184`). O leigo pode esperar um editor aqui. A tela diz isso em destaque ("Falta um passo"), mas o menu se chama "Notícias".
- fato: não há acompanhamento do andamento (escrita, aprovação, publicada): os passos 2 e 3 são estáticos (`:207-211`). Hipótese: leigo não sabe em que etapa está.
- fato: sem WhatsApp configurado, o botão leva a `/contato` e a tela diz "Abre a página de contato do portal." (`:198-201`).
- fato: o texto "sujeito à avaliação de pauta" e "análise editorial e jurídica" para temas políticos (`:299-300`) pode assustar; não diz o que acontece com o dinheiro se a pauta for recusada. Hipótese.
- fato: o exemplo "Café Bom Grão" é fictício e marcado (`:286`).
- fato: se o carregamento do slug falha (`portalSlug` nulo), a tela fica em "Carregando…" para sempre (`:86` retorna sem desligar `carregando`). Hipótese: raro, pois o layout exige login.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-materia-patrocinada.png](../prints/minha-conta-materia-patrocinada.png) · versão celular: [minha-conta-materia-patrocinada-390.png](../prints/minha-conta-materia-patrocinada-390.png) · dados brutos: [json](../prints/json/minha-conta-materia-patrocinada.json)
- aberta em `/minha-conta/materia-patrocinada`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Matéria patrocinada" — conteúdo, no topo da página, ao centro (382,46,318,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Sua próxima novidade pode virar matéria." — conteúdo, na parte de cima, ao centro (318,227,420,79)
- [título] "Sua empresa, sua história, sua atuação em destaque." — conteúdo, na parte de cima, ao centro (346,354,435,55)
- [botão] "Assistir ao vídeo: como sua história vira uma matéria" — conteúdo, no meio da tela, ao centro (346,637,435,245)
- [selo] "Conteúdo patrocinado" — conteúdo, no meio da tela, à direita (853,690,133,29)

## o que você vê
Aqui você compra uma matéria patrocinada: uma notícia sobre você ou sua empresa, escrita e publicada pela equipe do portal.
- Cartão do plano: nome, preço "por notícia" e o que está incluído. O pagamento é único, por matéria.
- Contratar minha notícia: gera a cobrança. Vira "Pagar minha notícia" se há uma pendente.
- Aguardando pagamento: mostra como pagar (Pix ou cartão).
- Depois de pago: "Falar com a equipe no WhatsApp" para combinar o texto; a tela não tem editor.
- Suas compras: matérias que você já comprou. "Contratar outra matéria" compra mais uma.
- Sem plano à venda: "Este portal não está vendendo matérias patrocinadas no momento".
