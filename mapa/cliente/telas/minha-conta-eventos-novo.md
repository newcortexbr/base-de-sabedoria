# /minha-conta/eventos/novo

Arquivos: `eventos/novo/page.tsx`, `eventos/EventoForm.tsx`

## quem acessa
- empresa. Também é o destino de entrada do módulo (`destinoDeEntrada('eventos')`, `secoes-do-cliente.ts:344`). Outros perfis: redirecionados.

## gate de módulo/plano
- sem plano prévio: o plano é por evento, escolhido no próprio formulário (`EventoForm.tsx:4-12`). Se houver pacote com saldo, o botão vira "Publicar pelo pacote" (`:832`).
- sem etapa "Complete seu cadastro" (o organizador é do evento, `buscarMeuOrganizadorEvento`, `cliente-api.ts:2440`).

## o que faz
- cria o evento e já gera a cobrança. Fluxo: preenche, escolhe a divulgação, "Pagar e publicar", paga (Pix/cartão), entra na análise do dono do portal.

## ações e campos
- título*, data*, data fim, cidade/local, categoria, descrição, foto de capa* (obrigatória ao criar: `EventoForm.tsx:339`), galeria de fotos, escolha da divulgação (cartões com preço, "por mês" ou "pagamento único", "Até N eventos por pagamento") (`:773-774`).
- botões: "Pagar e publicar" ou "Publicar pelo pacote".

## APIs
- `GET /{portal}/comercial/meu-organizador-evento/`, `GET /{portal}/turismo/eventos/categorias/?incluir_vazias=true` (`cliente-api.ts:2684`).
- `POST /{portal}/comercial/meus-eventos/` (`:2607`), capa por `PATCH` (`:2640`), fotos `POST …/fotos/` (`:2660`).
- pagamento: `ModalPagamentoFatura`.

## estados de erro/vazio
- "Informe o título do evento.", "Informe a data do evento.", "Envie ao menos uma foto do evento." (`:335-339`); "Escolha como você quer divulgar o evento." (`:400`).
- capa falhou: "Os dados do evento foram salvos, mas a foto de capa não." (`:385`).
- falha de recuperar o link de pagamento: "Não foi possível recuperar o link de pagamento automaticamente…" (`:530`).

## possíveis problemas para leigo
- fato: o evento é criado antes do pagamento; se a pessoa fecha o pagamento, o evento fica "Aguardando pagamento" e só se retoma pela lista ("Continuar pagamento", `eventos/page.tsx:237`). A tela explica (`EventoForm.tsx:508-518`).
- fato: se a foto de capa falha o evento já está salvo e a pessoa precisa reenviar (risco de duplicidade se tentar criar de novo; o código se protege, `:162`).
- hipótese: termos "pacote", "divulgação" e "plano" para a mesma ideia de compra podem confundir.
- não lido: linhas 1-330 e 560-830 do formulário (campos adicionais e CSS).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-eventos-novo.png](../prints/minha-conta-eventos-novo.png) · versão celular: [minha-conta-eventos-novo-390.png](../prints/minha-conta-eventos-novo-390.png) · dados brutos: [json](../prints/json/minha-conta-eventos-novo.json)
- aberta em `/minha-conta/eventos/novo`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [link] "Voltar para Eventos" — conteúdo, no topo da página, à esquerda (288,32,148,44)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Novo evento" — conteúdo, na parte de cima, ao centro (382,98,410,39)
- [título] "1Sobre o evento" — conteúdo, na parte de cima, ao centro (307,215,598,28)
- [título] "Como vai aparecer" — menu lateral, na parte de cima, à direita (961,215,268,23)
- [campo] "Título do evento *" — conteúdo, na parte de cima, ao centro, logo abaixo de “1Sobre o evento” (345,304,560,44)
- [campo] "Organizador" — conteúdo, no meio da tela, ao centro, logo abaixo de “Título do evento *” (631,385,274,44)
- [campo] "Categoria" — conteúdo, no meio da tela, ao centro, logo abaixo de “Título do evento *” (345,409,274,44)
- [botão] "Pagar e publicar" — menu lateral, no meio da tela, à direita (961,417,268,48)
- [link] "Cancelar" — menu lateral, no meio da tela, à direita (961,475,268,44)
- [campo de texto longo] "Descrição (opcional)" — conteúdo, no meio da tela, ao centro, logo abaixo de “Categoria” (345,515,560,106)
- [campo] "Data *" — conteúdo, no meio da tela, ao centro, logo abaixo de “Descrição (opcional)” (345,658,274,44)
- [campo] "Data de término (opcional)" — conteúdo, no meio da tela, ao centro, logo abaixo de “Descrição (opcional)” (631,682,274,44)
- [campo] "Horário (texto livre)" — conteúdo, no meio da tela, ao centro, logo abaixo de “Data *” (345,786,274,44)
- [campo] "00000-000" — conteúdo, no meio da tela, ao centro, logo abaixo de “Horário (texto livre)” (345,867,274,44)
- [campo] "Cidade" — conteúdo, no meio da tela, ao centro (631,868,274,44)
- [campo] "Local (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “00000-000” (345,993,274,44)
- [campo] "Endereço (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Cidade” (631,993,274,44)
- [título] "2Fotos, vídeo e ingressos" — conteúdo, mais abaixo (rolando a página), ao centro (307,1089,598,28)
- [botão] "Enviar foto de capa" — conteúdo, mais abaixo (rolando a página), ao centro (345,1470,182,42)
- [botão] "Foto" — conteúdo, mais abaixo (rolando a página), à esquerda, logo abaixo de “Enviar foto de capa” (345,1572,80,34)
- [botão] "Vídeo do YouTube" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Enviar foto de capa” (433,1572,171,34)
- [campo] "Link de vídeo do YouTube (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro (345,1909,560,44)
- [campo] "Preço (texto — ex.: “Entrada gratuita“)" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Link de vídeo do YouTube (opcional)” (345,2013,274,44)
- [campo] "Link de ingresso (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Link de vídeo do YouTube (opcional)” (631,2013,274,44)
- [checkbox] "Mostrar telefone na página" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Link de ingresso (opcional)” (631,2105,18,18)
- [campo] "WhatsApp para contato (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Preço (texto — ex.: "Entrada gratui” (345,2116,274,44)
- [título] "3Como você quer divulgar?" — conteúdo, mais abaixo (rolando a página), ao centro (307,2212,598,28)
