# /painel/guia/empresas/[id]/equipe — equipe (`.../[id]/equipe/page.tsx`)
- gate: módulo `guia` (prefixo `/painel/guia`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: lista de membros ("Nossa Equipe") da empresa.
- campos: Nome (obrigatório), Cargo / Especialidade (obrigatório), Registro profissional (opcional), foto, ativo.
- ações: criar/editar (:87-88), excluir com `confirm` (:218-220), ativar/desativar (:233).
- APIs: `guia.equipe.listar|criar|atualizar|excluir`, `guia.empresas.detalhe` (:198).
- estados: qualquer falha ao carregar seções/empresa cai em `.catch(() => setSemAcesso(true))` e mostra `SemAcessoEmpresa` (`components/painel/SemAcessoEmpresa.tsx`). (:202). Vazio "Nenhum membro cadastrado ainda" (:280).
- problemas: fato — catch único vira "sem acesso" (:202).
- admin vs cliente: equivalente à equipe na ficha do cliente (`FAMILIAS_PLANAS` inclui `equipe`, `cliente-api.ts:1343`).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-guia-empresas-id-equipe.png](../prints/painel-guia-empresas-id-equipe.png) · dados brutos: [json](../prints/json/painel-guia-empresas-id-equipe.json)
- aberta em `/painel/guia/empresas/1/equipe` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Listar Empresas · Gerenciar Categorias · Gerenciar Subcategorias · Cupons de Desconto · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [link] "Voltar para a empresa" — conteúdo, no topo da página, ao centro (428,28,183,36)
- [botão] "Adicionar membro" — conteúdo, no topo da página, à direita (946,82,182,41)
- [título] "Nossa Equipe" — conteúdo, na parte de cima, ao centro (428,96,132,30)
- [botão] "Adicionar primeiro membro" — conteúdo, na parte de cima, ao centro (651,328,254,41)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
