# planos e seções (mapa do que existe no código)

Fonte: leitura de `portal-cidade/` (só código, nada executado). Caminhos relativos a `portal-cidade/`.

## onde mora o catálogo

- Catálogo canônico de seções vendáveis: `backend/comercial/catalogo.py:46` (`SECOES`). São 7 seções: noticias, vagas, classificados, guia, eventos, blog, publicidade.
- Cada seção tem `tipo`: `plano` (pacote de benefícios) ou `banner` (itens avulsos). Só publicidade é `banner` (`catalogo.py:728`).
- Módulos ligáveis por portal (outra coisa, não é "seção vendável"): `backend/portais/modulos.py:14`. São 10: noticias, guia, vagas, classificados, turismo, eventos, orcamentos, blog, cupons, utilidade.
- Seção só aparece à venda se o módulo dela está ligado no portal: `catalogo.py:1472` (`secoes_disponiveis_para_portal`). Publicidade tem `modulo=None` (`catalogo.py:727`) e filtra por item.
- Modelo do plano (linha editável pelo dono do portal): `backend/comercial/models.py:28` (`PlanoComercial`). Contratação (venda com cópia/snapshot do plano): `models.py:489`. Fatura: `models.py:713`.
- Provisionamento: cada plano fixo do catálogo vira uma linha por portal com `preco=0` e `ativo=False` (só o "padrão" nasce ativo). Ver `backend/comercial/provisionamento.py:45`. Ou seja, o dono precisa definir preço e ativar.

## nomes que confundem (app ≠ módulo)

- App `classificados` guarda VAGAS. App `anuncios` guarda CLASSIFICADOS. App `blog` é ARTIGOS (`portais/modulos.py:2-8`, `:73-75`).
- App `delivery` responde pelo módulo `guia` (não é módulo nem seção vendida) — `modulos.py:72`.
- Cupons e Orçamentos são módulos, mas não têm seção de venda: são benefícios do plano do Guia (`catalogo.py:448-449`, benefícios `orcamentos` e `cupom`).
- Turismo é módulo, mas não tem seção/plano. A única coisa vendida em torno dele são banners `pub_turismo_*`, que não têm venda direta (`catalogo.py:943-977`, `ITENS_SEM_VENDA_DIRETA`).
- Eventos mora no app `turismo`, mas é módulo e seção separados (`modulos.py:112-125`).

## planos por seção (valores de preço são do dono; aqui só a estrutura)

- Guia Comercial (`catalogo.py:419`): 3 planos fixos. `gratis` (não contratável, é o padrão/piso, `catalogo.py:501`), `plano_a` e `plano_b` (mensais, contratáveis). Benefícios: galeria, WhatsApp, redes/site, links externos, sem concorrente, destaque na listagem, orçamentos, cupom, telefone, páginas personalizadas.
- Vagas (`catalogo.py:87`): `gratis` (1 ativa, 30 dias, não contratável), `pagamento_unico` (5 usos no total, 90 dias, `duracao_tipo='unico'`) e `assinatura_mensal` (sem limite de ativas, 90 dias por vaga).
- Classificados (`catalogo.py:292`): `gratis` (3 ativos, 3 fotos, 30 dias, não contratável), `assinatura_mensal` (10 ativos, 10 fotos, 180 dias), `assinatura_mensal_50` (50 ativos, 10 fotos).
- Artigos (`catalogo.py:684`, chave `blog`): um plano só, `unico`, mensal, 1 artigo por semana. Dono só define preço. Na área do cliente o rótulo "grátis" também aparece para colunista sem contratação (ver `secoes-do-cliente.ts`).
- Notícias (`catalogo.py:48`): um plano `unico`, pagamento único. É a "matéria patrocinada": cada pagamento dá direito a uma matéria; quem publica é a equipe do portal à mão (`catalogo.py:57-72`, D-387).
- Agenda de Eventos (`catalogo.py:564`): `divulgacao_simples` (1 evento, único), `divulgacao_com_destaque` (1 evento, único, com destaques), `pacote_5_eventos` (mensal, 5 eventos por pagamento).
- Publicidade (`catalogo.py:725`): sem plano de seção. Cada item é uma posição de banner (home topo, cabeçalho, outdoor, notícias, guia, vagas, classificados, turismo topo, eventos, orçamento, blog, laterais, cupons). Cliente compra por posição e arte; posição vira `BannerPublicitario` via `POSICAO_DO_ITEM` (`catalogo.py:919`). Itens de categoria/ponto/roteiro ficam fora da venda direta (`catalogo.py:943`).
- Parceiros (programa de indicação): não é seção do catálogo. Tem modelo próprio `PlanoParceiro` com 3 linhas por portal: `plano_1` (gratuito), `plano_2`, `plano_3` (`backend/parceiros/models.py:30-38,43`; `parceiros/provisionamento.py`). A cobrança passa pelo motor comercial com `secao_chave='parceiros'` (`catalogo.py:881`; `parceiros/assinatura.py`).

