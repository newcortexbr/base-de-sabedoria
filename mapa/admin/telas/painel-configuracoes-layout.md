# /painel/configuracoes/layout (índice do Layout)

Arquivos: `app/painel/configuracoes/layout/page.tsx` (135 linhas), `actions.ts`, `PreviaDoSite.tsx`, `cores-utils.ts`

## rota e gate
- `/painel/configuracoes/layout`. Server Component (sem `'use client'`), só `metadata` "Layout — Configurações". gate `PainelGuard` do layout do painel (admin/master); sem gate de módulo. menu: "Layout" (`components/painel/Sidebar.tsx:248`).

## o que faz
- menu de entrada com quatro cartões que levam às telas de aparência. não lê nem grava nada.
- trilha "Configurações › Layout" com link para `/painel/configuracoes`.
- cartões: Topo ("modelo do cabeçalho, cores das barras e links") → `/layout/topo`; Tela Início ("monte os blocos da página inicial com drag & drop") → `/layout/inicio`; Cores ("cor primária e de destaque") → `/layout/cores`; Rodapé ("cores, tamanho da logo e textos") → `/layout/rodape`.

## apis
- nenhuma. o arquivo compartilhado `actions.ts` exporta a Server Action `revalidarLayout(token)` (`:33`): confere o token em `GET <API_URL>/auth/me/` e, se ok, `revalidatePath('/', 'layout')` e `revalidatePath('/')`. usada por Cores, Topo, Rodapé, Início, Módulos e Configurações gerais.

## estados
- não há erro nem vazio nesta tela (só links).

## possíveis problemas
- fato: `autenticado` em `actions.ts:17-26` só verifica que `/auth/me/` responde ok; não verifica o papel do usuário. qualquer token válido (por exemplo de um cliente ou parceiro do mesmo portal) conseguiria disparar a revalidação do site inteiro (hipótese de impacto: baixo, só invalida cache, mas é um ponto de abuso por custo; não verifiquei se há outro controle antes de chegar na action).
- fato: `autenticado` não tem prazo (timeout) no `fetch`; se o backend travar, a action pendura (`:19`).
- fato: `API_URL` vem de `NEXT_PUBLIC_API_URL`; se faltar em runtime, `revalidarLayout` retorna `false` sem erro e as telas, que usam `.catch(console.error)`, não avisam o dono de que o site não atualizou (hipótese).
- fato: a descrição dos cartões usa "drag & drop" em inglês; o público é leigo.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-configuracoes-layout.png](../prints/painel-configuracoes-layout.png) · dados brutos: [json](../prints/json/painel-configuracoes-layout.json)
- aberta em `/painel/configuracoes/layout`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,949)
- [link] "Configurações" — conteúdo, no topo da página, ao centro (586,36,91,20)
- [título] "Layout" — conteúdo, no topo da página, ao centro (586,84,385,36)
- [link] "TopoModelo do cabeçalho, cores das barras e links (e outros 3 parecidos)" — conteúdo, na parte de cima, ao centro (repetido ×4, um sob o outro) (586,179,385,82)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
