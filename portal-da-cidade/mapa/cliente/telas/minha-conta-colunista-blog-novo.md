# /minha-conta/colunista-blog/novo

Arquivos: `colunista-blog/novo/page.tsx`, `colunista-blog/ArtigoForm.tsx`, `_completar/EtapaCompletarPerfil.tsx`

## quem acessa
- colunista e empresa com o módulo. Pessoa física e jornalista: redirecionados.

## gate de módulo/plano
- a rota inteira é condicionada a `temContratacao` (ativa, ou gratuito valendo): sem isso nem o formulário monta (`novo/page.tsx:1-25,66-70`).
- aguardando pagamento: `PainelAguardandoPagamento`; sem plano: `PainelSemPlano` (`:51-64`).
- segundo gate: `EtapaCompletarPerfil modulo="blog"`, com "Preencher depois" (pedido do dono, 2026-09-23). O perfil do colunista nasce junto do primeiro artigo, só com `nome` (comentário `:18-24`).

## o que faz
- escreve, publica ou agenda um artigo.

## ações e campos
- campos (`ArtigoForm.tsx:285-425`): `Título *`, `Subtítulo`, `Chamada` (resumo, até 500), `Texto do artigo *` (editor; para inserir imagens no texto é preciso preencher o título antes), `Categoria` ("Sem categoria"), `Agendar publicação (opcional)` (data/hora), bloco `Foto de capa` ("Arraste ou clique aqui") com `Legenda da foto` e `Créditos da foto`, bloco `Para os buscadores` com `Título SEO` e `Descrição SEO` (160).
- botão `Publicar` ou `Agendar` (muda conforme a data) e botão `Voltar` (`:434-455`); ao concluir abre a janela "Artigo publicado" ou "Artigo agendado". Não há "salvar rascunho": decisão do dono, comentário `:119`.

## APIs
- criação de artigo e upload de foto via `blog-cliente-api` (URLs não lidas).
- `GET comercial/minhas-secoes/` e `comercial/planos/?secao=blog` (hook).

## estados de erro/vazio
- arquivo grande: `mensagemArquivoGrande` (`:94`).
- sem portal: "Não foi possível identificar o portal da sua sessão." (`:139`).
- upload falhou depois de criar: mensagem pedindo para clicar de novo em "Publicar/Agendar" (`:189-191`).

## possíveis problemas para leigo
- fato: não há rascunho; o botão principal publica. Leigo pode publicar algo incompleto (decisão do dono).
- fato: campos "Título SEO" e "Descrição SEO" são termos técnicos (`:406,412`).
- fato: se o upload da foto falha depois do artigo ser criado, o texto pede "clique novamente"; novo clique SALVA o mesmo artigo (`:226-228`).
- hipótese: o limite semanal só é checado no servidor; a tela pode deixar escrever o texto todo e só recusar ao publicar.
- não lido: corpo do formulário (linhas 40-260, 280-330).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-colunista-blog-novo.png](../prints/minha-conta-colunista-blog-novo.png) · versão celular: [minha-conta-colunista-blog-novo-390.png](../prints/minha-conta-colunista-blog-novo-390.png) · dados brutos: [json](../prints/json/minha-conta-colunista-blog-novo.json)
- aberta em `/minha-conta/colunista-blog/novo`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Novo artigo" — topo, no topo da página, ao centro (432,16,100,28)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Escolha um plano" — conteúdo, na parte de cima, ao centro (419,126,698,23)

## o que você vê
Formulário para escrever e publicar (ou agendar) um artigo. Só abre com plano de Artigos ativo ou gratuito.
- Complete seu cadastro: pode aparecer antes; "Preencher depois" pula por agora.
- Título: obrigatório. Subtítulo e Chamada (resumo curto, até 500 letras): opcionais.
- Texto do artigo: o conteúdo, obrigatório.
- Categoria: o assunto do artigo.
- Agendar publicação: escolha data e hora para o artigo entrar no ar depois (opcional).
- Foto de capa, com legenda e créditos (quem fez a foto).
- Para os buscadores: Título SEO e Descrição SEO, como o artigo aparece no Google (opcional).
- Publicar / Agendar: o botão muda conforme a data escolhida. Não existe "salvar rascunho".
