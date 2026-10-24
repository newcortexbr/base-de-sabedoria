# /painel/doacoes/[id] (Editar instituição)

Arquivo: `app/painel/doacoes/[id]/page.tsx` (9 linhas; o formulário é `EditorInstituicao.tsx`)

## o que você vê
Formulário para editar uma instituição. Título "Editar instituição", botão `← Voltar`; os campos já vêm preenchidos. Dividido em blocos: `Identificação` (`Nome da instituição *`, `Causa *` em lista com busca, `Resumo do card` até 160 letras), `Capa da página` (slide no topo com fotos e vídeos do YouTube, botão `+ Adicionar foto`, 1600×900 recomendado; `Foto de capa do card *` 1200×675 com ajuste de foco; `Logo` 400×400), `Texto` (`Frase de destaque` até 200 letras, `Descrição completa *`), `Endereço` (CEP, `Cidade *`, `Bairro`, `Endereço`), `Galeria` (fotos e vídeos, `+ Adicionar fotos`) e, ao lado, `Botões e contato`: `Link "Conheça a instituição"`, `WhatsApp`, `Instagram`, `Facebook`, `E-mail` (cada um só aparece no site se preenchido). Embaixo: `Cancelar` e `Salvar instituição`. Ao salvar, pergunta "Publicar no site agora?" (`Sim, publicar` / `Voltar e revisar`).

## rota e gate
- `/painel/doacoes/<id>`. client, renderiza `EditorInstituicao` (`app/painel/doacoes/EditorInstituicao.tsx`, 461 linhas) com o id da URL. só administrador; módulo `doacoes`.

## como chegar
- na lista de instituições, ícone de lápis da linha (menu Conteúdo > `Doações` > `Instituições`).

## o que faz
- atualiza a instituição. Não há aprovação nem rascunho: confirmado o aviso, vai direto para o site. Fotos e vídeos de slide/galeria já salvos são adicionados, ordenados e removidos na hora; novos sobem ao salvar.

## ações e campos
- obrigatórios: nome, causa, descrição completa, cidade e foto de capa do card. Mensagens: "Informe o nome da instituição.", "Escolha a causa.", "Escreva a descrição completa.", "Escolha a cidade.", "Escolha a foto de capa do card.".
- `Foto de capa do card`: "Clique para escolher a imagem", `Trocar`, `Remover`; seletor de foco recorta o card e a miniatura de compartilhamento.
- `Logo`: opcional, quadrado, PNG transparente recomendado.
- `WhatsApp` com máscara; telefone inválido bloqueia ("motivo" do telefone). `Instagram` aceita @usuário ou link; links são normalizados.
- CEP preenche cidade, bairro e endereço; a posição no mapa vem do endereço e da cidade.
- após salvar volta para `/painel/doacoes` com "Instituição salva".

## estados
- "Carregando..."; "Não foi possível carregar" (instituição, causas ou cidades); "Não foi possível salvar" com erros marcados nos campos ("Corrija os campos marcados."); "A instituição foi publicada, mas nem toda mídia subiu... Adicione de novo abaixo o que faltar."; botão "Salvando...".

## possíveis problemas
- lista de causas vazia: crie antes em `Causas`, senão não dá para salvar.
- lista de cidades vazia/erro: vem da configuração do Guia (`adminApi.guia.config`).
- falha parcial de mídia: a instituição já está publicada; reenvie as fotos que faltaram.
- não li `MidiaDaInstituicao.tsx` (216 linhas) em detalhe: ordem por setas e campo de vídeo do YouTube vêm do texto da tela.
