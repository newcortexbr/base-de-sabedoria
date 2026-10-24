---
id: mudar-valor-do-anuncio-de-vaga
titulo: "mudar o valor do anúncio de vaga de emprego"
publico:
  - admin
modulo: planos
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 31ftVMQ_yr4
---

## objetivo

O preço das vagas é configurável em `Meus Planos`, no cartão `Vagas de Emprego`. Você muda o preço do plano oferecido aos clientes.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Identificar o plano pago e a periodicidade que deseja alterar.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Planos`. [t=10] [guia=menu:/painel/planos]
2. No cartão `Vagas de Emprego`, clique em `Gerenciar` ou `Definir preço`, conforme o texto exibido. [t=88] [guia=planos.secao-vagas]
3. Se houver abas, clique na periodicidade do plano que deseja alterar, como `Mensal` ou `Pagamento Único`. [t=95] [guia=planos.periodicidade]
4. No cartão do plano desejado, clique em `Editar`. [t=154] [guia=planos.editar]
5. Preencha `Preço *` com o valor que deseja cobrar. [t=157] [guia=planos.preco]
6. Clique em `Salvar`. [guia=planos.salvar]

## resultado

O preço do plano é atualizado após salvar. Confira o valor no cartão da periodicidade escolhida.

## desvios

O plano gratuito é a opção de entrada e não tem preço de venda para alterar. `Como o cliente paga` fica travado na edição; para outra periodicidade, a tela pode oferecer `Mais planos`. Limites e benefícios do plano fixo não mudam por essa janela.

## limites da orientação

Não foi verificado o efeito sobre contratos atuais ou faturas emitidas. Este procedimento não edita o valor de uma fatura específica.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/planos/page.tsx:129`
- `portal-cidade/frontend/src/app/painel/planos/[secao]/JanelaEditarPlano.tsx:35`
- `portal-cidade/frontend/src/app/painel/planos/[secao]/Escada.tsx:50`
- `portal-cidade/frontend/src/app/painel/planos/[secao]/Degrau.tsx:109`
- `portal-cidade/backend/comercial/catalogo.py:88`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
