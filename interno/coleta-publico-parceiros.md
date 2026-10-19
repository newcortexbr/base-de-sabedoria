---
id: coleta-publico-parceiros
titulo: inventário de suporte público, clientes e parceiros
publico:
  - interno
modulo: suporte-kb
categoria: inventario
aba: nao-se-aplica
tipo_problema: cobertura-documental
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo
registrar a cobertura produzida, as fontes consultadas e os limites da coleta documental. esta nota é interna; não publicar junto aos artigos públicos.

## inventário e cobertura

### usuario visitante
- Guia Comercial: busca de empresa — `usuario/encontrar-empresa-no-guia.md`.
- Guia Comercial: contato e horário — `usuario/consultar-contato-de-empresa.md`.
- Vagas: localizar vaga e instruções de candidatura — `usuario/localizar-e-candidatar-se-a-vaga.md`.
- Classificados: busca de anúncios — `usuario/buscar-anuncios-classificados.md`.
- Cupons: localizar e consultar — `usuario/encontrar-e-usar-cupom.md`.
- Delivery: cardápio, pedido e rastreio por código — `usuario/fazer-pedido-no-delivery.md`.

### cliente de empresa autenticado
- perfil público da empresa — `cliente/editar-perfil-publico-da-empresa.md`.
- vagas próprias — `cliente/gerenciar-vagas-da-empresa.md`.
- anúncios próprios — `cliente/gerenciar-anuncios-proprios.md`.
- cupons da empresa — `cliente/gerenciar-cupons-da-empresa.md`.
- pedidos de delivery — `cliente/consultar-pedidos-delivery.md`.

O formato das três pastas finais foi solicitado como destino futuro pelo usuário; os arquivos permanecem na hierarquia de ownership atual `usuario/` e `cliente/`. `categoria`, `aba` e `tipo_problema` são metadados editoriais provisórios para roteamento futuro. Não há roteador implementado ou validado.

## parceiro comercial: lacuna
parceiro é papel separado, tem fluxo próprio em `/parceiro` e não deve ser tratado como cliente comum. o mapeamento de parceiro comercial para um tier ou pasta final entre `usuario`, `cliente` e `admin` não foi confirmado. por isso nenhum artigo de parceiro foi criado nem colocado em `cliente/`; não expor artigos de parceiro a cliente comum. há ownership separado em `conteudo/parceiros/`; esta nota não modifica nem duplica seus arquivos.

## divergências e cautelas
- **login e acesso**: cobertos por outros agentes em `usuario/acesso/`, `cliente/acesso/` e `admin/acesso/`; estes guias não repetem instruções de login.
- **candidatura a vaga**: código confirma listagem pública, detalhe e dados de contratante; não foi confirmado um formulário público de candidatura. o artigo orienta seguir somente o canal publicado pela vaga.
- **entrega do pedido**: página pública de delivery e rota de acompanhamento por código existem. os controles e etapas do checkout não foram inspecionados em detalhe; texto limitado às opções evidenciadas.
- **gestão de cupons**: há página de cliente `minha-conta/cupons`, mas ações e permissões específicas não foram confirmadas; artigo orienta consulta e ações condicionais.
- **perfil da empresa**: `Minha empresa` existe para descrição, WhatsApp, e-mail, site e logo. campos concretos ou tempo de propagação podem variar; não se promete atualização imediata.
- **anúncios**: anúncio ativo pode não aparecer no público se estiver sem foto ou vencido; não prometer limites/benefícios.
- **delivery de loja**: depende da configuração e direito do negócio; a página pode exibir `Delivery em breve!` e oferecer `Pedir pelo WhatsApp`.
- telas não foram executadas. `docs-e-codigo` significa conferência documental e de fonte atual, não validação visual, funcional, QA ou em produção.
- `D-395` e sua revisão `D-397` foram consideradas decisões atuais do produto; nenhum artigo introduz ou revoga comportamento do assistente.

## fontes consultadas
- `AGENTS.md:19` — orientações do projeto, limites de produção e distinção entre produto e verificação.
- `portal-cidade/CLAUDE.md:50` — frontend, vocabulário de módulos e links.
- `portal-cidade/docs/PRODUCT.md:34` — módulos vigentes; `:38-46` — Guia, Delivery, Vagas, Classificados e Cupons; `:207-212` — autocadastro público, não incluído nos guias de acesso.
- `portal-cidade/docs/DECISIONS.md:13523` — D-395; `:13634` — D-397. decisões consultadas como contexto; sem orientar o visitante sobre operação interna do assistente.
- `portal-cidade/frontend/src/app/guia/page.tsx:73` e `portal-cidade/frontend/src/components/guia/CartaoBuscaFiltros.tsx:69`.
- `portal-cidade/frontend/src/app/guia/empresa/[cidade]/[slug]/page.tsx:47`.
- `portal-cidade/frontend/src/app/vagas/page.tsx:3` e `portal-cidade/frontend/src/app/vagasdeemprego/page.tsx:51`.
- `portal-cidade/frontend/src/app/classificados/page.tsx:50`.
- `portal-cidade/frontend/src/app/cupons/page.tsx:46`.
- `portal-cidade/frontend/src/app/delivery/[slug]/page.tsx:38` e `portal-cidade/frontend/src/app/pedido/[codigo]/page.tsx:1`.
- `portal-cidade/frontend/src/app/minha-conta/minha-empresa/page.tsx:3`.
- `portal-cidade/frontend/src/app/minha-conta/vagas/page.tsx:4`.
- `portal-cidade/frontend/src/app/minha-conta/classificados/page.tsx:3`.
- `portal-cidade/frontend/src/app/minha-conta/cupons/page.tsx:1`.
- `portal-cidade/frontend/src/app/minha-conta/delivery/pedidos/page.tsx:34` e `:192-225`.
- `portal-cidade/frontend/src/app/parceiro/(shell)/ParceiroInicioClient.tsx:23`.

## lacunas
- classificação canônica dos tiers por usuário/cliente/admin e destino dos conteúdos após reorganização.
- relação entre papel de parceiro comercial e público final da futura base.
- inspeção de controles públicos de checkout e das ações completas de cupons.
- nomes finais de abas/categorias que o futuro roteador aceitará.
