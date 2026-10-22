---
id: ext-baixar-arquivos
titulo: "baixar o arquivo da extração (validade de 7 dias, nome e formato)"
publico:
  - cliente
modulo: arquivos
aba: Detalhe da extração
tipo_problema:
  - baixar-arquivo
  - arquivo-expirado
  - validade-do-arquivo
  - acentos-estranhos
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - R9FCgunNxFE
  - F136_v1JyRY
---

## objetivo
baixar a planilha e saber até quando ela está disponível.

## pré-requisitos
- extração em `Concluída` ou `Concluída parcialmente`.

## explicação
- os arquivos ficam disponíveis por 7 dias contados da geração. depois aparecem como "Arquivo expirado". o PRD antigo dizia 15 dias; vale o código e o vídeo, que dizem 7.
- não há botão para gerar de novo um arquivo expirado. a equipe guarda uma cópia interna; a recuperação depende do suporte e não é garantida.
- nomes: Prospecção `leads_<cidade>_<AAAAMMDD_HHMM>_<id>.csv` ou `.xlsx`; Base para Portal `portal_empresas_<cidade>_<AAAAMMDD>_<id>.xlsx`. a data é em UTC.
- `CSV` vem em UTF-8 com BOM. se os acentos aparecerem estranhos no Excel, importe o CSV como UTF-8 ou refaça a extração em `XLSX`.
- o vídeo mostra que o download é imediato e pode ser repetido enquanto o arquivo não expirar.
- a planilha é sua para editar: no vídeo, apaga-se o que não interessa antes de usar.

## passos
1. em `Dashboard` (`Últimas extrações`), `Histórico` ou na tela da extração (`Arquivos gerados`), clique em `Baixar` ao lado do arquivo; o texto mostra o tamanho e "expira em dd/mm/aaaa hh:mm".
2. salve o arquivo no computador.
3. abra no Excel ou use na importação do portal (`ext-importar-no-guia-do-portal`).

## resultado
o arquivo é baixado na hora.

## se der errado
- `Arquivo expirado.` / "Arquivo expirado (data)": passou de 7 dias. faça outra extração (consome créditos) ou peça ao suporte; não há regeneração pelo cliente.
- `Link de download expirado. Solicite o download novamente.`: volte à tela e clique em `Baixar` de novo.
- `Arquivo não encontrado.`: abra chamado no suporte.
- arquivos que não foram gerados: veja `ext-acompanhar-extracao`.
