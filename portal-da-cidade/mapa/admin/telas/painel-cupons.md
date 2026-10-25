# /painel/cupons

Arquivo: `app/painel/cupons/page.tsx`

## rota e gate
- `/painel/cupons`. client. gate `PainelGuard` + gate de módulo `cupons` (`lib/painel-menu.ts:45,102`); módulo desligado mostra "Módulo desativado".

## o que faz
- lista os cupons do portal. cupom não é registro próprio: são campos `cupom_*` de uma empresa do Guia, um por empresa (`page.tsx:22-27`).

## ações
- "Novo cupom" (link), "Editar" por linha, "Remover" por linha (confirmação `avisos.confirmar`, `:95`). remover só limpa os campos de cupom, a empresa continua.
- o admin cria, altera e remove cupom de qualquer empresa do portal em nome do lojista.
- após remover: `revalidarGuia` e `revalidarCupons` (Server Actions com o token do painel) e recarrega a lista.

## colunas
- capa (ou "Sem foto"), empresa, código, selo (`cupom_selo`, com fallback cinza para `cupom_desconto`), validade com selo "Vencido" (comparação em America/Sao_Paulo, `:16-20`).

## apis
- `adminApi.cupons.listar({com_cupom:'1', page})` (`lib/admin-api.ts:1245`), paginado até o fim em loop (`:37-56`); `excluir(id)` (`:1262`), DELETE `/painel/<slug>/cupons/<empresaId>/`.

## estados
- carregando "Carregando…"; erro em faixa vermelha; vazio "Nenhum cupom cadastrado ainda…".

## possíveis problemas
- fato: carrega todas as páginas em sequência antes de mostrar qualquer coisa (`:50-54`); portal com muitos cupons fica lento (hipótese de impacto).
- fato: `window.confirm` nativo.
- fato: falha de revalidação é engolida (`.catch(() => {})`, `:101-102`); se falhar, o site público pode continuar mostrando o cupom em cache sem aviso ao admin.
- fato: se o plano da empresa não libera cupom o selo some e vira texto cinza com tooltip (`:174-178`); o admin não vê diretamente o motivo na lista.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-cupons.png](../prints/painel-cupons.png) · dados brutos: [json](../prints/json/painel-cupons.json)
- aberta em `/painel/cupons`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Listar Empresas · Gerenciar Categorias · Gerenciar Subcategorias · Cupons de Desconto · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Cupons" — topo, no topo da página, à esquerda (300,19,67,28)
- [título] "Cupons" — conteúdo, na parte de cima, ao centro (300,99,521,32)
- [link] "Novo cupom" — conteúdo, na parte de cima, à direita (1139,107,117,40)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)

## como chegar
- na parte Conteúdo do menu, abra `Guia Comercial` e clique em `Cupons de Desconto`.

## o que você vê
Tela `Cupons`. Lista os cupons de desconto das empresas do Guia; cada empresa tem no máximo um cupom.
- botão `Novo cupom`: cria um cupom para uma empresa.
- coluna `Capa`: foto do cupom ("Sem foto" quando não tem).
- coluna `Empresa`: a empresa do Guia dona do cupom.
- coluna `Código`: o código que o visitante usa (ex.: PORTAL10).
- coluna `Selo`: o desconto mostrado no site. em cinza, o cupom não está aparecendo: o plano atual da empresa não libera cupom ou ele está fora da validade.
- coluna `Validade`: até quando o cupom vale; o selo "Vencido" aparece quando a data já passou.
- `Editar`: muda o cupom.
- `Remover`: apaga só o cupom (pede confirmação); a empresa continua no Guia.
