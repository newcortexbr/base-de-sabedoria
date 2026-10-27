---
id: mudar-plano-de-um-parceiro
titulo: "mudar os dados ou o plano de um parceiro"
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - parceiro
  - plano
  - editar
  - dados
  - comissao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

Aqui você edita os dados de um parceiro e escolhe outro plano para ele. Para alterar o percentual de todos os parceiros do plano, veja `mudar-comissao-do-plano-de-parceiro.md`.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [t=8] [guia=menu:/painel/parceiros]
2. Em `Seus parceiros`, clique no lápis `Editar dados e plano` da pessoa desejada. [t=83] [guia=parceiros.editar-dados-plano]
3. Se precisar, altere `Nome *`. [guia=parceiros.nome]
4. Se precisar, altere `Telefone`. [guia=parceiros.telefone]
5. Se precisar, altere `WhatsApp`. [guia=parceiros.whatsapp]
6. Em `Plano do parceiro`, escolha o novo plano ativo. [t=83] [guia=parceiros.plano]
7. Se o novo plano for pago e já foi acertado fora do portal, selecione `Já paguei / acertei por fora`. [guia=parceiros.plano-por-fora]
8. Clique em `Salvar`. [guia=parceiros.salvar]

## resultado

Os dados são atualizados. Ao escolher um plano pago acertado por fora, ele vale imediatamente.

## desvios

O e-mail de acesso fica somente para leitura. Para gerar cobrança do novo plano, use o caminho de `cobrar-plano-de-parceiro-pelo-asaas.md`. Os nomes dos planos podem ter sido alterados pelo administrador.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:296`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:323`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:329`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:381`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:601`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
