---
id: conectar-asaas-e-entender-cobranca
titulo: conectar a conta Asaas e entender a cobrança
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

conectar a conta Asaas do portal pelo próprio chat, passo a passo, e entender a diferença entre conta conectada, conta aprovada no Asaas e cobrança ligada.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Ter uma conta no Asaas com usuário administrador (só administrador cria chave de API).
- Usar o Asaas pelo navegador do computador: a chave não pode ser gerada pelo aplicativo de celular.

## passos

1. No menu da esquerda do painel, na parte `Sistema`, clique em `Configurações` e depois em `Cobrança` (`/painel/configuracoes/cobranca`). [guia=menu:/painel/configuracoes/cobranca] [t=9]
2. No quadro `Conta Asaas`, veja o estado: `Não conectada`, `✓ Conectada` ou `Desligada`. Se já estiver `✓ Conectada`, pule para o passo 13. [guia=cobranca.estado] [t=15]
3. Em outra aba do navegador, entre na sua conta em asaas.com com seu usuário e senha do Asaas. [t=44]
4. No Asaas, clique no seu nome, no canto superior direito, e depois em `Integrações`. [t=47]
5. Abra a parte `Chaves de API` e clique em `Gerar chave de API`. [t=54]
6. Dê um nome para a chave, por exemplo "portal da cidade". [t=66]
7. Deixe desmarcada a opção de saques pela API (o portal só precisa gerar cobranças) e clique em `Avançar`. [t=71]
8. Digite o código de segurança que o Asaas manda por SMS para o seu celular. [t=78]
9. Copie a chave assim que ela aparecer: o Asaas mostra a chave uma única vez. Se fechar sem copiar, gere outra. [t=85]
10. Volte à aba do painel e cole a chave no campo `Chave de API da sua conta Asaas`. [guia=cobranca.campo-chave] [t=96]
11. Clique em `Conectar`. [guia=cobranca.conectar] [t=101]
12. Aguarde a resposta: deu certo, aparece `✓ Conectada`; deu errado, aparece uma mensagem com o motivo (por exemplo, chave inválida ou revogada). [guia=cobranca.estado] [t=103]
13. Confira a opção `Cobrar pelo Asaas`: ligada, o cliente paga por link (Pix, boleto ou cartão) e a confirmação é automática; desligada, o pagamento mostra a sua chave Pix e você confirma no Financeiro. [guia=cobranca.cobrar-pelo-asaas] [t=125]
14. Para conferir uma conta já ligada, clique em `Testar conexão`. [guia=cobranca.testar] [t=120]
15. Para ver faturas e cobranças, no menu da esquerda, na parte `Comercial`, clique em `Financeiro` (`/painel/financeiro`). [guia=menu:/painel/financeiro] [t=148]

Importante: a chave dá acesso total à sua conta Asaas. Cole-a só no campo do portal; nunca mande por conversa, e-mail, chamado ou para o assistente.

## resultado

O quadro mostra `✓ Conectada` e a opção `Cobrar pelo Asaas` indica se a cobrança automática está ligada. O Financeiro apresenta as faturas e as opções de cada uma.

## desvios

- Conectada não é o mesmo que cobrando: com `Cobrar pelo Asaas` desligado, nada é cobrado pelo Asaas.
- Conta aprovada é assunto do próprio Asaas: se o Asaas avisar que a conta está em análise ou pede documentos, isso é resolvido lá, não no portal.
- Se aparecer o aviso de que a cobrança funciona mas a confirmação automática não, os pagamentos pelo link precisam ser confirmados à mão no Financeiro enquanto o aviso estiver lá.
- Chave sumiu no Asaas: ela não pode ser recuperada; gere uma nova e repita a partir do passo 5.
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
