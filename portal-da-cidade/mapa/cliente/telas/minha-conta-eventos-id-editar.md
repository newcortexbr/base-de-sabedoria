# /minha-conta/eventos/[id]/editar

Arquivos: `eventos/[id]/editar/page.tsx`, `eventos/EventoForm.tsx`, `eventos/GaleriaDoEvento.tsx`

## quem acessa
- empresa dona do evento. Outros perfis: redirecionados. Evento de outro cliente: erro do servidor (404/403).

## gate de módulo/plano
- nenhum de tela. Estado do evento muda o que aparece: "aguardando_pagamento" mostra o bloco de pagamento; evento publicado pelo pacote mostra "Criado pelo seu pacote, sem nova cobrança." (`EventoForm.tsx:496,508`).

## o que faz
- edita um evento existente, gerencia a galeria e retoma o pagamento pendente.

## ações e campos
- os mesmos campos de `minha-conta-eventos-novo.md` sem o passo de escolher divulgação. O botão vira `Salvar alterações` e o link `Voltar` (no lugar de Cancelar). O título não muda depois que o evento foi publicado. A foto na galeria só é exigida na criação (`:339`, `!evento`).
- retomar pagamento (`:457-470`), trocar/remover capa (`cliente-api.ts:2640-2650`), fotos da galeria (`:2654-2670`).
- reprovado: "Corrigir e reenviar" da lista.

## APIs
- `GET/PATCH /{portal}/comercial/meus-eventos/{id}/` (`cliente-api.ts:2578,2624`), capa, fotos, categorias.
- após fechar o pagamento, relê o evento (`EventoForm.tsx:434-445`).

## estados de erro/vazio
- carga e salvar como no formulário de criação.
- "Não foi possível recuperar o link de pagamento automaticamente…" quando a fatura não vem (`:530`).

## possíveis problemas para leigo
- fato: edição de evento já aprovado pode devolvê-lo para análise (hipótese; não confirmado nesta tela, só Vagas tem o flag `edicao_reenvia_para_analise`).
- fato: sem botão de excluir o evento (também ausente na lista).
- fato: `Number(id)` sem validação (`page.tsx:9`).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-eventos-id-editar.png](../prints/minha-conta-eventos-id-editar.png) · versão celular: [minha-conta-eventos-id-editar-390.png](../prints/minha-conta-eventos-id-editar-390.png) · dados brutos: [json](../prints/json/minha-conta-eventos-id-editar.json)
- aberta em `/minha-conta/eventos/1/editar` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [link] "Voltar para Eventos" — conteúdo, no topo da página, à esquerda (288,32,148,44)
- [menu/links] "10 itens: Início · Guia Comercial · Agenda de Eventos · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 10 itens em coluna) (14,96,227,786)
- [título] "Editar evento" — conteúdo, na parte de cima, ao centro (382,98,161,39)
- [título] "1Sobre o evento" — conteúdo, na parte de cima, ao centro (307,280,598,28)
- [título] "Como vai aparecer" — menu lateral, na parte de cima, à direita (961,280,268,23)
- [campo] "Título do evento *" — conteúdo, na parte de cima, ao centro, logo abaixo de “1Sobre o evento” (345,368,560,44)
- [botão] "Salvar alterações" — menu lateral, no meio da tela, à direita (961,481,268,48)
- [campo] "Organizador" — conteúdo, no meio da tela, ao centro, logo abaixo de “Título do evento *” (631,488,274,44)
- [campo] "Categoria" — conteúdo, no meio da tela, ao centro (345,511,274,44)
- [link] "Voltar" — menu lateral, no meio da tela, à direita (961,539,268,44)
- [campo de texto longo] "Descrição (opcional)" — conteúdo, no meio da tela, ao centro, logo abaixo de “Categoria” (345,617,560,106)
- [campo] "Data *Pode remarcar até 25/11/2026." — conteúdo, no meio da tela, ao centro, logo abaixo de “Descrição (opcional)” (345,761,274,44)
- [campo] "Data de término (opcional)" — conteúdo, no meio da tela, ao centro, logo abaixo de “Descrição (opcional)” (631,784,274,44)
- [campo] "Horário (texto livre)" — conteúdo, no meio da tela, ao centro, logo abaixo de “Data *Pode remarcar até 25/11/2026.” (345,888,274,44)
- [campo] "00000-000" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Horário (texto livre)” (345,970,274,44)
- [campo] "Cidade" — conteúdo, mais abaixo (rolando a página), ao centro (631,970,274,44)
- [campo] "Local (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “00000-000” (345,1095,274,44)
- [campo] "Endereço (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Cidade” (631,1095,274,44)
- [título] "2Fotos, vídeo e ingressos" — conteúdo, mais abaixo (rolando a página), ao centro (307,1191,598,28)
- [botão] "Enviar foto de capa" — conteúdo, mais abaixo (rolando a página), ao centro (345,1572,182,42)
- [botão] "Foto" — conteúdo, mais abaixo (rolando a página), à esquerda, logo abaixo de “Enviar foto de capa” (345,1655,80,34)
- [botão] "Vídeo do YouTube" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Enviar foto de capa” (433,1655,171,34)
- [campo] "Link de vídeo do YouTube (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro (345,1993,560,44)
- [campo] "Preço (texto — ex.: “Entrada gratuita“)" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Link de vídeo do YouTube (opcional)” (345,2096,274,44)
- [campo] "Link de ingresso (opcional)" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Link de vídeo do YouTube (opcional)” (631,2096,274,44)
- [checkbox] "Mostrar telefone na página" — conteúdo, no fim da página, ao centro, logo abaixo de “Link de ingresso (opcional)” (631,2189,18,18)
- [campo] "WhatsApp para contato (opcional)" — conteúdo, no fim da página, ao centro, logo abaixo de “Preço (texto — ex.: "Entrada gratui” (345,2200,274,44)

## o que você vê
Formulário para mudar um evento que já existe, com galeria e pagamento pendente.
- Os mesmos campos da criação, sem a escolha de divulgação; a capa pode ser trocada ou removida. O botão é `Salvar alterações`. O título não muda depois de publicado.
- Galeria: adicionar ou tirar fotos.
- Aguardando pagamento: mostra o quadro para continuar o pagamento.
- "Criado pelo seu pacote, sem nova cobrança": o evento usou um pacote já pago.
- Reprovado: você chega aqui pelo botão "Corrigir e reenviar" da lista.
