# /painel/sem-acesso

Arquivo: `app/painel/sem-acesso/page.tsx`

- rota `/painel/sem-acesso`. client.
- gate: conta com `tipo: 'sem_portal'` só alcança esta rota e `/painel/alterar-senha` (`lib/painel-permissoes.ts:15,40-44`); fallback do guard envia para cá (`:54-58`). para admin/master a rota abre normalmente (sem bloqueio inverso).
- o que faz: explica que a conta autenticou mas não tem vínculo com portal (admin, empresa, contratante ou anunciante) e orienta falar com o responsável do portal.
- ações: botão "Sair" (`useAuth().logout`) e link "Ir para o site" (`/`).
- APIs: nenhuma.
- estados: tela estática, sem erro/vazio.
- possíveis problemas:
  - fato: o menu lateral (`Sidebar`) é renderizado para essa conta dentro do layout (`layout.tsx:100-107`); `sem-acesso` usa `minHeight: 100vh` e fundo próprio, então pode ficar ao lado da Sidebar com todos os itens (que redirecionam de volta). hipótese quanto ao visual, não testado.
  - fato: não há link para `/painel/alterar-senha`, embora a rota seja permitida.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-sem-acesso.png](../prints/painel-sem-acesso.png) · dados brutos: [json](../prints/json/painel-sem-acesso.json)
- aberta em `/painel/sem-acesso`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Sua conta não está vinculada a nenhum portal" — conteúdo, na parte de cima, ao centro (551,369,454,29)
- [botão] "Sair" — conteúdo, no meio da tela, ao centro (677,554,66,45)
- [link] "Ir para o site" — conteúdo, no meio da tela, ao centro (754,554,125,45)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)

## o que você vê
Aparece quando a senha está certa, mas a conta não está ligada a nenhum portal, empresa, contratante ou anunciante.
- "Sua conta não está vinculada a nenhum portal": o acesso funcionou, falta o vínculo. Se você tinha acesso antes, ele pode ter sido removido; peça ao responsável pelo portal para reativar.
- Sair: encerra a sessão.
- Ir para o site: abre o site público.
