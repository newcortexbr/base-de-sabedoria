---
id: gerenciar-meus-clientes
titulo: "Meus Clientes: acompanhar clientes, planos e vencimentos"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

aqui você vê quem são seus clientes, o que cada um contratou e quando vence.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para achar um cliente e ver os planos e as faturas dele, veja o artigo "encontrar um cliente e ver planos e faturas".
- para mudar nome, documento ou contatos de um cliente, veja o artigo "editar os dados de um cliente".
- para trocar a senha de um cliente, veja o artigo "trocar a senha de um cliente".
- para impedir ou liberar o acesso de um cliente, veja o artigo "bloquear ou liberar o acesso de um cliente".
- para apagar um cliente, veja o artigo "excluir um cliente".
- para baixar a lista de clientes, veja o artigo "exportar a lista de clientes".

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Clientes`. [guia=menu:/painel/clientes] [t=10] No topo, um aviso amarelo mostra as contratações aguardando confirmação de pagamento: nada entra no ar antes de você confirmar o pagamento na ficha do cliente. Os cartões resumem a carteira e mostram também o total de clientes e a receita mensal recorrente dos planos ativos. Cada linha da lista traz o cliente, o WhatsApp, a quantidade de planos, as seções contratadas, o vencimento mais próximo e a receita. As ações da linha são a chave (redefinir senha), o lápis (editar), o cadeado (bloquear) e a lixeira (excluir).
2. Para cadastrar, clique em `Novo cliente`. [guia=clientes.novo] [t=72]
3. Escreva o nome do cliente e, se tiver, o nome fantasia e o tipo. [guia=clientes.nome] [t=74]
4. Preencha o documento (CPF ou CNPJ). [guia=clientes.documento] [t=77]
5. Preencha o telefone. [guia=clientes.telefone] [t=77]
6. Preencha o WhatsApp. [guia=clientes.whatsapp] [t=77]
7. Preencha o e-mail. Com a cobrança pelo Asaas ligada, nome, documento e e-mail são obrigatórios. [guia=clientes.email] [t=81]
8. Clique em `Salvar`. [guia=clientes.salvar]

## resultado

a lista mostra a carteira atualizada, com semáforo de vencimento e contratações aguardando pagamento.

## desvios

- Excluir e bloquear pedem confirmação; confira antes.
- O arquivo exportado tem dados de contato: guarde com cuidado.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-clientes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
