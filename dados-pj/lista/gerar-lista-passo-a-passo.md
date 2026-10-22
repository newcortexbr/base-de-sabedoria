---
id: pj-gerar-lista-passo-a-passo
titulo: "gerar uma lista de empresas, passo a passo"
publico:
  - cliente
modulo: lista
aba: Gerar Lista de Empresas
tipo_problema:
  - gerar-lista
  - exportar
  - extracao
  - nova-lista
  - passo-a-passo
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - IKdKLgi-e94
produto: dados-pj
---

## objetivo
gerar e baixar uma lista de empresas sem desperdiçar crédito.

## pré-requisitos
- licença ativa e ao menos 1 crédito na semana (`pj-creditos-semanais`).

## explicação
- a tela `Gerar Lista de Empresas` (título `Filtros de Busca`) junta todos os filtros. eles se somam: a empresa precisa atender a todos ao mesmo tempo.
- cada clique em `Confirmar e Exportar` usa 1 crédito, qualquer que seja o tamanho da lista. se não vier nenhuma empresa ou der erro, o crédito volta.
- a exportação roda no servidor. pode fechar a janela de progresso; ao voltar à tela, ela retoma o acompanhamento. o vídeo recomenda deixar a aba aberta.

## passos
1. no menu, clique em `Gerar Lista de Empresas`.
2. (opcional) escreva um termo em `Buscar por termo (razão social ou fantasia)` ou escolha `CNAEs` (`pj-filtros-termo-e-cnae`).
3. confira o `Estado` e escolha de 1 a 3 `Cidades` (`pj-filtros-de-local`).
4. ajuste `Situação`, `Porte`, `Tipo de empresa`, `Telefone` e `Data início atividades` se quiser (`pj-filtros-da-empresa`). em `Telefone`, a opção `Fixo` hoje não filtra só fixos.
5. escolha o `Formato do arquivo`: `Excel (.xlsx)` (padrão) ou `CSV (.csv)`.
6. clique em `EXPORTAR LISTA`.
7. na janela `Confirmação da Pesquisa`, revise os filtros. se aparecer `Você selecionou poucos filtros...`, a lista pode ficar muito grande. clique em `Confirmar e Exportar` ou `Voltar`.
8. se o navegador pedir, permita as notificações: você recebe `DadosPJ — Lista de empresas pronta!` quando terminar.
9. acompanhe `Gerando lista de empresas...` e o número de registros processados.
10. ao terminar, o download começa sozinho. se não começar, clique em `Baixar arquivo` ou `Baixar Arquivo Gerado`.

## resultado
o arquivo está no seu computador e a lista aparece no histórico do `Dashboard` por 7 dias.

## se der errado
- mensagens ao gerar: `pj-erros-ao-gerar-lista`.
- `LIMPAR FILTROS` volta tudo ao padrão (Situação Ativa, Não MEI, Excel).
