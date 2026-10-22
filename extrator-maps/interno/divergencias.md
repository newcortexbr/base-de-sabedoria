# divergências e lacunas — Extrator Maps (interno, não vai ao chat)

código = `newcortexbr/extrator_maps` `abc8267`. vídeos: F136_v1JyRY (visão geral), R9FCgunNxFE (direto ao ponto), jl7GHmHVJcM (importar no Portal).

## divergências

1. créditos de boas-vindas
   - vídeo F136 (00:43): fala "500 créditos" e se corrige para "200 créditos que você recebe gratuitamente".
   - código: `WELCOME_CREDITS = 200` (`src/server/usecases/credits/grant-welcome-credits.ts:8`; 500 até 28/09/2026). artigo antigo `ac-ferramentas-extrator-maps` dizia 500. adotado: 200 (contas antigas mantêm o que receberam).
2. o que a Prospecção traz
   - vídeo R9F (01:24): a lista de Prospecção "não vem com foto, avaliação do Google, link do Google, link da logo". vídeo F136: "vem redes sociais".
   - código (`prospecting-schema.ts`): inclui Nota e Quantidade de avaliações; não tem foto, logo, link do Google Maps nem redes sociais. adotado: o código.
3. bairros com várias cidades
   - vídeo F136 (06:10): com 2 cidades e 2 bairros a tela mostrou "são quatro buscas"; o autor então aconselha não usar bairro com mais de uma cidade.
   - código: com 2+ cidades os bairros são apagados e a tela diz "Para filtrar por bairro, selecione apenas uma cidade." adotado: o código (o vídeo pode ser de versão anterior).
4. acento nos bairros
   - vídeos F136 e R9F: sugerem escrever bairros sem acento.
   - código/decisão do produto: bairro ignora acento e maiúsculas. adotado: aceitar com ou sem acento.
5. prazo dos arquivos
   - vídeos: 7 dias. código: 7 dias. PRD: 15 dias (desatualizado). sem conflito entre vídeo e código.
6. pagamento
   - vídeo F136 (03:27): "isso não tá integrado aqui ainda, mas ... automaticamente os créditos são liberados". código: integrado ao Asaas; crédito entra após confirmação (pode levar minutos). adotado: o código.
7. nicho "por cidade"
   - vídeo R9F (04:48): "ele vai pegar 100 por cidade". código: o limite vale por busca (cidade × categoria × bairro). equivalem quando há 1 nicho e sem bairro.
8. número de colunas de Prospecção
   - dossiê: 33 colunas (conferido por contagem no código: 33). artigo cita 33.
9. rótulo de download no Histórico
   - código: o botão usa o formato do arquivo (`Baixar {CSV|XLSX}`). o dossiê cita "Baixar CSV" e há "CSV · Arquivo expirado" para expirados; o rótulo exato do expirado pode variar com o formato. artigos descrevem genericamente.
10. fluxo de login
    - vídeos não mostram login; o artigo antigo dizia só "sem senha nova". código: o Extrator tem `/login` próprio e o botão `Entrar com a Área do Cliente`; conta vinculada não aceita senha local.

## lacunas (o código não esclarece)

- valores e nomes dos pacotes de créditos: cadastrados no banco pelo admin. os preços do vídeo F136 (200 créditos, 500 por R$ 9,90, 10.000 por R$ 399) são exemplo e podem estar defasados.
- quais licenças/produtos dão direito ao Extrator e o que a Área do Cliente faz com a conta quando a licença é suspensa: a regra mora na Área do Cliente; o Extrator só derruba sessões.
- o login `?erro=sso*` não mostra texto na tela; o cliente não sabe o motivo.
- mensagem exata do limite de 20 criações/minuto.
- deduplicação entre buscas que se sobrepõem: não encontrada.
- validade dos créditos: não encontrada regra de expiração.
- recuperação de arquivo expirado via cópia no Drive: só o suporte pode tentar; não confirmado como procedimento.
- motivos técnicos por cidade (ex.: "Chamada despachada sem desfecho conhecido...") aparecem crus na tela em falhas.
- vídeos de Dashboard e Nova extração no Extrator usam o mesmo ID provisório.
- o vídeo jl7GHmHVJcM descreve a tela do Portal (opções "desfazer importação" etc.) que não foi conferida no código aqui; o lado do Portal fica no artigo `importar-empresas-no-guia`.
- transcrições automáticas: nomes e palavras podem estar erradas ("Extraindo Contatos na GMaps" é o título no arquivo de transcrição de R9F; o catálogo usa "Como realizar extração Maps - Direto ao ponto").
