# cobertura e limites da revisão documental

## estado e método

- revisão estática em 2026-10-15 dos 32 artigos e inventários mantidos em `suporte-kb/`.
- fontes foram consultadas a partir da árvore local de `portal-cidade/`, em modo somente leitura. referência de baseline informada: HEAD `6884994332a79eb5e5543d5469392feefb8b7034`.
- a árvore tinha muitas alterações preexistentes; esse hash não representa integralmente as fontes efetivamente lidas. esta revisão corresponde ao snapshot local consultado, sem alegar equivalência integral com HEAD.
- `docs-e-codigo` significa documentação e implementação lidas; não é validação funcional, visual, QA ou confirmação em produção.

## cobertura atual

- `usuario/`: seis guias públicos (Guia, contato, vagas, classificados, cupons e Delivery) e um artigo de criação de conta empresarial em `usuario/acesso/`.
- `cliente/`: cinco guias de gestão da conta/empresa e dois artigos de entrada/recuperação do cliente em `cliente/acesso/`.
- `cliente/acesso/entrar-recuperar-parceiro.md` é organização física apenas: público `parceiro`, permissão `parceiro-comercial`; nunca deve ser exposto a cliente comum.
- `admin/`: um artigo de entrada no painel, oito editoriais e oito comerciais.
- `interno/`: inventários e proposta de arquitetura; todo conteúdo desta pasta é interno e não pode ser carregado no chat.

## lacunas e pendências

- nenhum artigo foi confrontado com interface renderizada; rótulos, fluxos e aparência podem divergir da árvore consultada.
- vídeos não foram validados nem criados. mockups ou componentes de vídeo existentes não foram tratados como tutorial atual.
- hipótese de modelos/tiers continua hipótese, sem benchmark. a proposta de classificador unificado, limiar `score > 0.80`, tutorial com feedback e escalada a LLM após falha permanece proposta registrada em `interno/arquitetura-proposta.md`, não funcionalidade aprovada/implementada.
- classificação `categoria`, `aba` e `tipo_problema` é documental, não um contrato implementado.
- são necessárias revisão humana de conteúdo, teste de acesso por público/permissão e checagem de UI antes de qualquer ingestão ou publicação.
- artigos de acesso cobrem somente fluxos encontrados; não documentam desbloqueios, recuperação administrativa ou criação de conta de parceiro.

## limites desta entrega

- nenhum software, teste, build ou ambiente foi executado; não há validação funcional.
- `portal-cidade/` permaneceu somente leitura; não foi criado repositório Git nem houve publicação.
- os artigos continuam `rascunho-documental`; a presença no índice não implica aprovação para atendimento automático.
