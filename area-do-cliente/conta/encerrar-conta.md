---
id: ac-encerrar-conta
titulo: "encerrar (apagar) minha conta"
publico:
  - cliente
modulo: conta
aba: Minha conta
tipo_problema:
  - encerrar conta
  - apagar conta
  - excluir conta
  - excluir meus dados
  - cancelar tudo
  - sair da New Córtex
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

saber como pedir para apagar a sua conta e o que acontece com ela.

## explicação

não existe botão para o cliente apagar a própria conta. Quem apaga é a equipe da New Córtex, a pedido seu.

Quando a conta é apagada:

- todos os negócios ainda abertos são cancelados antes, e as cobranças futuras (reserva anual e mensalidade) param;
- a conta e os dados dela saem da Área do Cliente;
- o acesso às ferramentas ligadas à sua conta (que você abre a partir da Área do Cliente) também é removido;
- apagar a conta não devolve dinheiro. Reembolso é um assunto separado, tratado pela equipe (veja `ac-reembolso`).

Não há como desfazer depois de apagada.

## passos

1. Clique em `Suporte` no menu da esquerda. [guia=menu:/suporte]
2. Clique em `Abrir novo chamado`. [guia=suporte.novo-chamado]
3. Em `Negócio vinculado`, escolha `Nenhum: é sobre minha conta`. [guia=chamado-novo.negocio]
4. Em `Assunto`, escolha `Minha conta`. [guia=chamado-novo.assunto]
5. Em `Título`, escreva "Encerrar minha conta". Em `Mensagem`, confirme o pedido e, se quiser, o motivo. [guia=chamado-novo.titulo]
6. Clique em `Enviar chamado`. [guia=chamado-novo.enviar]

## resultado

a equipe recebe o pedido e responde pelo chamado.

## desvios

- Se você quer parar só um negócio (uma cidade) e manter os outros, peça o cancelamento daquele negócio, não o encerramento da conta (veja `ac-cancelar-um-negocio`).

## quando pedir ajuda

sempre — o encerramento só é feito pela equipe.

## fontes

- `src/domain/acesso/account-closure.ts:1` — apagar conta cancela as licenças abertas e as assinaturas, nunca estorna, e remove o cliente.
- `src/app/admin/(protected)/clientes/[id]/ClientAccountClosure.tsx` — a ação existe só no painel interno.
- `docs/DECISIONS.md:771` — DEC-567: não existe "encerrar conta" para o cliente; apagar remove também nas ferramentas por SSO.

## lacunas

não há prazo nem política escrita para atender o pedido, nem regra sobre guardar dados fiscais depois de apagar. O chat não deve prometer prazo.
