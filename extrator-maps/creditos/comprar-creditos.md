---
id: ext-comprar-creditos
titulo: "comprar créditos (pacotes pelo Asaas) e acompanhar o pagamento"
publico:
  - cliente
modulo: creditos
aba: Comprar créditos
tipo_problema:
  - comprar-creditos
  - pacote
  - pagamento
  - credito-nao-entrou
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - F136_v1JyRY
---

## objetivo
comprar créditos e entender por que o saldo pode demorar a subir.

## pré-requisitos
- cadastro com CPF ou CNPJ (sem isso não há cobrança).

## explicação
- a tela `Comprar créditos` diz: "Escolha um pacote e finalize o pagamento pelo Asaas. O crédito só entra na sua carteira depois que o pagamento for confirmado — isso pode levar alguns minutos, mesmo depois de você voltar desta tela."
- cada pacote mostra nome, descrição, "X créditos · R$ Y por crédito", preço total e `Comprar`. nomes, créditos e preços são cadastrados pela equipe e não estão no código. no vídeo (exemplo, pode ter mudado): pacote básico de 200 créditos; 500 créditos por R$ 9,90; 10.000 créditos por R$ 399.
- a forma de pagamento é escolhida no Asaas.
- status na lista de compras: `Aguardando pagamento`, `Pago, aguardando confirmação`, `Creditado`, `Cancelada`, `Vencida`, `Estornada`.

## passos
1. clique em `Comprar créditos` (menu lateral, `Dashboard` ou o aviso de saldo baixo).
2. no pacote desejado, clique em `Comprar`.
3. leia "A página de pagamento do Asaas abre numa nova aba. Lá você escolhe a forma de pagamento." e clique em `Ir para o pagamento` (`Cancelar` desiste).
4. pague na aba do Asaas. aparece "Cobrança gerada"; se a aba não abriu, clique em `Abrir pagamento` (ou `Fechar`).
5. aguarde a confirmação; o saldo sobe sozinho. pagamento pendente fica como aviso no `Dashboard` com `Pagar agora`.

## resultado
o status vira `Creditado` ("Creditado em ...") e o saldo aumenta.

## se der errado
- "O pagamento pode levar alguns minutos para ser confirmado.": espere.
- `Vencida`: "Esta cobrança venceu sem pagamento. Faça uma nova compra para gerar outra."
- `Cancelada`: "Esta compra foi cancelada e não gerou cobrança válida."
- `Estornada`: "O valor desta compra foi estornado." (a conta pode ser bloqueada, veja `ext-licenca-suspensa-ou-conta-bloqueada`).
- `Seu cadastro está sem CPF ou CNPJ, e por isso não é possível gerar a cobrança. Fale com o administrador da sua conta para completar o cadastro.`
- `Pacote de créditos não disponível.` / `Nenhum pacote está disponível para compra no momento.` / `Não foi possível concluir a compra agora. Tente novamente.` / `Não foi possível carregar os pacotes. Tente novamente.`
- reembolso é manual, feito pela equipe fora do Extrator.
