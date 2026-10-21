# coleta de conhecimento: admin e comercial

- revisado em: 2026-10-15
- escopo: configuração do portal, módulos, Guia, vagas/classificados, planos e financeiro para administradores.
- artigos reorganizados em `admin/comercial/`; este inventário é interno.
- fontes: `portal-cidade/AGENTS.md`, `portal-cidade/CLAUDE.md` (regras 2 e 5, multi-tenancy), `portal-cidade/docs/PRODUCT.md`, `portal-cidade/docs/DECISIONS.md` e implementação atual de telas Next.js.
- abordagem: usar texto e rotas atuais demonstrados pelo código; documentos oficiais contextualizam e explicam regras. Backlog/propostas não usados para inferir capacidades.
- todos os artigos têm `status: rascunho-documental`, `validacao: docs-e-codigo`; não são homologação funcional. A IA orienta, não executa ações nem altera permissões ou finanças.

## inventário

1. `suporte-kb/admin/comercial/configurar-identidade-do-portal.md` — Configurações e Layout (Topo, Tela Início, Cores, Rodapé).
2. `suporte-kb/admin/comercial/ativar-modulos-e-programa-de-parceiros.md` — Módulos e Programa de Parceiros.
3. `suporte-kb/admin/comercial/gerenciar-empresas-do-guia.md` — localizar, editar e alterar situação de empresas.
4. `suporte-kb/admin/comercial/gerenciar-categorias-do-guia.md` — categorias; alerta sobre ocultação de empresas.
5. `suporte-kb/admin/comercial/gerenciar-vagas-e-classificados.md` — rotas de vagas e classificados.
6. `suporte-kb/admin/comercial/configurar-planos-comerciais.md` — definição comercial separada de faturas.
7. `suporte-kb/admin/comercial/acompanhar-faturas-e-pagamentos.md` — abas e prudência para confirmar recebimento/cobrar.
8. `suporte-kb/admin/comercial/conectar-asaas-e-entender-cobranca.md` — conectar conta sem inferir estado financeiro.

## evidências e regras sensíveis

- Administração de aparência: rota `/painel/configuracoes`, subpágina `/painel/configuracoes/layout` e opções listadas no componente (`portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:26-40`; `portal-cidade/frontend/src/app/painel/configuracoes/layout/page.tsx:13-29,31-36,59-60,84-86`). Modelos são código, configurações são dados; o painel não edita modelos (`portal-cidade/docs/PRODUCT.md:82-93`; `portal-cidade/docs/DECISIONS.md:14-21`).
- Módulos: tela `/painel/configuracoes/modulos`, confirmação para desligamento e ação `Salvar módulos` (`portal-cidade/frontend/src/app/painel/configuracoes/modulos/page.tsx:24-36,49-70,79-100`). Catálogo atual tem 10 módulos; Delivery acompanha Guia; programa de parceiros não é módulo; quem liga/desliga é o franqueado (`portal-cidade/docs/PRODUCT.md:50-61`).
- Guia: tela `/painel/guia/empresas`; status observados no código: Pendente, Ativo, Inativo, Banido, Reprovado (`portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:18-29,31-45,59-73,81-89`). Categoria inativa também oculta suas empresas; mover empresas antes de aposentar categoria é a orientação vigente (`portal-cidade/docs/DECISIONS.md:101-109`).
- Vagas e classificados: rotas `/painel/vagas` e `/painel/classificados`, comprovadas por arquivos de página. A nomenclatura de backend não corresponde literalmente: `classificados` no backend contém vagas, `anuncios` contém classificados (`portal-cidade/CLAUDE.md:55-56`; `portal-cidade/docs/PRODUCT.md:43-44`).
- Planos: `/painel/planos`, com catálogo dinâmico e seção que pode apresentar planos ou publicidade; nenhum preço fixado no artigo (`portal-cidade/frontend/src/app/painel/planos/page.tsx:3-18,35-44`; `portal-cidade/frontend/src/app/painel/planos/[secao]/page.tsx:3-13`).
- Financeiro: tela `/painel/financeiro` comenta que sem Asaas não emite cobrança; faturas podem ser cobradas pelo dono fora e confirmadas depois (`portal-cidade/frontend/src/app/painel/financeiro/page.tsx:3-13`). Abas reais: `A vencer`, `Vencidas`, `Pagas`, `Canceladas` (`portal-cidade/frontend/src/app/painel/financeiro/regras.ts:4-15`). Confirmação converge no servidor, preço é recalculado, e cobrança pode ser específica por fatura (`portal-cidade/CLAUDE.md:41-42`; `portal-cidade/docs/PRODUCT.md:196-205`).
- Conexão: a configuração está em `/painel/configuracoes/cobranca` (`portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:9-16,40-45,47-64,75-94`). Artigo não orienta copiar chave nem concluir que conexão = cobrança/quitado.
- Permissões: proprietário é admin de portal por marca positiva; papel de negócio impede administração no mesmo portal; conceder/revogar são operações específicas, e `ativo` não define identidade (`portal-cidade/CLAUDE.md:238-249,280-317`). Os artigos não ensinam atribuição de permissão nem autorizam IA a fazê-lo.

## divergências e lacunas

- Produto cita faturas e conexão Asaas como capacidades, mas não significa que todas as faturas usam a mesma via nem que conexão confirma pagamento. Os textos da tela Financeiro e as regras canônicas prevalecem para explicar essa distinção (`portal-cidade/frontend/src/app/painel/financeiro/page.tsx:3-13,61-71`; `portal-cidade/CLAUDE.md:41-42`).
- Produto diz que `Portal.plano`, valor mensal e próxima cobrança do franqueado ficam no Master e que a área Minha Assinatura tem ações de pagar/cancelar desligadas (`portal-cidade/docs/PRODUCT.md:203-205`). Não criamos artigo para “Minha Assinatura” por falta de tarefa de interface administrativa comprovada no escopo.
- A rota `/painel/guia/categorias` foi encontrada, mas seus controles internos não foram examinados. O artigo só afirma o acesso e aplica a decisão documentada sobre categoria inativa; criação/exclusão/edição ficam como lacuna.
- As telas de vagas/classificados foram comprovadas pelo arquivo de página e rotas; não foram lidos seus filtros/ações. O artigo oferece somente navegação básica.
- Permissões: o painel login e os papéis são tratados pela KB de acesso; aqui não se duplica login, nem se documenta concessão/revogação de admin como procedimento de suporte.
- Sem preço, reembolso, desconto, promessa de prazo ou procedimento de disputa. Ambiguidade financeira é encaminhada a uma pessoa responsável.

## cobertura e roteamento

- Cobertura: oito tarefas de admin; nenhuma tarefa editorial ou tutorial de login.
- Os frontmatters dos oito artigos incluem `categoria: admin`, `aba` e `tipo_problema`, além dos campos comuns solicitados. Valores de aba foram limitados a rótulos confirmados; quando a tela não tem abas, consta `nao-se-aplica`.
- Roteamento sugerido é categoria > aba > tipo_problema. O classificador pode indicar artigo provável, mas não decide autorização nem permite executar operações.
- Modelos de IA por tier permanecem hipótese sem benchmark; não se recomenda desenho/seleção de tiers a partir desta coleta.

## limites

- Somente leitura em `portal-cidade/`; nenhuma fonte canônica alterada.
- Nenhum teste, build, app, git, web, produção ou credencial consultada.
- Não foi executado o produto e não houve validação visual. Rotas e rótulos derivam de código/documentação, não de homologação de interface.
- As instruções são rascunhos documentais; se interface, políticas comerciais ou decisões mudarem, revisar evidências antes de publicar.
