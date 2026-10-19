# /minha-conta/classificados/novo

Arquivos: `classificados/novo/page.tsx`, `classificados/AnuncioForm.tsx`, `_completar/EtapaCompletarPerfil.tsx`

## quem acessa
- pessoa física e empresa. Colunista e jornalista: redirecionados.

## gate de módulo/plano
- sem gate de tela; limite vem do servidor (400). Antes do formulário pode aparecer "Complete seu cadastro" (`EtapaCompletarPerfil modulo="classificados"`), com "Preencher depois" (grava só na aba/sessão, `EtapaCompletarPerfil.tsx:21-26`).

## o que faz
- cria um anúncio com fotos.

## ações e campos
- título*, categoria e subcategoria (opcionais, catálogo com busca), descrição*, condição, preço (R$) ou "a combinar" (hipótese pela caixa de seleção em `:470`), duas caixas adicionais (`:486,490`, não lidas), fotos (*obrigatória ao criar), nome, WhatsApp e e-mail de contato, mais uma caixa em `:578` (não lida) (`AnuncioForm.tsx:398-578`).
- validação: título, descrição, ao menos 1 foto (`:308-312`).
- ao salvar, o status que volta do servidor decide se diz "no ar" ou "em análise" (mesmo padrão de Vagas).

## APIs
- `POST /painel/{portal}/classificados/` com fotos (`cliente-api.ts:2354`), `POST …/{id}/fotos/` (`:2399`).
- `GET …/classificados/categorias/` (`:2215`), `GET …/meu-anunciante/`.
- `revalidarListasDeClassificados`.

## estados de erro/vazio
- "Preencha os campos obrigatórios destacados abaixo."; erros por campo; erro de limite separado (padrão de `separarLimiteDoPlano`, hipótese por analogia com Vagas, não confirmado neste arquivo).

## possíveis problemas para leigo
- fato: foto é obrigatória só ao criar; na edição pode ficar sem foto e o anúncio some do site (`AnuncioForm.tsx:312`, `classificados/page.tsx:360`).
- hipótese: leigo enviando várias fotos grandes do celular pode ter falhas de upload; limites de tamanho vêm do servidor e não foram verificados.
- fato: dois blocos opcionais de contato (WhatsApp e e-mail) sem exigir pelo menos um meio de contato (validação `:308-312` não checa).
- não lido: linhas 280-380 e 580-fim do formulário (envio e modais).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-classificados-novo.png](../prints/minha-conta-classificados-novo.png) · versão celular: [minha-conta-classificados-novo-390.png](../prints/minha-conta-classificados-novo-390.png) · dados brutos: [json](../prints/json/minha-conta-classificados-novo.json)
- aberta em `/minha-conta/classificados/novo`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Novo anúncio" — topo, no topo da página, ao centro (480,16,119,28)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [campo] "Ex: Sofá de 3 lugares" — conteúdo, na parte de cima, ao centro (473,144,590,42)
- [campo] "Categoria" — conteúdo, na parte de cima, ao centro, logo abaixo de “Ex: Sofá de 3 lugares” (473,227,287,42)
- [campo] "Subcategoria" — conteúdo, na parte de cima, à direita, logo abaixo de “Ex: Sofá de 3 lugares” (776,227,287,42)
- [campo] "Cidade" — conteúdo, na parte de cima, ao centro, logo abaixo de “Categoria” (473,309,287,42)
- [campo] "Bairro" — conteúdo, na parte de cima, à direita, logo abaixo de “Subcategoria” (776,309,287,42)
- [campo de texto longo] "Descreva o item: estado de conservação, motivo da venda…" — conteúdo, no meio da tela, ao centro, logo abaixo de “Cidade” (473,393,590,122)
- [checkbox] "Preço a combinar" — conteúdo, no meio da tela, ao centro (473,640,13,13)
- [campo] "150,00" — conteúdo, no meio da tela, ao centro, logo abaixo de “Preço a combinar” (473,694,590,42)
- [checkbox] "Aceito negociar" — conteúdo, no meio da tela, ao centro, logo abaixo de “150,00” (473,751,13,13)
- [checkbox] "Aceito troca" — conteúdo, no meio da tela, ao centro, logo abaixo de “Aceito negociar” (473,779,13,13)
- [campo] "Seu nome" — conteúdo, mais abaixo (rolando a página), ao centro (473,1095,590,42)
- [campo] "(27) 99999-9999" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Seu nome” (473,1179,590,42)
- [campo] "voce@email.com" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “(27) 99999-9999” (473,1262,590,42)
- [checkbox] "Mostrar telefone no anúncio (além do botão de WhatsApp)" — conteúdo, no fim da página, ao centro, logo abaixo de “voce@email.com” (473,1324,13,13)
- [link] "Cancelar" — conteúdo, no fim da página, ao centro (792,1364,98,42)
- [botão] "Publicar anúncio" — conteúdo, no fim da página, à direita, logo abaixo de “voce@email.com” (902,1364,161,42)
