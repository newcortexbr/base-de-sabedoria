# coleta de conhecimento: acesso

- revisado em: 2026-10-15
- escopo: entrar, criar conta, recuperar acesso e orientar papéis visitante, cliente, parceiro, admin e jornalista.
- fontes locais: `portal-cidade/docs/PRODUCT.md`, `portal-cidade/docs/FLOWS.md`, `portal-cidade/docs/DECISIONS.md`, `portal-cidade/CLAUDE.md` e implementação atual em `frontend/` e `backend/`.
- base desta coleta: documentação do produto mais código atual; registros históricos e backlog não foram tratados como prova isolada de implementação.
- suporte proposto não revoga nem altera D-395; nenhum recurso de IA executa as ações descritas.

## inventário de artigos

- `cliente/acesso/entrar-area-cliente.md`: login de cliente e jornalista; esclarece que não há fluxo geral de login de visitante identificado.
- `usuario/acesso/criar-conta-empresa.md`: cadastro público da empresa e confirmação do e-mail.
- `cliente/acesso/recuperar-senha-cliente.md`: recuperação por código para cliente e jornalista elegível.
- `cliente/acesso/entrar-recuperar-parceiro.md`: entrada e recuperação próprias de parceiro.
- `suporte-kb/admin/acesso/entrar-painel.md`: admin, recusa de papéis não administrativos e bloqueio temporário.

## divergências e lacunas

- `portal-cidade/docs/FLOWS.md:62-81` afirma que autocadastro da empresa não existe e descreve botão inativo; `portal-cidade/docs/PRODUCT.md:207-212` registra que é público; a D-331 de `portal-cidade/docs/DECISIONS.md:11852-11858` exige confirmação de e-mail antes de criar a conta. O código atual confirma formulário em `/anuncie` e redirecionamento de `/anuncie/cadastro` (`portal-cidade/frontend/src/app/anuncie/page.tsx:55-99`; `portal-cidade/frontend/src/app/anuncie/cadastro/page.tsx:5-14`). A orientação segue código e decisão, e sinaliza a inconsistência.
- O login do painel mostra “Esqueceu a senha?” mas não há ação ligada ao controle (`portal-cidade/frontend/src/app/painel/login/page.tsx:296-319`). Não foi inventado caminho; artigo encaminha ao suporte.
- A recuperação da área cliente atende cliente e jornalista ativos, não admin ou parceiro (`portal-cidade/backend/comercial/recuperar_senha.py:4-15,40-62`). Parceiro usa a mesma implementação com área separada. O código não envia recuperação para conta inativa/bloqueada (`:40-62,90-109`).
- Visitante/leitor: não foi encontrada porta geral de conta/entrada no frontend consultado. Há `LeitorPublico` citado na docs, ligado às avaliações; isso não comprova criação de conta geral (`portal-cidade/docs/DECISIONS.md:56-63`; `portal-cidade/docs/FLOWS.md:132-144`).
- Primeiro cadastro de parceiro, recuperação da senha administrativa, desbloqueio e fluxo de edição de conta não foram documentados como capacidades porque não foram estabelecidos por fontes atuais suficientes.
- `D-395` descreve assistente público como mecanismo de consulta; não autoriza a IA a executar cadastro, login, recuperação ou alteração de permissões. A KB é orientação, não agente executor. Referência: `portal-cidade/docs/DECISIONS.md:13523-13527`.
- `portal-cidade/docs/PRODUCT.md` lista papéis amplos; os perfis concretos da área são mais específicos. A D-345 e D-346 atualizam a separação da área do cliente (`portal-cidade/docs/DECISIONS.md:12053-12100`), e as guardas de painel excluem cliente/parceiro/jornalista (`portal-cidade/docs/DECISIONS.md:12300-12310`).

## cobertura

- cliente: login, cadastro de empresa e recuperação de senha.
- parceiro: login e recuperação por sua porta separada.
- jornalista: login pela área do cliente e recuperação elegível; não entra pelo painel.
- admin: login e mensagens de acesso negado/bloqueio; recuperação não demonstrada.
- visitante: orientação sobre inexistência de fluxo geral de login identificado; cadastro de empresa coberto separadamente.

## limites da coleta

- Os artigos são rascunhos documentais baseados em leitura de documentos e código, não homologação funcional.
- Não houve testes, builds, execução do portal, envio de e-mail ou inspeção de tela renderizada.
- Não foram consultadas credenciais nem ambientes de produção.
- Não foram alterados arquivos de `portal-cidade/` nem docs canônicas.
