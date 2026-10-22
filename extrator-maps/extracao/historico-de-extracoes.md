---
id: ext-historico
titulo: "Histórico de extrações: filtros, detalhes e arquivos"
publico:
  - cliente
modulo: extracao
aba: Histórico
tipo_problema:
  - historico
  - extracoes-anteriores
  - filtrar-extracoes
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - R9FCgunNxFE
  - F136_v1JyRY
---

## objetivo
encontrar extrações antigas e baixar seus arquivos.

## pré-requisitos
- ter pelo menos uma extração.

## explicação
- a tela `Histórico de extrações` ("Todas as extrações da sua conta, com status, resultado e arquivos disponíveis.") lista tudo, mesmo se você fechou a página durante a extração.
- filtros: `Status` (Todos + cada status), `Modo` (Todos / Prospecção / Base para Portal), `De`, `Até`, e o botão `Limpar filtros`. datas inválidas mostram "Data inicial inválida." / "Data final inválida."
- cada linha mostra "#" e o código curto, a data, as cidades como `Cidade/UF` com bairro e categoria (ou "categoria: busca ampla"), "X de Y solicitados · Z créditos consumidos" e os botões de download.
- o botão de download mostra o formato do arquivo e a validade; depois dela vira "Arquivo expirado (data)". o vídeo mostra, por exemplo, "essa base expira no dia 12 do 10, às 10:42".
- paginação: `Anterior` / `Próxima`.

## passos
1. clique em `Histórico` no menu lateral.
2. use os filtros se precisar e clique no registro para ver o detalhe (veja `ext-acompanhar-extracao`).
3. clique no botão `Baixar` da linha (veja `ext-baixar-arquivos`).

## resultado
você reencontra extrações e baixa os arquivos ainda válidos.

## se der errado
- "Nenhuma extração ainda" / "Suas extrações vão aparecer aqui assim que você criar a primeira.": sem extrações.
- "Nenhuma extração encontrada" / "Nenhuma extração corresponde aos filtros selecionados. Tente ajustá-los.": use `Limpar filtros`.
- `Não foi possível carregar o histórico. Tente novamente.`
