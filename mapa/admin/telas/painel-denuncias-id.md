# /painel/denuncias/[id]

Arquivo: `app/painel/denuncias/[id]/page.tsx`

## rota e gate
- `/painel/denuncias/<id>`. client. gate `PainelGuard`; prefixo `/painel/denuncias` não pertence a módulo em `lib/painel-menu.ts`.

## o que faz
- detalhe de denúncia de conteúdo (guia, vagas, classificados, eventos) e decisão do admin.

## exibe
- módulo, status, item denunciado, responsável (nome, tipo, "(bloqueado)"), motivo, data, descrição, imagens anexadas, link "Ver página denunciada" (`hrefDaPaginaDenunciada`) ou "Item não existe mais".
- se não pendente: ação tomada, data e quem resolveu (`:99-106`).

## ações (todas com `confirm()` nativo, `:12-17,39`)
- Ignorar denúncia (item continua no ar)
- Excluir item (apaga do site, irreversível) — desativado se `!denuncia.pagina`
- Bloquear empresa/conta (tira do ar tudo do responsável naquele módulo) — desativado se responsável não existe ou já bloqueado
- Desfazer bloqueio — aparece se `bloqueio_desta_denuncia`
- o admin age sobre o conteúdo e a conta do cliente (bloqueio/exclusão), sem o cliente participar.

## apis
- `adminApi.denuncias.detalhe/ignorar/excluirItem/bloquear/desbloquear` (`lib/admin-api.ts:1983-1987`), POST em `/painel/<slug>/denuncias/<id>/<acao>/`.

## estados
- carregando "Carregando…"; erro `role=alert` com `formatApiError`; sem imagens "Nenhuma imagem."

## possíveis problemas
- fato: usa `window.confirm` (`:39`), fora do padrão visual do painel (existe `ModalAvisoConfirmacao`); em navegador que bloqueia diálogos a ação não roda.
- fato: `Number(id)` sem validação (`:33`); id inválido vira erro de API, não 404 amigável.
- fato: após `desbloquear` o botão some se a resposta não trouxer `bloqueio_desta_denuncia` (depende do backend).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-denuncias-id.png](../prints/painel-denuncias-id.png) · dados brutos: [json](../prints/json/painel-denuncias-id.json)
- aberta em `/painel/denuncias/1` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Denúncias" — topo, no topo da página, à esquerda (300,19,91,28)
- [link] "← Voltar para Denúncias" — conteúdo, na parte de cima, ao centro (354,103,156,16)
- [aviso] "Não foi possível carregar: No Denuncia matches the given query." — conteúdo, faixa larga na parte de cima (354,139,848,66)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
