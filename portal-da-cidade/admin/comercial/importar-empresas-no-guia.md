---
id: importar-empresas-no-guia
titulo: importar empresas no Guia a partir de lista do Google Maps
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
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

antes de importar, você gera a lista no extrator do Google Maps (GMAPS): em `Nova extração`, escolha `Base para portal`, depois o estado e a cidade, o bairro (vários separados por vírgula) ou o nicho (por exemplo, imobiliária) e o crédito máximo que quer usar (por exemplo, 100). não mexa no arquivo gerado.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas] [t=170]
2. No topo da página, clique no botão `Importar do Google Maps`. [guia=guia-empresas.importar] [t=177]
3. No quadro `Enviar planilha`, escolha o arquivo "Base para Portal" que o extrator do Google Maps gerou. [guia=guia-empresas-importar.arquivo] [t=183]
4. O sistema mostra o total de linhas e quantas são novas, e sinaliza as empresas que já existem ou vieram com problema.
5. Espere a mensagem "Enviando e processando a planilha..." terminar. [guia=guia-empresas-importar.arquivo]
6. Na revisão, para cada categoria que veio do arquivo e marcada com `Escolha a categoria`, escolha qual categoria do Guia ela vai usar. [guia=guia-empresas-importar.categorias] [t=255]
7. Clique em `Importar … empresas` e espere terminar. [guia=guia-empresas-importar.importar] [t=312]
8. Se a importação parar no meio por erro, clique em `Continuar`. [guia=guia-empresas-importar.continuar]
9. No final, clique em `Ver empresas` para conferir. [guia=guia-empresas-importar.ver-empresas] [t=440]
10. Mais abaixo, em `Importações anteriores`, ficam as importações já feitas, que podem ser abertas de novo. [guia=guia-empresas-importar.anteriores]

## resultado

as empresas do arquivo entram no Guia.

## desvios

- `Desfazer` apaga as empresas criadas naquele lote; use só se for preciso.
- O Guia precisa estar ligado no portal.
- As categorias vêm do Google em inglês. O sistema reconhece algumas e não reconhece outras (por exemplo, consultor ou centro empresarial). Ele não cria categoria nova sozinho: para cada categoria não reconhecida, você escolhe uma categoria que já exista no Guia.
- As empresas importadas entram no plano gratuito, de visibilidade pequena: a ficha pode aparecer só com o nome e o endereço. Telefone, galeria, descrição e horário só aparecem se a empresa passar para um plano pago.
- Alguns horários podem entrar em formato incorreto e precisam de ajuste.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/importar/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-guia-empresas-importar.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
