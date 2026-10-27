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
  - fila
  - aprovacao
  - fatura
  - vencimento
  - comissao
  - numeros
  - voz do povo
  - notificacao
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - jZUtDBYZ8DM
---

## objetivo

Entenda os blocos da tela inicial do painel abaixo do tráfego.

## passos

1. No topo do menu da esquerda, clique em `Painel`. [guia=menu:/painel]

## resultado

Você vê quantos itens existem em cada parte (contadores) e o que espera por você (pendências). Use os atalhos `+` para cadastrar, os contadores para abrir as listas e `Precisa da sua atenção` para resolver pendências.

## `Ver portal`

Abre o seu domínio próprio quando ele já está verificado. Senão, abre o site no mesmo endereço que você está usando agora.

## `Administração do portal`

- `O que está no ar e o que espera por você`: os contadores mostram quantos itens existem (nem todos estão no ar; veja abaixo); o que espera por você fica no bloco `Precisa da sua atenção`, mais abaixo.
- Atalhos: `+ Notícia`, `+ Empresa`, `+ Vaga`, `+ Anúncio` e `+ Ponto turístico` abrem o cadastro. `+ Evento` abre a lista de eventos; lá o cadastro fica no botão de novo evento.
- Os atalhos e os contadores aparecem sempre, mesmo com o módulo desligado. Ao clicar num módulo desligado, aparece a tela `Módulo desativado`, com o texto: "Este módulo não está ativo no seu portal, por isso a área dele não pode ser gerenciada. Nada foi apagado: o conteúdo continua salvo e reaparece assim que o módulo for reativado. Fale com o responsável pelo seu plano para ativá-lo." Os atalhos continuam visíveis, mas nenhum cadastro abre.

## o que cada contador conta

- `Notícias publicadas`: só notícias publicadas.
- `Empresas ativas`: só empresas com situação ativa. Pendentes e bloqueadas ficam de fora.
- `Anúncios`: todos os anúncios de classificados do portal, em qualquer situação: no ar, pendentes, pausados, recusados e expirados.
- `Eventos`: todos os eventos ativos, inclusive os que já passaram e os que ainda esperam aprovação ou pagamento.
- `Rascunhos`: notícias em rascunho. O clique abre a lista de notícias inteira, sem filtro.
- Não há contador de vagas, pontos turísticos, cupons nem artigos: a tela tem só esses 5.

## `Precisa da sua atenção`

Cada linha é um tipo de pendência, sempre nesta ordem fixa (não dá para mudar; se quiser outra ordem, peça a função em `Sugestões de Funções` [guia=menu:/painel/sugestoes]):

1. Empresas aguardando aprovação (só com o Guia ligado), com `A mais antiga espera há N dias` ou `A mais antiga chegou hoje`. O botão `Revisar` abre a lista de empresas do Guia já mostrando só as pendentes.
2. Itens na fila de aprovação: tudo que clientes enviaram e espera sua decisão. O botão `Abrir fila` abre `Aprovações e Denúncias`.
3. Faturas vencidas: cobranças dos seus clientes em aberto com vencimento já passado. O valor é a soma delas; mostra quando venceu a mais antiga. Botão `Ver no Financeiro`.
4. Denúncias de moradores novas: relatos da Voz do Povo que ainda estão como recebidos, sem ninguém ter começado a tratar. Só aparece com a parte de utilidades do portal ligada. Botão `Ler`.
5. Comissão para pagar por fora: valor somado e quantidade de parceiros. Botão `Ver parceiros`.

## menu lateral

- `Meus Links`: todos os endereços do portal, prontos para copiar e divulgar.
- `Aprovações e Denúncias`: o que clientes e moradores enviaram e espera decisão.
- Grupo `Conteúdo`: seções do site, notícias e notícias automáticas, Guia Comercial, Radar de Preços, Vagas de Emprego, Classificados, Guia Turístico e Eventos, Artigos, orçamentos online, Voz do Povo, sorteios, doações, Melhores da Cidade e banners publicitários.
- Grupo `Comercial`: meus clientes, financeiro, meus planos e parceiros.
- Grupo `Sistema`: notificações Push, assistente de IA do site e configurações do portal.
- Rodapé: `Sugestões de Funções`, dados de acesso e sair.

## suporte com IA

- Botão no canto inferior direito. As conversas ficam salvas; `Nova conversa` abre outra.
- A IA responde com base no manual do portal e, quando há vídeo tutorial do assunto, mostra o vídeo.
- `Me mostra na tela` guia passo a passo com imagem da tela; a cada passo responda se conseguiu ou não.
- Dá para anexar um print pelo botão de imagem; a IA lê e explica.
- Se não resolver, ou se você pedir uma pessoa, abre um chamado para a equipe de suporte, acompanhado pela área do cliente.

## perguntas comuns

**o número "N pendências" conta itens?** Não. Conta as linhas (tipos de pendência). O número de itens fica em cada linha.

**uma empresa pendente conta nas duas linhas?** Sim. A empresa aguardando aprovação também entra na soma da fila de aprovação.

**depois de quantos dias fica urgente?** Nunca muda sozinho: não tem prazo de urgência nem troca de cor. A linha só mostra há quantos dias espera a mais antiga. **O que fazer:** escolha uma regra sua (por exemplo, revisar tudo que passar de poucos dias) e abra as pendências pelo botão da linha.

**"Denúncias de moradores" é a aba Denúncias?** Não. São relatos da Voz do Povo. As denúncias de conteúdo da aba `Denúncias` em `Aprovações e Denúncias` não aparecem neste bloco.

**como marco a comissão como paga?** Pelo botão `Ver parceiros`. Na tela de parceiros, no quadro `Comissões para pagar por fora`, clique em `Marcar paga` na comissão e confirme na janela.

**sou avisado por e-mail ou celular de pendência nova?** Não. O bloco também não se atualiza sozinho: ele confere uma vez ao abrir a página. Recarregue a página para ver novidades.

**posso confiar no "Tudo em dia"?** Vale só para os 5 tipos acima. Denúncias de conteúdo, orçamentos e fotos do Radar não entram nele.

## fontes

- frontend/src/components/painel/Header.tsx:52-53, :97-107 (Ver portal)
- frontend/src/app/painel/page.tsx:18-24 (atalhos fixos), :75 (subtítulo), :88-92 (contadores e links)
- backend/noticias/api_admin.py:630-638 (filtros dos contadores)
- backend/portais/views_pendencias.py:37 (ordem), :48-86 (regras de cada pendência; guia só se ligado; fila soma todos os moderáveis)
- frontend/src/components/painel/PrecisaDeAtencao.tsx:46-79 (textos, botões e destinos), :92 (carrega uma vez), :108 (conta linhas), :117 (Tudo em dia)
- frontend/src/app/painel/layout.tsx:24-43,134-136 (tela Módulo desativado: título e textos)
- frontend/src/components/painel/ComissoesParceiros.tsx:78; frontend/src/app/painel/parceiros/page.tsx:1065 (botão `Marcar paga`)
- backend/portais/views_pendencias.py:72-78 (Voz do Povo só com utilidade ligada, status recebida)

## lacunas

- Contagem dupla de empresa (fila + empresas) e contadores de Anúncios/Eventos incluindo itens fora do ar parecem defeito; a resposta descreve o comportamento atual.
