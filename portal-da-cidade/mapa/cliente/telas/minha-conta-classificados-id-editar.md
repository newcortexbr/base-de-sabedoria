# /minha-conta/classificados/[id]/editar

Arquivos: `classificados/[id]/editar/page.tsx`, `classificados/AnuncioForm.tsx`

## quem acessa
- dono do anúncio: pessoa física ou empresa. Outros perfis redirecionados.

## gate de módulo/plano
- nenhum de tela. Sem etapa de completar cadastro.

## o que faz
- edita anúncio e fotos. Reprovado: "Corrigir e reenviar" da lista vem para cá (`classificados/page.tsx:324`).

## ações e campos
- os mesmos de `minha-conta-classificados-novo.md`; título "Editar anúncio" (`AnuncioForm.tsx:380`); o botão de enviar vira `Salvar alterações` (ao lado de `Cancelar`) e a janela final diz "Seu anúncio foi salvo com sucesso."; foto não é obrigatória em edição (`:312`).
- apagar foto: `DELETE …/classificados/{id}/fotos/{fotoId}/` (`cliente-api.ts:2414`).

## APIs
- `GET/PATCH /painel/{portal}/classificados/{id}/` (`cliente-api.ts:2344,2381`), fotos, categorias.

## estados de erro/vazio
- carga e salvar: como no formulário de criação (404 e 403 tratados no padrão do módulo; não confirmado linha a linha).

## possíveis problemas para leigo
- fato: remover a última foto não é bloqueado na validação do formulário (`AnuncioForm.tsx:312` só exige foto na criação); o anúncio passa a "oculto por falta de foto".
- fato: `Number(id)` sem validação (`page.tsx`, 10 linhas, padrão idêntico ao das vagas).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-classificados-id-editar.png](../prints/minha-conta-classificados-id-editar.png) · versão celular: [minha-conta-classificados-id-editar-390.png](../prints/minha-conta-classificados-id-editar-390.png) · dados brutos: [json](../prints/json/minha-conta-classificados-id-editar.json)
- aberta em `/minha-conta/classificados/2/editar` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Editar anúncio" — topo, no topo da página, ao centro (480,16,125,28)
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
- [botão] "Apagar foto" — conteúdo, no meio da tela, ao centro (586,870,22,22)
- [campo] "Seu nome" — conteúdo, mais abaixo (rolando a página), ao centro (473,1095,590,42)
- [campo] "(27) 99999-9999" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Seu nome” (473,1179,590,42)
- [campo] "voce@email.com" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “(27) 99999-9999” (473,1262,590,42)
- [checkbox] "Mostrar telefone no anúncio (além do botão de WhatsApp)" — conteúdo, no fim da página, ao centro, logo abaixo de “voce@email.com” (473,1324,13,13)
- [link] "Cancelar" — conteúdo, no fim da página, ao centro (790,1364,98,42)
- [botão] "Salvar alterações" — conteúdo, no fim da página, à direita, logo abaixo de “voce@email.com” (900,1364,163,42)

## o que você vê
Formulário para mudar um anúncio de classificados que já existe, inclusive as fotos.
- Editar anúncio: os mesmos campos da criação (título, descrição, categoria, preço, contatos).
- Fotos: dá para apagar (`Apagar foto`) ou adicionar (`Adicionar`); na edição a foto não é obrigatória, mas sem foto o anúncio não aparece no site.
- Salvar alterações: grava e volta para a lista.
- Se o anúncio foi reprovado, você chega aqui pelo botão "Corrigir e reenviar" da lista.
