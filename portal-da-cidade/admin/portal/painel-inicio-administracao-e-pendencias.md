---
id: painel-inicio-administracao-e-pendencias
titulo: tela inicial do painel: ver portal, atalhos de cadastro, contadores e precisa da sua atenção (pendências)
publico:
  - admin
modulo: painel
categoria: admin
aba: painel
tipo_problema: duvida
tags:
  - painel
  - pendente
  - visao geral
  - fila
  - aprovacao
  - fatura
  - vencimento
  - comissao
  - modulo
  - numeros
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

Entenda os blocos da tela inicial do painel abaixo do tráfego.

## passos

1. No topo do menu da esquerda, clique em `Painel`. [guia=menu:/painel]
2. Use os atalhos `+` para cadastrar, os contadores para abrir as listas e `Precisa da sua atenção` para resolver pendências.

## resultado

Você vê o que está no ar (contadores) e o que espera por você (pendências).

## `Ver portal`

Abre o seu domínio próprio quando ele já está verificado. Senão, abre o site no mesmo endereço que você está usando agora.

## `Administração do portal`

- `O que está no ar e o que espera por você`: os contadores mostram o que está no ar; o que espera por você fica no bloco `Precisa da sua atenção`.
- Atalhos: `+ Notícia`, `+ Empresa`, `+ Vaga`, `+ Anúncio` e `+ Ponto turístico` abrem o cadastro. `+ Evento` abre a lista de eventos; lá o cadastro fica no botão de novo evento.
- Os atalhos e os contadores aparecem sempre, mesmo com o módulo desligado. Ao clicar num módulo desligado, a tela avisa que o módulo está desativado.

## o que cada contador conta

- `Notícias publicadas`: só notícias publicadas.
- `Empresas ativas`: só empresas com situação ativa. Pendentes e bloqueadas ficam de fora.
- `Anúncios`: todos os anúncios de classificados do portal, em qualquer situação: no ar, pendentes, pausados, recusados e expirados.
- `Eventos`: todos os eventos ativos, inclusive os que já passaram e os que ainda esperam aprovação ou pagamento.
- `Rascunhos`: notícias em rascunho. O clique abre a lista de notícias inteira, sem filtro.
- Não há contador de vagas, pontos turísticos, cupons nem artigos: a tela tem só esses 5.

## `Precisa da sua atenção`

Cada linha é um tipo de pendência, sempre nesta ordem fixa (não dá para mudar):

1. Empresas aguardando aprovação (só com o Guia ligado), com `A mais antiga espera há N dias` ou `A mais antiga chegou hoje`. Botão `Revisar`.
2. Itens na fila de aprovação: tudo que clientes enviaram e espera sua decisão. Botão `Abrir fila`.
3. Faturas vencidas: cobranças dos seus clientes em aberto com vencimento já passado. O valor é a soma delas; mostra quando venceu a mais antiga. Botão `Ver no Financeiro`.
4. Denúncias de moradores novas: relatos da Voz do Povo ainda não lidos. Botão `Ler`.
5. Comissão para pagar por fora: valor somado e quantidade de parceiros. Botão `Ver parceiros`.

## perguntas comuns

**o número "N pendências" conta itens?** Não. Conta as linhas (tipos de pendência). O número de itens fica em cada linha.

**uma empresa pendente conta nas duas linhas?** Sim. A empresa aguardando aprovação também entra na soma da fila de aprovação.

**depois de quantos dias fica urgente?** O portal não define prazo de urgência; só mostra há quantos dias espera a mais antiga.

**"Denúncias de moradores" é a aba Denúncias?** Não. São relatos da Voz do Povo. As denúncias de conteúdo da aba `Denúncias` em `Aprovações e Denúncias` não aparecem neste bloco.

**como marco a comissão como paga?** Pelo botão `Ver parceiros`, na tela de parceiros, onde fica a baixa da comissão.

**sou avisado por e-mail ou celular de pendência nova?** Não. O bloco também não se atualiza sozinho: ele confere uma vez ao abrir a página. Recarregue a página para ver novidades.

**posso confiar no "Tudo em dia"?** Vale só para os 5 tipos acima. Denúncias de conteúdo, orçamentos e fotos do Radar não entram nele.

## fontes

- frontend/src/components/painel/Header.tsx:52-53, :97-107 (Ver portal)
- frontend/src/app/painel/page.tsx:18-24 (atalhos fixos), :75 (subtítulo), :88-92 (contadores e links)
- backend/noticias/api_admin.py:630-638 (filtros dos contadores)
- backend/portais/views_pendencias.py:37 (ordem), :48-86 (regras de cada pendência; guia só se ligado; fila soma todos os moderáveis)
- frontend/src/components/painel/PrecisaDeAtencao.tsx:44-86 (textos e botões), :92 (carrega uma vez), :108 (conta linhas), :117 (Tudo em dia)

## lacunas

- Texto exato do aviso de módulo desativado não conferido nesta revisão.
- Nome exato do botão de baixa na tela de parceiros não conferido.
- Contagem dupla de empresa (fila + empresas) e contadores de Anúncios/Eventos incluindo itens fora do ar parecem defeito; a resposta descreve o comportamento atual.
