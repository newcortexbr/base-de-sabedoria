# /painel/guia/empresas/[id]/quartos — quartos e suítes (`.../[id]/quartos/page.tsx`)
- gate: módulo `guia` (prefixo `/painel/guia`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: seções e quartos de hospedagem, com fotos.
- campos do quarto: Título (obrigatório, :123), Descrição, Preço por noite, Comodidades do quarto, ativo, fotos.
- ações: seções (criar/renomear/excluir/reordenar, :370,565-605), quartos (criar/editar/ativar/excluir, :139-140,388,412), fotos (:237,260,272).
- APIs: `guia.quartos.listarSecoes|criarSecao|atualizarSecao|excluirSecao|listarItens|criarItem|atualizarItem|excluirItem|listarFotos|criarFoto|excluirFoto`, `guia.empresas.detalhe` (:554).
- estados: qualquer falha ao carregar seções/empresa cai em `.catch(() => setSemAcesso(true))` e mostra `SemAcessoEmpresa` (`components/painel/SemAcessoEmpresa.tsx`). (:558). Vazio "Nenhum quarto nesta seção ainda" (:501) e "Nenhuma seção cadastrada" (:657).
- problemas: fato — catch único vira "sem acesso" (:558).
- admin vs cliente: o cliente cobre quartos na ficha (`minha-conta/guia`, hospedagem). Equivalente.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-guia-empresas-id-quartos.png](../prints/painel-guia-empresas-id-quartos.png) · dados brutos: [json](../prints/json/painel-guia-empresas-id-quartos.json)
- aberta em `/painel/guia/empresas/1/quartos` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Listar Empresas · Gerenciar Categorias · Gerenciar Subcategorias · Cupons de Desconto · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [link] "←" — conteúdo, no topo da página, à esquerda (398,33,36,36)
- [título] "Quartos & Suítes" — conteúdo, no topo da página, ao centro (446,45,162,30)
- [campo] "Nova seção (Ex: Suítes, Chalés, Quartos Standard)…" — conteúdo, na parte de cima, ao centro, logo abaixo de “Quartos & Suítes” (417,116,619,41)
- [botão] "+ Seção" — conteúdo, na parte de cima, à direita (1046,117,93,39)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
