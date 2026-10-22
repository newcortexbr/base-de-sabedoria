---
id: pj-colunas-do-arquivo
titulo: "colunas do arquivo exportado"
publico:
  - cliente
modulo: arquivos
aba: Gerar Lista de Empresas
tipo_problema:
  - colunas
  - planilha
  - excel
  - csv
  - socios
  - telefones
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - IKdKLgi-e94
produto: dados-pj
---

## objetivo
saber o que cada coluna do arquivo traz.

## pré-requisitos
- um arquivo baixado.

## explicação
o arquivo tem 25 colunas, nesta ordem, com o nome técnico no cabeçalho:
- `cnpj`, `razao_social`, `nome_fantasia`, `matriz_filial`, `situacao_cadastral`, `natureza_juridica`
- `cnae_fiscal`: CNAE principal
- `porte_empresa`, `capital_social`, `opcao_simples` (optante pelo Simples), `MEINAOMEI` (se é MEI)
- `data_inicio_atividades`: data de abertura (no Excel, dd/mm/aaaa)
- `correio_eletronico`: e-mail cadastrado na Receita
- `TEL1`, `TEL2`, `TEL3`: até 3 telefones; não há outras colunas de telefone
- `logradouro`, `num_fachada`, `complemento`, `bairro`, `cep`, `municipio`, `uf`
- `socios` e `qualificacoes_socios`: sócios e a qualificação de cada um

dicas:
- CNPJ e telefones vêm como texto, para não perder zeros.
- os dados são os da Receita: e-mail e telefone podem estar vazios ou desatualizados.
- use os filtros do Excel para refinar (ex.: data de abertura, telefones fixos).

## passos
1. abra o arquivo no Excel ou em outra planilha.
2. ative o filtro na linha de cabeçalho.
3. filtre pelas colunas de interesse.

## resultado
você sabe onde está cada dado.
