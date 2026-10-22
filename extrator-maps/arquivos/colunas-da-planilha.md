---
id: ext-colunas-da-planilha
titulo: "o que vem na planilha: colunas de Prospecção e de Base para Portal"
publico:
  - cliente
modulo: arquivos
aba: Arquivos
tipo_problema:
  - colunas
  - o-que-vem-na-planilha
  - dados-da-empresa
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - F136_v1JyRY
  - R9FCgunNxFE
---

## objetivo
saber quais dados cada tipo de planilha traz.

## pré-requisitos
- nenhum.

## explicação
- não dá para escolher colunas nem filtros (como "só com telefone"): sai tudo. campos sem dado no Google vêm vazios.
- `Prospecção` (33 colunas, em português): Nome da empresa, Nome original, Categoria, Descrição, Resumo, Endereço completo, Logradouro, Bairro, Cidade, CEP, Região/UF, País, Telefone, Telefones adicionais, E-mail, Site, Domínio, Links do negócio (cardápio, pedido), Latitude, Longitude, Nota, Quantidade de avaliações, Faixa de preço, Serviços e itens, Segunda-feira a Domingo (7 colunas), Primeira vez visto, Última atualização.
- `Base para Portal` (colunas técnicas, formato do importador): `place_id`, `cid`, `nome`, `descricao_original`, `categoria_principal`, `categorias_adicionais`, `endereco_completo`, `logradouro`, `bairro`, `cidade`, `estado`, `cep`, `pais`, `telefone`, `site`, `dominio`, `latitude`, `longitude`, `nota_google`, `qtd_avaliacoes`, `logo_url`, `imagem_principal_url`, `total_fotos`, `segunda` a `domingo`, `google_maps_url`, `data_primeira_coleta`, `data_ultima_atualizacao`. o vídeo percorre essa lista (place ID, nome, descrição, categorias, endereço, telefone, site, nota, logo, fotos, horários, link do Google Maps).
- o Google devolve a categoria em inglês; é padrão da fonte.
- para importar no Portal, o vídeo sobe o arquivo como veio, sem mexer nele (`ext-importar-no-guia-do-portal`).

## passos
1. gere a extração com a finalidade desejada (`ext-prospeccao-ou-base-para-portal`).
2. baixe e abra a planilha (`ext-baixar-arquivos`).
3. para prospecção, apague as colunas que não usa.

## resultado
você sabe o que esperar na planilha.

## se der errado
- coluna vazia: o dado não está no Google para aquela empresa.
