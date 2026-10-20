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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

aqui você vê quem são seus clientes, o que cada um contratou e quando vence.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Clientes`. [guia=menu:/painel/clientes] [t=10]
2. No topo da página, veja quantos clientes estão `Vencidos`, quantos vencem em 7 dias e em 30 dias, e quantos estão sem plano. [guia=clientes.resumo] [t=24]
3. Para achar alguém, escreva em `Buscar por nome, documento ou telefone…`. [guia=clientes.busca] [t=42]
4. Se quiser, escolha uma situação no filtro ao lado para ver só vencidos, a vencer ou sem plano. [guia=clientes.filtro-situacao] [t=46]
5. Para cadastrar, clique em `Novo cliente`. [guia=clientes.novo] [t=72]
6. Escreva o nome do cliente. [guia=clientes.nome] [t=74]
7. Preencha o documento (CPF ou CNPJ). [guia=clientes.documento] [t=77]
8. Preencha o telefone. [guia=clientes.telefone] [t=77]
9. Preencha o WhatsApp. [guia=clientes.whatsapp] [t=77]
10. Preencha o e-mail. Com a cobrança pelo Asaas ligada, nome, documento e e-mail são obrigatórios. [guia=clientes.email] [t=81]
11. Clique em `Salvar`. [guia=clientes.salvar]
12. Para mudar os dados, clique no lápis (`Editar`) na linha do cliente que você quer. [guia=clientes.editar] [t=64]
13. Para trocar a senha do cliente, clique em `Resetar senha` na linha dele. [guia=clientes.resetar-senha]
14. Para impedir ou liberar o acesso, clique em `Bloquear` (ou `Desbloquear`) na linha dele e confirme. [guia=clientes.bloquear] [t=61]
15. Para apagar o cliente, clique em `Excluir` na linha dele e confira o aviso antes de confirmar. [guia=clientes.excluir]
16. Clique no nome do cliente para ver os planos e as faturas dele. [guia=clientes.ver-cliente] [t=97]
17. Clique em `Exportar`. [guia=clientes.exportar] [t=91]
18. Escolha o formato: `CSV`, `Excel` ou `PDF`. [guia=clientes.exportar-menu]

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
