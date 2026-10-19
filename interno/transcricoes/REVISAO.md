# revisão dos artigos pelas transcrições — 2026-10-19

material interno, não carregar no chat. fonte: legendas automáticas (`*.pt-orig.srt`) usadas só para conferência; nomes de botões e campos foram confirmados no código de `portal-cidade/frontend/src` (o código vence a legenda). nada foi validado no navegador.

## artigos alterados

- `admin/comercial/conectar-asaas-e-entender-cobranca.md` — novos passos 6–8 (nome da chave, deixar desmarcados os saques pela API + `Avançar`, código por SMS); os seguintes foram renumerados e o "pule para o passo" passou a apontar para 12. embasamento: `lwaG-T87hJI` 01:03–01:33.
- `admin/editorial/noticias.md` — "preencha os campos e clique em Salvar" virou 5 passos (títulos e conteúdo, `Categorização`, `Foto de Capa`, `Publicação`/`Destaque na janela principal`, `Adicionar`). correção: notícia nova salva por `Adicionar`, não `Salvar` (`NoticiaFormBase.tsx:597`). vídeo `gAa2NdnitZU` 00:30–01:32.
- `admin/portal/aprovacoes-e-denuncias.md` — passos 7–9: `Ver página denunciada`, `Ignorar denúncia` / `Excluir item` / `Bloquear empresa/conta`, confirmação (`app/painel/denuncias/[id]/page.tsx:75,129-151`). vídeo `JYDoZB_vyX8` 01:01–01:32.
- `admin/editorial/noticias-automaticas-fontes-rss.md` — novo passo 6: `Publicar direto no site` (ligado = vai ao ar sozinho; desligado = rascunho) (`FonteRssForm.tsx:379`). vídeo `r5rFCgAV0mg` 01:01–01:32.
- `admin/editorial/turismo-pontos.md` — "preencha os campos" virou 5 passos (foto principal, nome/categoria/descrição, CEP, horários, `Cadastrar ponto`). vídeo `QrkL_nJEa-c` 00:00–01:02.
- `admin/editorial/turismo-roteiros-dicas.md` — formulário em 3 passos (capa e dados, `Adicionar parada` com setas de ordem, galeria). vídeo `CMEOWthwqtI` 00:00–00:31.
- `admin/comercial/gerenciar-categorias-do-guia.md` — passos 4–8: criar/editar, nome/ícone/cor/ativa, opção de orçamento, `O que as empresas desta categoria oferecem` (`Cardápio`, `Delivery`, `Quartos`), salvar. vídeo `09n3Eiwn418` 00:32–01:33.
- `admin/comercial/importar-empresas-no-guia.md` — vídeo `F136_v1JyRY` (visão geral do extrator) incluído como 3º, o menos específico.
- `admin/comercial/ativar-modulos-e-programa-de-parceiros.md` — vídeo `8gIDPdapN0E` retirado: ele mostra a tela `Parceiros` e não a de módulos. foi para o artigo novo de parceiros.
- vídeos promocionais (LP) que estavam em artigos de visitante com outra tarefa foram movidos:
  - `D21vBBhzlhg` (divulgar vaga): `usuario/localizar-e-candidatar-se-a-vaga.md` → `cliente/gerenciar-vagas-da-empresa.md`
  - `zHOxx6KFIrk` (anunciar em classificados): `usuario/buscar-anuncios-classificados.md` → `cliente/gerenciar-anuncios-proprios.md` (1º, antes de `4pc8AwOX0hA`)
  - `d2EweodukHg` (cadastrar empresa no Guia): `usuario/encontrar-empresa-no-guia.md` → `usuario/acesso/criar-conta-empresa.md`
- frontmatter: em 15 artigos, o `titulo` com `: ` ganhou aspas; sem isso o YAML não era válido (11 artigos já vinham assim).

conferidos sem mudança de passos (transcrição bate com o artigo ou só acrescenta coisas que não são passos): eventos, artigos, A Voz do Povo (admin), notificações push, Assistente de IA, cupons, vagas e classificados, orçamentos (admin), Financeiro, Meus Clientes, banners, empresas do Guia, identidade/layout, planos.

