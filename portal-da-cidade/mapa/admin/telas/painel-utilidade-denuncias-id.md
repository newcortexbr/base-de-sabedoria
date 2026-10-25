# /painel/utilidade/denuncias/[id]

Arquivo: `app/painel/utilidade/denuncias/[id]/page.tsx`

## o que você vê
Relato completo de um morador, para ler e mudar a situação.
- chega-se por `Ver detalhes` na lista de Denúncias (A Voz do Povo).
- categoria (título), data em que chegou, "Local" (bairro, cidade) e "Referência do local".
- quando aconteceu: data ou hora informada pelo morador.
- Contato: nome e WhatsApp de quem enviou; o link abre a conversa.
- O que foi relatado: texto escrito; Relato em áudio: gravação, quando houver.
- "Foto enviada"/"Fotos enviadas" e "Vídeo enviado": arquivos mandados junto.
- se o morador não se identificou, aparece o aviso de que a denúncia foi enviada sem identificação.
- Status (lista de escolha no topo): Recebida, Em análise, Resolvida ou Arquivada; salva ao trocar.
- o relato em si não pode ser editado.

## rota e gate
- `/painel/utilidade/denuncias/<id>`. client. gate `PainelGuard` + módulo `utilidade` (prefixo, `lib/painel-menu.ts:105`).

## o que faz
- mostra o relato de um morador e deixa mudar o status.

## exibe
- categoria, data de recebimento, local (bairro, cidade), referência, data/hora do ocorrido (texto livre ou data), contato (nome + WhatsApp com link `wa.me/55…`), relato (texto e áudio com `AudioComDuracao`), fotos (campo legado `foto` e lista `fotos`), vídeo (restante do arquivo, não lido linha a linha).

## ações
- `<select>` de status com as 4 opções, salva ao mudar (PATCH). nenhum outro campo é editável (relato é só leitura).

## apis
- `adminApi.utilidade.denuncias.detalhe(id)` e `atualizarStatus` (`lib/admin-api.ts:1338-1340`).

## estados
- carregando; erro ou "Denúncia não encontrada."; falha ao mudar status abre `ModalAvisoConfirmacao`.

## possíveis problemas
- fato: `Number(params.id)` sem validar (`:36`); id inválido vira erro de API.
- fato: o link do WhatsApp prefixa `55` fixo (`wa.me/55${digitos}`): se o número guardado já vier com 55, o link quebra (hipótese; depende do formato salvo).
- fato: o contato do morador (nome e telefone) é exibido a qualquer admin; confirmar com a política de privacidade antes de alterar (observação, não defeito).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-utilidade-denuncias-id.png](../prints/painel-utilidade-denuncias-id.png) · dados brutos: [json](../prints/json/painel-utilidade-denuncias-id.json)
- aberta em `/painel/utilidade/denuncias/1` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "26 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Denúncias · Telefones Úteis …" — menu lateral, no topo da página, à esquerda (lista de 26 itens em coluna) (10,18,255,921)
- [título] "Denúncia" — topo, no topo da página, à esquerda (300,19,81,28)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
