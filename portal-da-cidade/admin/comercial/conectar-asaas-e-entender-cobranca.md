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
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - lwaG-T87hJI
---

## objetivo

aqui você conecta a conta Asaas do portal, passo a passo. Conta conectada, conta aprovada no Asaas e cobrança ligada são coisas diferentes.

## pré-requisitos

- Importante: a chave dá acesso total à sua conta Asaas. Cole-a só no campo do portal; nunca mande por conversa, e-mail, chamado ou para o assistente.
- Ter acesso administrativo ao portal.
- Ter uma conta no Asaas com usuário administrador (só administrador cria chave de API).
- Usar o Asaas pelo navegador do computador: a chave não pode ser gerada pelo aplicativo de celular.

## veja também
- para ver se a conta Asaas já ligada continua funcionando, veja o artigo "testar a conexão da conta Asaas que já está ligada".

## passos

1. No menu da esquerda do painel, na parte `Sistema`, clique em `Configurações` e depois em `Cobrança`. [guia=menu:/painel/configuracoes/cobranca] [t=9]
2. No quadro `Conta Asaas`, veja o estado. Ele deve estar `Não conectada`. [guia=cobranca.estado]
3. Em outra aba do navegador, entre na sua conta em asaas.com com seu usuário e senha do Asaas. [guia=fora] [t=44]
4. No Asaas, clique no seu nome, no canto superior direito. [guia=fora] [t=47]
5. Clique em `Integrações`. [guia=fora]
6. Abra a parte `Chaves de API`. [guia=fora] [t=54]
7. Clique em `Gerar chave de API`. [guia=fora]
8. Dê um nome para a chave, por exemplo "portal da cidade". [guia=fora] [t=66]
9. Deixe desmarcada a opção de saques pela API (o portal só precisa gerar cobranças). [guia=fora] [t=71]
10. Clique em `Avançar`. [guia=fora]
11. Digite o código de segurança que o Asaas manda por SMS para o seu celular. [guia=fora] [t=78]
12. Copie a chave assim que ela aparecer: o Asaas mostra a chave uma única vez. Se fechar sem copiar, gere outra. [guia=fora] [t=85]
13. Volte à aba do painel e cole a chave no campo `Chave de API da sua conta Asaas`. [guia=cobranca.campo-chave] [t=96]
14. Clique em `Conectar`. [guia=cobranca.conectar] [t=101]
15. Aguarde a resposta: deu certo, aparece `✓ Conectada` e o portal configura sozinho o aviso automático de pagamento (webhook) na sua conta Asaas; deu errado, aparece uma mensagem com o motivo (por exemplo, chave inválida ou revogada). [guia=cobranca.estado] [t=103]
16. Confira se a opção `Cobrar pelo Asaas` está ligada. [guia=cobranca.cobrar-pelo-asaas] [t=125]

## resultado

O quadro mostra `✓ Conectada`. A chave passa a aparecer escondida, só com o final; para trocar, clique nela. A tela mostra a data da conexão e o botão de testar a conexão. Com `Cobrar pelo Asaas` ligado, o cliente paga por link (Pix, boleto ou cartão) e a confirmação é automática. Desligado, o pagamento mostra a chave Pix do portal e você confirma no Financeiro (veja o artigo "receber por Pix direto na sua chave, sem o Asaas"). A opção `Cobrar pelo Asaas` liga ou desliga a cobrança automática a qualquer momento, sem apagar a chave. A empresa recebe uma página de pagamento do Asaas com valor e vencimento, e escolhe entre boleto, Pix, cartão de crédito ou débito. No Financeiro, a fatura mostra a cobrança enviada ao cliente, com o link para copiar, e muda para paga sozinha quando o cliente paga. O Financeiro apresenta as faturas e as opções de cada uma.

## desvios

- Conectada não é o mesmo que cobrando: com `Cobrar pelo Asaas` desligado, nada é cobrado pelo Asaas.
- Conta aprovada é assunto do próprio Asaas: se o Asaas avisar que a conta está em análise ou pede documentos, isso é resolvido lá, não no portal.
- Se aparecer o aviso de que a cobrança funciona mas a confirmação automática não, os pagamentos pelo link precisam ser confirmados à mão no Financeiro enquanto o aviso estiver lá.
- Chave sumiu no Asaas: ela não pode ser recuperada; gere uma nova e repita a partir de gerar a chave de API.
- Conexão não significa, por si só, que uma fatura foi enviada, paga ou confirmada; a via de cobrança pode variar por fatura. Uma fatura que já mostrou a chave Pix continua pelo Pix, mesmo se o Asaas for ligado depois.

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
