---
id: conectar-asaas-e-entender-cobranca
titulo: "conectar a conta Asaas e entender a cobrança"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - pagamento
  - como recebo o dinheiro das empresas
  - receber pagamento dos planos vendidos
  - onde cai o dinheiro dos clientes
tags:
  - asaas
  - cobrar
  - pagamento
  - pix
  - fatura
  - conectar
  - configurar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - lwaG-T87hJI
---

## objetivo

Aqui você conecta a conta Asaas do portal com uma chave de API. Conta conectada e cobrança ligada têm estados próprios.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Ter uma chave da sua conta Asaas. Trate a chave como senha e cole somente no campo do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, abra `Configurações`. [t=11] [guia=sidebar.grupo-configuracoes]
2. Clique em `Cobrança`. [t=14] [guia=menu:/painel/configuracoes/cobranca]
3. Entre na sua conta no site do Asaas, em outra aba do navegador. [t=45] [guia=fora]
4. No Asaas, abra o menu do perfil no canto superior direito. [t=48] [guia=fora]
5. Escolha `Integrações`. [t=52] [guia=fora]
6. Abra `Chaves de API`. [t=58] [guia=fora]
7. Clique em `Gerar chave de API`. [t=64] [guia=fora]
8. Dê um nome à chave. [t=67] [guia=fora]
9. Deixe desmarcada a opção de saques via API. [t=72] [guia=fora]
10. Clique em `Avançar`. [t=78] [guia=fora]
11. Informe o código de segurança solicitado pelo Asaas. [t=81] [guia=fora]
12. Copie a chave exibida. [t=89] [guia=fora]
13. De volta ao portal, cole a chave em `Chave de API da sua conta Asaas`. [t=98] [guia=cobranca.campo-chave]
14. Clique em `Conectar`. [t=102] [guia=cobranca.conectar]
15. Confira o estado no quadro `Conta Asaas`. [t=107] [guia=cobranca.estado]

## resultado

Ao funcionar, aparece `Conectado com sucesso`. A conta com cobrança ligada mostra `✓ Conectada`; com cobrança desligada, mostra `Desligada`. A chave fica escondida.

## desvios

Conectar já liga a cobrança. O interruptor `Cobrar pelo Asaas` permite mudar essa escolha, sem apagar a chave. Se aparecer `A cobrança funciona, mas a confirmação automática não.`, siga o aviso da tela e confirme os pagamentos recebidos no Financeiro enquanto o problema persistir.

Faturas que já foram cobradas por Pix não mudam de via automaticamente ao conectar. Links Asaas emitidos antes de desligar podem continuar ativos e confirmar o pagamento.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:41`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:114`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:204`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:282`
- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:336`
- `portal-cidade/frontend/src/app/painel/financeiro/LinhaDaFatura.tsx:151`

## lacunas

O roteiro externo do Asaas acima foi localizado no vídeo, não no código do serviço externo. A ajuda da tela do portal usa os textos resumidos `Chave de API` e `Gerar chave`; o vídeo fala `Chaves de API` e `Gerar chave de API`. A interface externa atual, permissões de criação de chave, meios de pagamento disponíveis e prazos não foram verificados nesta tarefa.

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
