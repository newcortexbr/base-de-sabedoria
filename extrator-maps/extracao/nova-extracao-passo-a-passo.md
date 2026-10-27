---
id: ext-nova-extracao-passo-a-passo
titulo: "fazer uma nova extração: as 6 etapas, campo a campo"
publico:
  - cliente
modulo: extracao
aba: Nova extração
tipo_problema:
  - nova-extracao
  - como-extrair
  - extrair-empresas
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-27
validacao: codigo-e-video
videos:
  - R9FCgunNxFE
  - F136_v1JyRY
---

## objetivo
gerar uma lista de empresas do Google Maps do começo ao fim.

## pré-requisitos
- estar logado no Extrator.
- ter pelo menos 25 créditos (veja `ext-creditos-como-funcionam`).
- ter menos de 2 extrações em andamento (veja `ext-limites-da-extracao`).

## explicação
- a tela `Nova extração` é um assistente de 6 etapas ("Etapa N de 6"): `Finalidade`, `Localização`, `Nicho`, `Quantidade`, `Formato`, `Confirmação`, com os botões `Voltar` e `Avançar` e uma barra de progresso. no topo há o vídeo "Regras de uso e como funciona": "Assista antes de gerar sua primeira lista: são poucos minutos e evitam erro na extração."
- cada combinação cidade × nicho × bairro é uma busca separada, e o limite de registros vale para cada busca (veja `ext-quantidade-e-custo-maximo`).
- você pode fechar a página depois de iniciar: a extração continua no servidor e aparece no `Histórico`.

## passos
1. no menu lateral, clique em `Nova extração` (ou no botão de mesmo nome no `Dashboard`).
2. etapa `Finalidade`: escolha `Prospecção` ou `Base para Portal` (veja `ext-prospeccao-ou-base-para-portal`) e clique em `Avançar`. com saldo abaixo de 25 créditos o `Avançar` fica travado e aparece "Você precisa de pelo menos 25 créditos para iniciar uma extração. Seu saldo é de X créditos." com o link `Comprar créditos`.
3. etapa `Localização`:
   - em `Estado`, busque ("Buscar estado...", aceita sem acento) e escolha o estado.
   - em `Cidades (n/5)`, busque ("Buscar cidade...") e escolha de 1 a 5 cidades; cada uma entra numa lista com `Remover`. sem escolher o estado antes, o campo mostra "Selecione um estado primeiro". trocar o estado apaga as cidades escolhidas.
   - `Bairros (opcional)`: só aparece liberado com UMA cidade. digite o bairro e separe por vírgula ou Enter (até 5 bairros, até 120 caracteres cada, repetidos são ignorados). dica da tela: "Separe por vírgula. Cada bairro vira uma busca separada, com o mesmo limite de registros."
   - bairro aceita com ou sem acento. use bairro só se a estratégia for por bairro; sem bairro a busca cobre a cidade toda.
   - com 2 ou mais cidades, os bairros já digitados são apagados e aparece "Para filtrar por bairro, selecione apenas uma cidade."
4. etapa `Nicho` (opcional): veja `ext-escolher-o-nicho`.
5. etapa `Quantidade`: preencha `Quantidade máxima de registros` (com "por busca" quando há mais de uma busca). a tela mostra "Saldo disponível: X créditos." e "N cidade(s) × N categoria(s) × N bairro(s) = N buscas."
6. etapa `Formato`: em `Formato do arquivo`, escolha `CSV` ou `XLSX`. em `Base para Portal` o CSV fica desabilitado, com o texto "A Base para Portal sai sempre em XLSX, o formato que o importador do Portal da Cidade aceita."
7. etapa `Confirmação`: confira o `Resumo` (Finalidade, Cidades e bairros, Categorias, Buscas, Quantidade máxima solicitada, Saldo atual, Formato) e o texto "Cobra-se 1 crédito por registro retornado, limitado a X registros [em cada uma das N buscas]. Gasto máximo desta extração: Y créditos."
8. clique em `Iniciar extração` (aparece "Iniciando..."). você é levado ao acompanhamento (veja `ext-acompanhar-extracao`).

## resultado
a extração entra na fila e roda. ao concluir, o arquivo fica disponível para baixar por 7 dias (veja `ext-baixar-arquivos`).

## se der errado
- janela "Não foi possível iniciar a extração" com `Entendi` (e `Comprar créditos` se for saldo): veja `ext-erros-ao-iniciar-extracao`.
- `Não foi possível carregar os dados necessários. Tente novamente.`: recarregue a página.
- `Nenhum estado encontrado.` / `Nenhuma cidade encontrada.` / `Não foi possível carregar as cidades. Tente novamente.`: confira a escrita ou tente de novo.
- o código não mostra colunas ou filtros extras: não dá para escolher colunas nem filtrar "só com telefone/site"; a planilha vem completa (no vídeo, a dica é apagar as colunas que não interessam direto no Excel).
