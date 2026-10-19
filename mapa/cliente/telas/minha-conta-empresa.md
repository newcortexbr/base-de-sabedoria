# /minha-conta/empresa (redirecionamento)

Arquivo: `src/app/minha-conta/empresa/page.tsx`

## quem acessa
- qualquer um com sessão que abra o endereço antigo. A guarda de perfil roda antes: colunista, pessoa física e jornalista são mandados à rota inicial deles (`ClienteShellClient.tsx:41-45`) e nunca chegam a este redirect.

## gate de módulo/plano
- nenhum.

## o que faz
- rota antiga. Faz `router.replace('/minha-conta/minha-empresa')` (`page.tsx:18-20`). Antes (até 2026-09-23) caía em `/minha-conta/guia`; mudou porque cliente sem Guia caía em beco (comentário `page.tsx:6-12`).

## ações e campos
- nenhum. Mostra "Redirecionando…".

## APIs
- nenhuma.

## estados de erro/vazio
- não há. Se o JavaScript falhar, o usuário fica em "Redirecionando…".

## possíveis problemas para leigo
- fato: redirecionamento só no cliente (`useEffect`), sem 308 do servidor; sem JS fica parado em "Redirecionando…". Hipótese de baixo impacto.
- fato: link salvo antigo para a ficha do Guia agora leva a "Minha empresa", outra tela (decisão do dono, documentada no arquivo).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-empresa.png](../prints/minha-conta-empresa.png) · versão celular: [minha-conta-empresa-390.png](../prints/minha-conta-empresa-390.png) · dados brutos: [json](../prints/json/minha-conta-empresa.json)
- aberta em `/minha-conta/empresa` (redirecionou para `/minha-conta/minha-empresa`); coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Minha empresa" — conteúdo, no topo da página, ao centro (382,46,295,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Identidade" — conteúdo, na parte de cima, ao centro (362,165,549,23)
- [título] "Onde isso aparece" — menu lateral, na parte de cima, à direita (1022,175,207,23)
- [campo de texto longo] "Descrição da empresa" — conteúdo, na parte de cima, ao centro (307,326,604,96)
- [título] "Contatos" — conteúdo, no meio da tela, ao centro (362,496,549,23)
- [campo] "WhatsApp" — conteúdo, no meio da tela, ao centro, logo abaixo de “Contatos” (307,578,295,46)
- [campo] "E-mail de contato" — conteúdo, no meio da tela, ao centro, logo abaixo de “Contatos” (616,578,295,46)
- [campo] "Site" — conteúdo, no meio da tela, ao centro, logo abaixo de “WhatsApp” (307,662,604,46)
- [botão] "Salvar" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Site” (288,741,92,48)
