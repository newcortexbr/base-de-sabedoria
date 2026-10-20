---
id: testar-conexao-asaas
titulo: "testar a conexão da conta Asaas que já está ligada"
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - lwaG-T87hJI
---

## objetivo
aqui você confere se a conta Asaas do portal está conectada e se a cobrança pelo Asaas está ligada. Depois testa a conexão com um clique.

## pré-requisitos

- Importante: a chave dá acesso total à sua conta Asaas. Cole-a só no campo do portal; nunca mande por conversa, e-mail, chamado ou para o assistente.
- Ter acesso administrativo ao portal.
- Ter uma conta no Asaas com usuário administrador (só administrador cria chave de API).
- Usar o Asaas pelo navegador do computador: a chave não pode ser gerada pelo aplicativo de celular.

## passos

1. No menu da esquerda do painel, na parte `Sistema`, clique em `Configurações` e depois em `Cobrança`. [guia=menu:/painel/configuracoes/cobranca]
2. No quadro `Conta Asaas`, veja o estado. Ele deve mostrar `✓ Conectada`. [guia=cobranca.estado]
3. Confira se a opção `Cobrar pelo Asaas` está ligada. [guia=cobranca.cobrar-pelo-asaas]
4. Para conferir uma conta já ligada, clique em `Testar conexão`. [guia=cobranca.testar]

## resultado
Se estiver tudo certo, o teste confirma a conexão. Se der erro, aparece uma mensagem com o motivo.

## desvios

- Conectada não é o mesmo que cobrando: com `Cobrar pelo Asaas` desligado, nada é cobrado pelo Asaas.
- Conta aprovada é assunto do próprio Asaas: se o Asaas avisar que a conta está em análise ou pede documentos, isso é resolvido lá, não no portal.
- Se aparecer o aviso de que a cobrança funciona mas a confirmação automática não, os pagamentos pelo link precisam ser confirmados à mão no Financeiro enquanto o aviso estiver lá.
- Chave sumiu no Asaas: ela não pode ser recuperada; gere uma nova e repita a partir de gerar a chave de API.
- Conexão não significa, por si só, que uma fatura foi enviada, paga ou confirmada; a via de cobrança pode variar por fatura.

## quando pedir ajuda

peça ajuda humana se não souber qual conta ou chave usar, se a conexão falhar ou se houver dúvida sobre a cobrança de uma fatura específica. A IA só orienta e nunca acessa ou altera credenciais, cobrança ou permissões.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:9-16,40-45,47-64,75-94`
- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:3-13,61-71`
- `portal-cidade/CLAUDE.md:41-42`
- https://docs.asaas.com/docs/chaves-de-api (chave criada pela web, só por administrador, exibida uma vez, em Integrações > Chaves de API)
- `portal-cidade/docs/PRODUCT.md:196-205`

## lacunas

os nomes dos menus do Asaas seguem a documentação oficial e a tela do portal; o Asaas pode mudar rótulos sem aviso. A conexão não foi validada em ambiente real (sem conta ou chave de teste).
