# /minha-conta/publicidade/[id]/editar

Arquivos: `publicidade/[id]/editar/page.tsx`, `publicidade/EditarBanner.tsx`

## quem acessa
- empresa dona do banner. Outros perfis: redirecionados.

## gate de módulo/plano
- nenhum. O estado do banner define o que aparece (`EditarBanner.tsx:175-207`): publicado (vigente até …), aguardando aprovação, reprovado (motivo), aguardando pagamento (instruções de pagamento).

## o que faz
- troca a arte e o link de destino de um banner existente. Salvar um banner reprovado reenvia à análise (`:192`).

## ações e campos
- arte atual / nova arte (PNG ou JPG, até 5 MB, proporção por posição), "Trocar a arte", "Apagar a arte", link de destino (opcional, normalizado no blur), segundo campo opcional na linha 259 (provavelmente título; não lido), "Salvar alterações".
- aguardando pagamento: `InstrucoesDePagamento` + re-leitura ao fechar.

## APIs
- `GET /{portal}/comercial/meus-banners/{id}/` (`cliente-api.ts:2782`), `PATCH` do mesmo (`:2833`, multipart quando há arte nova).

## estados de erro/vazio
- 404 "Banner não encontrado. Ele pode ter sido removido pelo dono do portal."; 403 acesso negado; "Não foi possível carregar o banner agora…" (`:77-81`).

## possíveis problemas para leigo
- fato: não se pode trocar posição ou período; só arte e link. A tela não diz isso (não lido o texto abaixo da linha 260; hipótese).
- fato: editar banner já publicado pode devolvê-lo para análise; esta tela não avisa antes de salvar (nenhum aviso nas linhas 175-207; hipótese de impacto).
- fato: `Number(id)` sem validação.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-publicidade-id-editar.png](../prints/minha-conta-publicidade-id-editar.png) · versão celular: [minha-conta-publicidade-id-editar-390.png](../prints/minha-conta-publicidade-id-editar-390.png) · dados brutos: [json](../prints/json/minha-conta-publicidade-id-editar.json)
- aberta em `/minha-conta/publicidade/1/editar` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Editar banner" — topo, no topo da página, ao centro (480,16,116,28)
- [link] "Voltar" — topo, no topo da página, ao centro (448,20,20,20)
- [selo] "Publicado" — conteúdo, na parte de cima, ao centro (619,93,77,24)
- [título] "Home — Topo da página" — conteúdo, na parte de cima, ao centro (448,95,163,20)
- [menu/links] "10 itens: Início · Guia Comercial · Agenda de Eventos · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 10 itens em coluna) (14,96,227,786)
- [campo] "https://" — conteúdo, no meio da tela, ao centro (473,452,590,42)
- [campo] "QA banner do cliente" — conteúdo, no meio da tela, ao centro, logo abaixo de “https://” (473,539,590,42)
- [link] "Voltar" — conteúdo, no meio da tela, ao centro (810,609,78,42)
- [botão] "Salvar alterações" — conteúdo, no meio da tela, à direita, logo abaixo de “QA banner do cliente” (900,609,163,42)
