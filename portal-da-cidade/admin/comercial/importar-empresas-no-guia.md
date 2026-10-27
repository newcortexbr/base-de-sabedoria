---
id: importar-empresas-no-guia
titulo: importar empresas no Guia a partir de lista do Google Maps
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - google maps
  - importar
  - empresa
  - guia
  - lote
  - cadastro
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - jl7GHmHVJcM
  - R9FCgunNxFE
  - F136_v1JyRY
---

## objetivo

aqui você cadastra várias empresas de uma vez, com o arquivo gerado pelo extrator do Google Maps.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## explicação

Prepare o arquivo `Base para Portal` no extrator do Google Maps antes de começar. Este roteiro cobre o envio ao portal; não pressupõe créditos, preços ou opções atuais de outro aplicativo.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas] [t=170]
2. Clique em `Importar do Google Maps`. [guia=guia-empresas.importar] [t=177]
3. Em `Enviar planilha`, escolha o arquivo `.xlsx` de `Base para Portal` gerado pelo extrator do Google Maps. Aguarde o processamento. [guia=guia-empresas-importar.arquivo] [t=183]
4. Na revisão, escolha a categoria do portal para cada grupo marcado com `Escolha a categoria`. [guia=guia-empresas-importar.categorias] [t=255]
5. Clique em `Importar … empresas`, com a quantidade mostrada na tela. Aguarde a conclusão. [guia=guia-empresas-importar.importar] [t=312]
6. No resultado, clique em `Ver empresas`. [guia=guia-empresas-importar.ver-empresas] [t=440]

## revisão (depois de enviar a planilha)

- cartões: `Total de linhas`, `Novas`, `Já existem` (serão ignoradas) e `Com problema` (a lista `Linhas com problema` mostra linha, nome e motivo).
- o Google devolve a categoria em inglês e outras categorias do mesmo ramo (ex.: ao extrair imobiliária vêm também corretores). o portal agrupa por categoria do Google, mostra o nome em português quando conhece e já preenche a categoria do portal que reconhece (marca `sugestão`).
- o que o portal não reconhece fica marcado com `Escolha a categoria` e bloqueia `Importar … empresas` até ser escolhido. as opções são só as categorias já existentes no portal.
- o portal lembra a escolha (`escolhido na importação anterior`) nas próximas importações.
- durante a importação mostra `Criadas`, `Ignoradas` e `Com erro`; há `Pausar`. não feche a aba até concluir. `Avisos` lista dados faltantes por empresa (ex.: foto não importada; a foto pode ser enviada na edição da empresa).
- no resultado, além de `Ver empresas` e `Desfazer importação`, `Importar outra planilha` volta ao envio.

## retomar uma importação interrompida

1. Depois de abrir a importação pelos dois primeiros passos, abra o lote em `Importações anteriores`. [guia=guia-empresas-importar.abrir-lote]
2. Clique em `Continuar`. [guia=guia-empresas-importar.continuar]

## resultado

O portal apresenta o resultado do lote. O número importado pode ser menor que o de linhas do arquivo, conforme as linhas já existentes e os problemas apresentados na revisão.

## desvios

- Se a importação for interrompida, reabra o lote em `Importações anteriores` e use `Continuar`; o lote retoma de onde parou.
- A revisão não cria categorias novas: escolha uma categoria existente para cada grupo pendente.
- `Desfazer importação` tem artigo próprio.
- Empresas importadas seguem as regras de plano aplicáveis a essa origem. Sem plano pago, a página pública da empresa mostra pouco (nome, endereço e, se vierem no arquivo, descrição e horário); telefone, galeria de fotos e demais campos pagos só aparecem após o upgrade. Estratégia recomendada: importar para ter o portal com empresas e depois oferecer o upgrade. Não suponha que toda empresa importada terá só nome e endereço.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/importar/page.tsx:25,370-384,435-498,509-574,621`.
- `portal-cidade/backend/comercial/direitos.py:19-23`.

## lacunas

Sem envio real de arquivo nem validação do extrator externo. Os horários e dados trazidos dependem do arquivo; não se presume que estejam corretos.
