---
id: ext-prospeccao-ou-base-para-portal
titulo: "Prospecção ou Base para Portal: qual finalidade escolher"
publico:
  - cliente
modulo: extracao
aba: Nova extração
tipo_problema:
  - finalidade
  - prospeccao
  - base-para-portal
  - formato-csv-xlsx
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - R9FCgunNxFE
  - F136_v1JyRY
  - jl7GHmHVJcM
---

## objetivo
escolher a finalidade certa na primeira etapa.

## pré-requisitos
- estar na etapa `Finalidade` da `Nova extração`.

## explicação
- a tela explica: "A finalidade define o formato do arquivo."
- `Prospecção`: lista de empresas com telefone, e-mail, site e endereço para a equipe comercial entrar em contato. sai em `CSV` ou `XLSX`. tem 33 colunas em português, incluindo Nome da empresa, Categoria, Descrição, Endereço completo, Bairro, Cidade, CEP, Telefone, Telefones adicionais, E-mail, Site, Domínio, Latitude, Longitude, Nota, Quantidade de avaliações, Faixa de preço, os horários de segunda a domingo, Primeira vez visto e Última atualização.
- `Base para Portal`: planilha no formato padrão (versão 1.0) para importar no Guia Comercial do Portal da Cidade. sai sempre em `XLSX`. colunas técnicas, como `place_id`, `nome`, `categoria_principal`, `telefone`, `site`, `nota_google`, `qtd_avaliacoes`, `logo_url`, `total_fotos`, os dias da semana e `google_maps_url`.
- no vídeo, a dica é gerar a `Base para Portal` (mais completa) e, se for só para prospectar, apagar no Excel as colunas que não interessa (deixando, por exemplo, nome, telefone e site).
- o vídeo diz que a Prospecção "não vem com foto, avaliação do Google, link do Google"; no código, a Prospecção inclui Nota e Quantidade de avaliações, mas não tem foto, logo nem link do Google Maps. vale o código.

## passos
1. para prospectar clientes: marque `Prospecção`.
2. para importar empresas no portal: marque `Base para Portal`.
3. clique em `Avançar`.

## resultado
a finalidade decide o formato do arquivo (na Base para Portal, só XLSX).

## se der errado
- `A Base para Portal só pode ser gerada em XLSX.`: escolha XLSX (ou volte e mude a finalidade).
