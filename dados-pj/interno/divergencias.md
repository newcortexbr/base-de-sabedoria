# divergências e lacunas — Dados PJ (interno, não vai ao chat)

código = `dadospj-backend` `2dd8a3b` + `dadospj-frontend` `16768d4`. vídeos: JXWDV_IiAWQ (regras de uso), IKdKLgi-e94 (como extrair listas). caminhos: `B/` = `dadospj-backend/consultas/`, `F/` = `dadospj-frontend/src/`.

## divergências

1. data de início de atividades
   - vídeo IKd (07:35): "empresas de janeiro de 2025 para cá".
   - código: `data_inicio_atividades <= data` (`B/utils.py:247`); tooltip "até a data informada" (`F/MailingFormPage.js:762`); confirmação "Início atividade ≤". adotado: o código (empresas abertas ATÉ a data). se a intenção do produto é "a partir de", é defeito a corrigir no código.
2. telefone "Fixo"
   - vídeo IKd (11:43): marcar "só fixo" traz só fixos.
   - código: o rádio `Fixo` tem valor `""`, o mesmo de `Móveis + Fixos` (`F/MailingFormPage.js:845-855`); o backend só filtra com `movel`, `fixo` ou `ambos` (`B/utils.py:262-284`). resultado: `Fixo` e `Móveis + Fixos` não filtram nada (nem exigem telefone). adotado: o artigo descreve o comportamento atual. defeito a reportar ao dono do DadosPJ.
3. termo de busca
   - vídeo IKd (02:06): "não dá não, é só uma palavra mesmo".
   - código: aceita várias palavras; com 3+ letras busca por prefixo de cada palavra em modo booleano (qualquer uma) (`B/utils.py:232-236`). adotado: o código.
4. colunas de telefone
   - vídeo IKd (14:31): "tem mais colunas de telefone, se tiver". código: só TEL1–TEL3 (`B/utils.py:119-145`). adotado: o código.
5. estado
   - vídeo JXW (02:06): o estado é o do portal comprado. código: UFs das licenças ATIVAS (`B/territorio.py:159-165`); com mais de uma, escolhe-se uma por lista. equivalem para quem tem um só estado.
6. fechar a janela
   - vídeo IKd (12:25): "pode fechar, mas não recomendo". código: a exportação roda no Celery e a tela retoma pelo estado salvo no navegador (`F/MailingFormPage.js:380-395`). artigos dizem que pode fechar e repetem a recomendação.
7. números da base
   - vídeo JXW (01:24): 70.399.461 empresas, atualização em 15/09. código: lidos da base a cada acesso (`B/views/metrics.py:48-55`). artigos não citam número fixo.
8. sem conflito: 2 listas por semana (`B/planos.py:26`), renovação na segunda sem acumular (`B/planos.py:47-53`), 1 crédito por lista e não por linha, lista vazia não cobra (`B/planos.py:31-33, 95-104`), 1 a 3 cidades (`B/territorio.py:58`), 7 dias de arquivo (`B/views/exportacao.py:384`), corte em 200.000 linhas por arquivo (`B/tasks.py:43`), padrões Situação Ativa e Não MEI (`F/MailingFormPage.js:195, 200`).
9. artigo `ac-ferramentas-dadospj`: dizia "não foi confirmado se há limite de uso" e citava o plano antigo "DADOS B2B, 2 extrações por semana". código confirma 2 por semana (plano `newcortex`). corrigido.

## lacunas

- valores reais de `situacao_cadastral` e `porte_empresa` na base MySQL (a tela manda "Ativa", "ME", "EPP", "Demais"): não conferidos; se não baterem, o filtro devolve vazio.
- vídeos embutidos no DadosPJ (`F/config.js`) ainda são URL provisória: o cliente vê um vídeo errado nas telas.
- "não importe esta lista no Portal": orientação do vídeo IKd (09:39); lado do Portal não conferido.
- textos das recusas da Área do Cliente (suspensa, cancelada, bloqueada): vêm do artigo `ac-ferramentas-dadospj`, não reconferidos nesta rodada.
- planos `mensal` (5/semana) e `anual` (10/semana) existem no código para contas antigas; cliente do SSO é sempre `newcortex`. não documentado para o cliente.
- link de WhatsApp de suporte (dois encurtadores diferentes em `F/LoginPage.js:10` e `F/config.js`): não conferido o destino.
- vídeo prometido "como tratar os arquivos" não está nas fontes.
- transcrições automáticas: "kinai" = CNAE, "DATS PJ" = Dados PJ.
