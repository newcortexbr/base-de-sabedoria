---
id: cliente-colunista-virar-colunista
titulo: "virar colunista e publicar artigos no portal"
publico:
  - cliente
modulo: artigos
categoria: artigos
aba: Artigos
tipo_problema:
  - virar-colunista
tags:
  - colunista
  - artigo
  - cadastro
  - plano
  - contratar
  - criar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: video
videos:
  - NELLwm_ClmA
---

## objetivo

entender o que é ser colunista no portal e como começar. O cadastro de colunista cria a conta e leva ao pagamento do plano de Artigos.

## pré-requisitos

- ser profissional liberal ou especialista em um assunto (corretor, médico, contador, advogado, nutricionista, personal trainer etc.). Não precisa ser jornalista.
- ter acesso ao e-mail, pois o portal envia um código de 6 números.

## explicação

- o colunista ganha uma coluna própria, assinada com nome, foto e currículo, ao lado das notícias que a cidade lê.
- os artigos ficam reunidos na página de especialista, e o leitor interessado entra em contato direto com o colunista.
- ser colunista dá mais autoridade e credibilidade ao profissional liberal do que anúncio ou post em rede social; o leitor que gosta do texto já sabe com quem marcar.
- o plano de colunista é sempre pago; a tela de cadastro mostra os planos e os preços do portal.

## passos

1. Abra a página de colunista do portal (selo `Artigos · Seja colunista`) e clique em `Quero ser colunista`. [t=72] [guia=fora]
2. No formulário `Comece sua coluna`, escolha o plano da coluna. [guia=conta.plano]
3. Escreva seu nome em `Seu nome`, como vai aparecer nos artigos. [guia=conta.formulario]
4. Escreva o `CPF`, o `WhatsApp`, o `E-mail` e crie a `Senha` (mínimo 8 caracteres). [guia=conta.formulario]
5. Clique em `Criar conta e ir para o pagamento`. [guia=conta.criar]
6. Digite os 6 números que chegaram ao e-mail em `Confirme seu e-mail` e clique em `Confirmar e continuar`. [guia=conta.codigo]
7. Pague o plano na janela de pagamento que abre. [guia=fora]
8. Depois de entrar, siga o artigo "publicar um artigo como colunista" para completar o perfil e publicar. [guia=fora]

## resultado

você passa a ter a coluna e publica artigos assinados, reunidos na sua página de especialista.

## desvios

- já tem conta neste portal: o formulário oferece `continuar como seu e-mail` em vez de criar outra conta.
- fechou a janela sem pagar: a coluna fica `Aguardando pagamento`; veja "pagar uma cobrança pendente".

## quando pedir ajuda

se o código não chegar ou o plano não ficar ativo depois de pagar, peça ajuda ao portal. Não envie senha nem código.

## fontes

- `portal-cidade/frontend/src/app/anuncie/colunista/page.tsx:20,70-98` — `Quero ser colunista`, `Comece sua coluna`, `Seu nome`, CPF, plano sempre pago.
- `portal-cidade/frontend/src/components/lp/FormularioLP.tsx:106,405-441,476-487,515-581` — campos, plano, `Criar conta e ir para o pagamento`.

## lacunas

- não foi localizado no código um link do menu ou da página inicial que leve à página de colunista (a chamada da home foi removida); o portal ou o representante passa o endereço.
- a janela de pagamento (Pix/cartão) não foi detalhada aqui; veja "contratar um plano".
- o texto do vídeo é promocional; só o passo 1 tem tempo.
