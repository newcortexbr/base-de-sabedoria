# coleta da base de suporte: administração editorial

## finalidade e limites

Coleta documental para futura reorganização da base por `usuario`, `cliente` e `admin`. Os artigos ficam sob `admin/editorial/` nesta entrega; o organizador/root poderá movê-los depois. O código em `portal-cidade/` foi tratado como fonte somente leitura. Não foram executados app, testes, builds, git, web ou operações de produção. Não foi feita validação visual.

Todos os artigos estão marcados `status: rascunho-documental`, `revisado_em: 2026-10-15` e `validacao: docs-e-codigo`. Os campos de roteamento `categoria`, `aba` e `tipo_problema` são metadados sugestivos para triagem futura; classificação nunca concede permissão nem autoriza IA a agir. Nenhuma hipótese sobre modelos por tier foi tratada como recurso do produto.

## inventário de artigos

- `admin/editorial/noticias.md` — Notícias: listagem, cadastro, filtros e estados; fonte principal na tela do painel e decisões de produto.
- `admin/editorial/artigos.md` — Artigos (`blog` internamente), estados, colunista da casa e colunista pagante; fonte em telas e código de criação.
- `admin/editorial/eventos.md` — Agenda de Eventos, estados de vigência, galeria após criação; módulo separado de Turismo.
- `admin/editorial/turismo-pontos.md` — pontos turísticos, busca, categoria e ações da listagem.
- `admin/editorial/turismo-roteiros-dicas.md` — roteiros, fotos e dicas de Turismo.
- `admin/editorial/categorias-editoriais.md` — catálogos separados para Notícias, Artigos, Turismo; distinção da regra de categoria inativa do Guia.
- `admin/editorial/midia-editorial.md` — campos e galerias associados ao registro; sem alegar biblioteca global.
- `admin/editorial/publicacao-e-visibilidade.md` — comparação entre status, vigência, destaque e módulo desligado.

Cobertura: oito artigos (dentro da faixa de 6–10 solicitada). Escopo inclui Notícias, Artigos/Blog, Agenda de Eventos, Turismo (pontos, roteiros, dicas), categorias, mídia e publicação/visibilidade. Não cobre finanças, configurações do portal ou login como procedimento; menciona apenas os papéis/portas necessários ao contexto editorial.

## evidências e divergências relevantes

- `docs/PRODUCT.md:25` e `docs/DECISIONS.md:251` indicam que jornalista e colunista usam a área do cliente, não o painel. Permissões efetivas são do backend; nenhuma instrução presume acesso por menu.
- `docs/PRODUCT.md:40-42` descreve Notícias, Turismo e Agenda de Eventos; decisões em `docs/PRODUCT.md:193` registram Eventos como módulo separado embora compartilhe app Django.
- A tela de Notícias distingue publicação agendada no futuro (`frontend/src/app/painel/noticias/page.tsx:12`). A tela de Artigos define quatro estados (`frontend/src/app/painel/blog/page.tsx:27`). Eventos separam status derivado da data e status inativo escolhido (`frontend/src/app/painel/turismo/eventos/page.tsx:41`).
- `docs/DECISIONS.md:56-68` registra comentários removidos e busca global sem notícias. `docs/DECISIONS.md:78-82` confirma remoção de `ver_apenas_logado`; portanto não foram documentados como opções atuais.
- `frontend/src/app/painel/blog/novo/page.tsx:16-39` registra a regra de criação de artigo: colunista da casa pode publicar diretamente; colunista pagante gera rascunho pelo painel.
- `frontend/src/app/painel/noticias/categorias/page.tsx:21-34` fornece aviso neutro sobre notícia sem categoria; decisões `docs/DECISIONS.md:101-109` tratam especificamente categoria inativa do Guia, sem extrapolação aos catálogos editoriais.
- `docs/PRODUCT.md:48` diz que bloco de home configurado para destaques some quando não há destaque. `docs/PRODUCT.md:180-187` diz que desligar módulo oculta, sem apagar conteúdo.
- `AGENTS.md:46` registra limpeza de mídia com proteção a referências compartilhadas e que operações em lote exigem backup fresco e autorização; o artigo não orienta operações de servidor.

## tutoriais e vídeos

A busca textual no repositório identificou mockups, vídeos de produto/marketing e componentes públicos explicativos, mas não encontrou inventário de tutoriais administrativos editoriais confirmados. Há `mockups/noticias-area-do-cliente.html`, que é mockup, não tutorial ou evidência de tela atual. Existem componentes de vídeo de outras áreas, por exemplo `frontend/src/components/utilidade/VideoExplicativo.tsx` e `frontend/src/app/orcamento/VideoComoFunciona.tsx`; não são tutoriais de administração editorial e não foram incluídos como instrução. A consulta por nome de arquivo foi limitada a `docs/`; não se afirma inexistência de material em outros locais. Não foram copiados nem inventados assets.

## lacunas e limites

- Fontes consultadas: `AGENTS.md` raiz, `portal-cidade/CLAUDE.md`, `docs/PRODUCT.md`, `docs/DECISIONS.md`, telas pertinentes e regras de UI/backend referenciadas nos artigos.
- `PRODUCT.md` e `DECISIONS.md` têm datas de verificação anteriores a esta coleta; prevaleceram as decisões atuais indicadas e o código presente na árvore, sem usar backlog como promessa de produto.
- Não foi feita revisão completa de todos os serializers/endpoints ou validação em navegador. Orientações de interface apoiam-se nas rotas/componentes existentes; podem mudar se o código mudar.
- O formulário de cadastro de notícia e certas telas de Turismo têm lógica repartida entre componentes e ações. Os artigos limitam passos a rótulos/rotas confirmados, sem inferir cada campo nem resultado público.
- Não foi encontrado tutorial editorial em `docs/`; não foi feita busca fora do workspace.
- Nada aqui substitui política de acesso, autorização do servidor ou validação humana. O classificador de futura estrutura serve apenas para roteamento textual.
