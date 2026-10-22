# dados-pj

catálogo de ajuda do Dados PJ (DadosPJ, cartão `Extrator da Receita Federal` na Área do Cliente), usado pelo chat de suporte com IA. público: cliente. `validacao: codigo-e-video` quando o vídeo também cobre o assunto; `docs-e-codigo` nos de login, bloqueio e erros (só código).

## regra de verdade
- o código manda: `newcortexbr/dadospj-backend` `2dd8a3b` (05/10/2026) e `newcortexbr/dadospj-frontend` `16768d4` (24/09/2026), mais `src/domain/acesso/sso-rps.ts` da Área do Cliente. os vídeos (`videos.json`) servem para a ordem dos passos, dicas e o "porquê".
- conflitos entre vídeo e código: `interno/divergencias.md` (a pasta `interno/` não vai ao chat). dossiê completo: `rascunhos/videos-2026-10-21b/dossie-dados-pj.md`.
- guia curto de acesso na Área do Cliente: `area-do-cliente/ferramentas/dadospj.md` (`ac-ferramentas-dadospj`).

## artigos
geral
- [o que é o Dados PJ e para que serve](geral/o-que-e-o-dados-pj.md) — `pj-o-que-e`
- [Dashboard: créditos, leads, base e histórico](geral/dashboard.md) — `pj-dashboard`
- [perguntas frequentes](geral/perguntas-frequentes.md) — `pj-perguntas-frequentes`

acesso
- [entrar pela Área do Cliente (sem senha própria)](acesso/entrar-pela-area-do-cliente.md) — `pj-entrar-pela-area-do-cliente`
- [não consigo entrar: mensagens da tela de login](acesso/erros-de-login.md) — `pj-erros-de-login`
- [licença suspensa, cancelada ou plataforma não liberada](acesso/licenca-suspensa-ou-sem-acesso.md) — `pj-licenca-suspensa-ou-sem-acesso`

lista
- [gerar uma lista, passo a passo](lista/gerar-lista-passo-a-passo.md) — `pj-gerar-lista-passo-a-passo`
- [filtrar por termo ou CNAE](lista/filtros-termo-e-cnae.md) — `pj-filtros-termo-e-cnae`
- [estado, cidades, bairros e DDD](lista/filtros-de-local.md) — `pj-filtros-de-local`
- [situação, porte, MEI, telefone e data de abertura](lista/filtros-da-empresa.md) — `pj-filtros-da-empresa`
- [erros ao gerar a lista](lista/erros-ao-gerar-lista.md) — `pj-erros-ao-gerar-lista`

creditos
- [créditos semanais](creditos/creditos-semanais.md) — `pj-creditos-semanais`

arquivos
- [baixar o arquivo e prazo de 7 dias](arquivos/baixar-arquivo-e-validade.md) — `pj-baixar-arquivo-e-validade`
- [colunas do arquivo](arquivos/colunas-do-arquivo.md) — `pj-colunas-do-arquivo`
