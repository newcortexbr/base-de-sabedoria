# /painel/guia/empresas/importar — importar planilha (`.../importar/page.tsx`, 661 linhas)
- gate: módulo `guia` (prefixo `/painel/guia`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`).
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: assistente em 4 etapas (enviar arquivo → revisão → importando → concluída). Importa empresas em lote a partir de arquivo (extrator de Google Maps), com mapeamento de categorias.
- ações: enviar (`importacoes.enviar`, :117), salvar mapeamento (:184), processar em blocos (`processar` :147, pausa/continua), desfazer lote com `confirm` "apaga as N empresas criadas" (:221-224), reabrir lote anterior (`detalhe` :237), listar anteriores (:87).
- estados: erro de processamento com opção de continuar; "Nenhuma categoria para mapear" (:429); "Nenhuma importação ainda" (:627).
- problemas: fato — "Desfazer" apaga as empresas do lote; só há `confirm()` nativo. hipótese — empresas editadas depois da importação também seriam apagadas (regra do servidor).
- admin vs cliente: sem equivalente no cliente (operação de portal).

## o que você vê
Traz várias empresas de uma vez para o Guia, a partir de uma planilha tirada do Google Maps.
- passos: Enviar arquivo, Revisão, Importação.
- Revisão: para cada categoria da planilha, escolha a categoria do portal (há sugestão); as que ficarem sem escolha serão ignoradas.
- números: Total de linhas, Novas (serão criadas), Já existem (já estão no Guia), Ignoradas, Com problema.
- Importação: Criadas e Com erro mostram o andamento; Pausar para e Continuar retoma.
- fotos que não vierem podem ser enviadas depois, na edição da empresa.
- Importações anteriores: lista de envios passados (Data, Arquivo); dá para reabrir ou desfazer um lote, o que apaga as empresas criadas nele, com confirmação.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-guia-empresas-importar.png](../prints/painel-guia-empresas-importar.png) · dados brutos: [json](../prints/json/painel-guia-empresas-importar.json)
- aberta em `/painel/guia/empresas/importar`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Listar Empresas · Gerenciar Categorias · Gerenciar Subcategorias · Cupons de Desconto · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Guia Comercial — Importar do Google Maps" — topo, no topo da página, ao centro (300,19,378,28)
- [link] "Voltar para Empresas" — conteúdo, na parte de cima, à esquerda (300,91,201,38)
- [botão] "1" — conteúdo, na parte de cima, à esquerda (326,153,32,32)
- [botão] "2" — conteúdo, na parte de cima, ao centro (774,153,32,32)
- [botão] "3" — conteúdo, na parte de cima, à direita (1210,153,32,32)
- [título] "Enviar planilha" — conteúdo, na parte de cima, ao centro (324,253,528,24)
- [envio de arquivo] "" — conteúdo, na parte de cima, ao centro, logo abaixo de “Enviar planilha” (324,357,528,36)
- [título] "Importações anteriores" — conteúdo, faixa larga no meio da tela (320,453,916,20)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