## artigos criados (todos `revisado_em: 2026-10-19`)

- `admin/comercial/gerenciar-cardapio-digital.md` — `VV8BxCbIfz4` (00:00–02:34).
- `admin/comercial/gerenciar-cardapio-do-delivery.md` — `2ShbACG2mHE` (00:00–01:36), 2º `TgIUmqrRuBY`.
- `admin/comercial/operar-delivery-pedidos-e-configuracoes.md` — `TgIUmqrRuBY` (00:00–02:03), 2º `2ShbACG2mHE`.
- `admin/comercial/gerenciar-servicos-da-empresa.md` — `aE3QL3ErK0k` (00:00–01:30).
- `admin/comercial/gerenciar-equipe-da-empresa.md` — `okWcwnwq5Bk` (00:00–01:00).
- `admin/comercial/gerenciar-catalogo-de-produtos.md` — `Z45xwGT8U38` (00:00–02:02).
- `admin/comercial/gerenciar-quartos-e-suites.md` — `reZ3e1a4o-o` (00:00–02:01).
- `admin/comercial/gerenciar-parceiros.md` — `8gIDPdapN0E` (00:00–02:35).
- `admin/portal/sorteios.md` — `uN4FHHHGgEs` (00:00–03:33), 2º `REgRSXekqpA`.
- `usuario/enviar-denuncia-voz-do-povo.md` — `G1B9mAWbCk4` (00:00–00:31); passos detalhados também em `1a0wZmdXDLk` 00:00–00:31.
- `usuario/pedir-orcamento.md` — `VmEwdNZd7pw` (00:00–01:00); etapas detalhadas em `Ru3949-VUX4` 00:00–01:30.
- `usuario/participar-de-sorteio.md` — `REgRSXekqpA` (00:00–00:32); detalhes em `uN4FHHHGgEs` 02:20–02:55.

caminhos da tela: os cartões de `Conteúdo da ficha` e o botão `Gerenciar` foram confirmados em `components/painel/EmpresaEditor.tsx:933-946,1655-1686`.

## vídeos que ficaram sem artigo

promocionais, sem passo a passo, e sem artigo do mesmo assunto para o público certo:

- `TWKsO_iuxGE` (divulgar evento) — não há artigo de cliente para eventos.
- `DFVw9nSAZAQ` (tornar-se parceiro) — o único artigo próximo (`cliente/acesso/entrar-recuperar-parceiro.md`) é de login de quem já é parceiro.
- `-Islw_h8OhU` (matéria patrocinada) — não há artigo de cliente.
- `NELLwm_ClmA` (seja colunista) — não há artigo de cliente.
- `bDAKcYvx4wo` (banners para anunciante) — não há artigo de cliente para contratar banner.

Dados PJ (`JXWDV_IiAWQ`, `IKdKLgi-e94`) seguem fora do catálogo e sem vínculo.

## dúvidas para humano

- Pix manual em `Cobrança` (`lwaG-T87hJI` 02:35–03:35: autenticador, códigos de reserva, `Trocar chave`, `Salvar WhatsApp`): `Já guardei`, `Trocar chave` e `Salvar WhatsApp` existem no código, mas "cadastrar com autenticador" não foi achado. não entrou no artigo. vale fazer um artigo próprio?
- jornalistas (`gAa2NdnitZU` 01:32–02:35) e contratantes/áreas de vagas (`ufB3QTKfPsM`) não têm artigo; o vídeo mostra, mas ficou fora desta revisão.
- delivery: os rótulos do som de aviso, do botão atualizar e do passo "saiu para entrega" não foram confirmados no código; ficaram descritos em texto comum, sem marcar como nome de botão.
- cardápio digital: o vídeo fala em "adicionar prato"; no código aparece `Novo prato`. o artigo usa o nome do código.
- os vídeos LP movidos para artigos de cliente são propaganda, não tutorial. confirmar se devem ser oferecidos pelo chat.
- `cliente/acesso/trocar-senha-cliente.md` existe, mas não está no índice do `README.md` (já era assim antes desta revisão).
