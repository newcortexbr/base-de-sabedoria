# /painel/sugestoes (Sugestões de Funções)

Arquivo: `app/painel/sugestoes/page.tsx`

## rota e gate
- `/painel/sugestoes`. client, com `Header titulo="Sugestões de Funções"`.
- gate: `PainelGuard` + checagem local `user?.tipo === 'admin'` (`:82,257`). quem não é `admin` (por exemplo `master`) vê "Esta área é do administrador do portal."

## o que faz
- o admin envia ideias de função nova à equipe da plataforma e vê as que já enviou.

## campos e ações
- Título (máx. 120), Descrição (máx. 5000), anexos (fotos, documentos, vídeo; tipos por extensão em `EXTENSOES`, limites vindos do servidor: nº de arquivos, MB por foto/doc, MB por vídeo, MB total, `:140-175`), Nome, E-mail (somente leitura, vem do servidor), WhatsApp (máscara, validação `motivoTelefoneInvalido`).
- botão enviar; modal "Enviando sua sugestão" e "Sugestão enviada. Obrigado!".
- lista "Suas sugestões enviadas" (título, data, nº de anexos).

## apis
- `adminApi.sugestoes.obter` (GET `/painel/<slug>/sugestoes/`) e `adminApi.sugestoes.enviar` (POST multipart) (`lib/admin-api.ts:773-783`).

## estados
- carregando; erro de carga com botão "Tentar de novo"; vazio "Você ainda não enviou nenhuma sugestão."; erro por campo (`parseFieldErrors`); 429 "Você enviou muitas sugestões em pouco tempo."; erros de anexos listados por linha.

## possíveis problemas
- fato: `enviar` manda `nome` e `whatsapp` do formulário, mas o e-mail não vai no corpo (`:207-214`); o servidor usa o do usuário (hipótese: o `e-mail` mostrado como "vai junto" vem do servidor).
- fato: `recarregarLista` engole erro (`:106-108`); depois de enviar, a lista pode não atualizar sem aviso.
- fato: validação de tipo é só por extensão do nome (`tipoDoArquivo`, `:33-38`); o servidor deve revalidar (não verifiquei).
- fato: `master` não consegue usar a tela (checagem `=== 'admin'`), mesmo sendo papel aceito no painel (`lib/painel-permissoes.ts:31`).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-sugestoes.png](../prints/painel-sugestoes.png) · dados brutos: [json](../prints/json/painel-sugestoes.json)
- aberta em `/painel/sugestoes`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Sugestões de Funções" — topo, no topo da página, à esquerda (300,19,196,28)
- [título] "Envie uma sugestão para o portal" — conteúdo, na parte de cima, ao centro (473,128,487,26)
- [campo] "Título" — conteúdo, na parte de cima, ao centro, logo abaixo de “Envie uma sugestão para o portal” (417,223,722,44)
- [campo de texto longo] "Descrição" — conteúdo, na parte de cima, ao centro (417,361,722,148)
- [botão] "Clique para escolher ou arraste os arquivos para cáFotos, vídeos e doc" — conteúdo, no meio da tela, ao centro, logo abaixo de “Descrição” (417,584,722,80)
- [campo] "Nome" — conteúdo, no meio da tela, ao centro (434,774,337,44)
- [campo] "E-mail" — conteúdo, no meio da tela, à direita (785,774,337,44)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [campo] "WhatsApp" — conteúdo, no meio da tela, ao centro, logo abaixo de “Nome” (434,858,320,44)
- [botão] "Enviar sugestão" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “WhatsApp” (417,939,152,44)
- [título] "Suas sugestões enviadas" — conteúdo, mais abaixo (rolando a página), ao centro (417,1053,722,26)
