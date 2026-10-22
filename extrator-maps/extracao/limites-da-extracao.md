---
id: ext-limites-da-extracao
titulo: "limites do Extrator: 5 cidades, 5 bairros, 2 extrações ao mesmo tempo, 25 créditos"
publico:
  - cliente
modulo: extracao
aba: Nova extração
tipo_problema:
  - limites
  - maximo-de-cidades
  - extracoes-simultaneas
  - bairros
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - R9FCgunNxFE
  - F136_v1JyRY
---

## objetivo
conhecer os limites antes de montar uma extração.

## pré-requisitos
- nenhum.

## explicação
- cidades: até 5 por extração. na 6ª aparece "Máximo de 5 cidades por extração atingido. Remova uma para adicionar outra." para mais, faça outra extração.
- bairros: só com uma única cidade; até 5 bairros, 120 caracteres cada. com 2 ou mais cidades o campo é limpo e a tela diz "Para filtrar por bairro, selecione apenas uma cidade." (o vídeo aconselha: com mais de uma cidade, não use bairro).
- nicho: um por extração, ou em branco.
- formato: um só por extração (`CSV` ou `XLSX`).
- saldo mínimo para começar: 25 créditos. é uma trava da tela: "Você precisa de pelo menos 25 créditos para iniciar uma extração."
- extrações simultâneas: até 2 por cliente, entre as que estão na fila ou rodando. é um valor configurado pela equipe e pode mudar. ao atingir: "Você já tem o máximo de extrações simultâneas em andamento. Aguarde uma terminar."
- criação: no máximo 20 extrações criadas por minuto (limite de proteção).
- território: não há limite de região; você pode extrair qualquer estado ou cidade, mesmo fora da sua licença.
- arquivos: ficam disponíveis por 7 dias (veja `ext-baixar-arquivos`).

## passos
1. se bateu em um limite, ajuste a extração (menos cidades, remova bairros, escolha um nicho).
2. para mais de 5 cidades ou mais de um nicho, faça mais de uma extração em sequência.
3. se há 2 extrações em andamento, espere uma terminar (veja `ext-acompanhar-extracao`).

## resultado
você monta extrações dentro dos limites.

## se der errado
- veja `ext-erros-ao-iniciar-extracao`.