## tipos de seção quanto à venda

- Assinatura da seção (troca de plano encerra o anterior): guia, vagas, classificados, blog.
- Vendidas por item (várias contratações convivem, uma por item): eventos, publicidade, noticias — `catalogo.py:1393`.
- Pagamento único (`duracao_tipo='unico'`, sem próximo ciclo, `data_fim` nulo, fim por consumo de `usos`): Vagas pagamento_unico, Notícias, Eventos simples/destaque. Status final `esgotada` (`models.py:509-516`).
- Variantes de periodicidade: o dono pode duplicar plano fixo de seção com 2+ planos fixos em mês/semestre/ano (e único em vagas, notícias, eventos, classificados) — `catalogo.py:1324-1370`.

## como os limites do plano são lidos

- Benefícios (o que a empresa pode usar): `backend/comercial/direitos.py` (`beneficios_da_empresa` etc.). Usado no Guia (`guia/views_public.py`, `guia/views_admin.py`, `guia/cupom.py`).
- Limites numéricos (ativos, fotos, prazo, janela): `backend/comercial/limites.py` (`limite_ativas_do_cliente`, `prazo_dias_do_cliente`, `limite_fotos_do_cliente`, `consumir_uso`). Usado em classificados (`anuncios/moderacao.py:62-81`, `anuncios/views_admin.py:153`).
- Sem contratação válida: vale o plano padrão (Guia) ou o piso (`gratis` de vagas/classificados; plano único de artigos). Ver `catalogo.py:1235` (`nivel_gratuito_da_secao`) e `:1273` (`piso_plano_fixo_da_secao`).
- Visibilidade no site (aparecer ou não): `direitos.py:564-669` (`secao_libera_todos`, `filtro_visibilidade`, `pode_aparecer`). Regra do dono (2026-09-23): quem está no gratuito de uma seção aparece no site dessa seção (`catalogo.py:1257-1262`).

## frontend: área do cliente

- Mapa único do que a área do cliente sabe de cada seção: `frontend/src/app/minha-conta/secoes-do-cliente.ts`.
- Seções com tela de gestão (`:35`): guia, blog, vagas, classificados, eventos, publicidade, noticias. Rotas: `/minha-conta/<chave>`, exceto blog → `colunista-blog` e noticias → `materia-patrocinada` (`:42-45`).
- Módulos de empresa (`:226`): guia, eventos, vagas, publicidade. "Início" oferece esses mais classificados (`:233`). Artigos não é oferecido dentro da conta de empresa (`:250`, só a quem já tem).
- Vendidos por item no front (`:243`): eventos, publicidade, noticias — sem vitrine de plano comparável.
- Destino do menu: vitrine `/minha-conta/planos/<chave>` só quando a seção é paga do começo ao fim; senão abre a tela do módulo (`destinoDoMenu`, `:326`). Entrada de quem ainda não tem: guia/vagas vão à vitrine com `?entrada=1`; eventos e publicidade vão ao formulário do item (`:337`).
- Acesso com plano gratuito (`acessoDaSecao`, `:140`): sem contratação ativa e com gratuito na seção, a área funciona; só pendente de plano pago segura em "aguardando pagamento".
- Vitrine de planos: `frontend/src/app/minha-conta/_planos/` (`VitrineDePlanos.tsx`, `vitrine.ts`, `ModalDoGratis.tsx`, `PreviaDoPlano.tsx`). Lista de seções: `minha-conta/planos/page.tsx`. Detalhe e ações (assinar, subir, descer, voltar ao grátis, desistir): `minha-conta/planos/[secao]/page.tsx`. `minha-conta/guia/plano/page.tsx` só redireciona.
- Não existe pasta `src/app/planos/`. Páginas públicas de venda ficam em `src/app/anuncie/` (guia, vagas, classificados, colunista, eventos, noticias, publicidade, cadastro). Parceiro: `src/app/seja-parceiro/` e `src/app/parceiro/`.

## API usada pelo cliente (rotas em `comercial/urls_contratacao.py` e `urls_publicas.py`)

- Seções/hub: `comercial/minhas-secoes/` (`views_public.py:363`). Planos da seção: `comercial/planos/?secao=` (`:515`). Planos públicos para visitante: `comercial/planos-publicos/` (`:577`).
- Contratar/cancelar/desistir: `comercial/contratar/`, `cancelar/`, `desistir/` (`urls_contratacao.py:10-12`).
- Publicidade: `comercial/publicidade/posicoes/`, `publicidade/contratar/`, `meus-banners/` (`urls_contratacao.py:100-104`).
- Eventos: `comercial/meus-eventos/...`, `meu-organizador-evento/` (`urls_contratacao.py:86-90`).
- Matérias patrocinadas: `comercial/minhas-materias/` (`urls_publicas.py`, `views_materias.py:28`), compra pelo mesmo `contratar/`.
