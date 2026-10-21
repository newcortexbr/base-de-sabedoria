# /painel/guia/empresas/[id]/servicos — serviços (`.../[id]/servicos/page.tsx`)
- gate: módulo `guia` (prefixo `/painel/guia`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: tabela de serviços e valores por seção.
- campos: Nome (obrigatório, :69), Descrição, Detalhe (opcional), Duração (opcional), Valor (R$), ícone, ativo.
- ações: seções (:400,416,428,444), serviços (criar/editar :86-87, ativar :258, excluir :236-238).
- APIs: `guia.servicos.listarSecoes|criarSecao|atualizarSecao|excluirSecao|listarItens|criarItem|atualizarItem|excluirItem`, `guia.empresas.detalhe` (:384).
- estados: qualquer falha ao carregar seções/empresa cai em `.catch(() => setSemAcesso(true))` e mostra `SemAcessoEmpresa` (`components/painel/SemAcessoEmpresa.tsx`). (:388). Vazio "Nenhum serviço cadastrado nesta seção" (:337), "Nenhuma seção criada ainda" (:493).
- problemas: fato — catch único vira "sem acesso" (:388).
- admin vs cliente: equivalente ao conteúdo de serviços na ficha do cliente.

## o que você vê
Lista de serviços e valores de uma empresa, separados em seções (ex.: Consultas, Procedimentos, Pacotes).
- Criar seção, Renomear, mudar ordem e Excluir seção.
- serviço: nome (ex.: Consulta médica), descrição, detalhe (ex.: a partir de 30m²), duração (ex.: 30-90 dias) e valor.
- chave de publicado: mostra ou esconde o serviço no site; a lixeira apaga, com confirmação.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-guia-empresas-id-servicos.png](../prints/painel-guia-empresas-id-servicos.png) · dados brutos: [json](../prints/json/painel-guia-empresas-id-servicos.json)
- aberta em `/painel/guia/empresas/1/servicos` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Listar Empresas · Gerenciar Categorias · Gerenciar Subcategorias · Cupons de Desconto · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [link] "Voltar para a empresa" — conteúdo, no topo da página, ao centro (378,28,183,36)
- [título] "Serviços oferecidos" — conteúdo, faixa larga na parte de cima (378,96,800,30)
- [campo] "Criar seção" — conteúdo, na parte de cima, ao centro, logo abaixo de “Serviços oferecidos” (397,189,614,43)
- [botão] "Criar seção" — conteúdo, na parte de cima, à direita, logo abaixo de “Serviços oferecidos” (1021,189,138,43)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
