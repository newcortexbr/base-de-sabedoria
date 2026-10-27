---
id: aprovacoes-e-denuncias
titulo: "aprovar conteúdo de clientes (fila de aprovação) e ver denúncias"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - aprovar
  - aprovacao
  - fila
  - pendente
  - moderacao
  - denuncia
  - numeros
  - ver
  - painel
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Confira o que os clientes enviaram e libere para o site. Só passa por aqui o que foi enviado com `Exigir minha aprovação antes de publicar` ligado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Aprovações`. [t=54] [guia=aprovacoes-aba:aprovacoes]
3. No envio que deseja conferir, clique em `Ver detalhe`. [t=58] [guia=aprovacoes.ver-detalhe]
4. Dentro do detalhe, clique em `Aprovar`. [guia=aprovacoes.aprovar-detalhe] Para só fechar, clique em `Fechar`. [guia=aprovacoes.fechar-detalhe]
5. Ou aprove direto na linha do envio, em `Aprovar`. [t=64] [guia=aprovacoes.aprovar]

## resultado

Aparece o aviso `Publicação aprovada`, o envio sai da lista e o número da aba diminui. Para recusar, veja "recusar um envio que aguarda aprovação".

## o que entra na fila

- Entram: `Empresa` (Guia Comercial), `Vaga`, `Anúncio` (classificados), `Evento` e `Banner`.
- Não entram: artigos (todo colunista publica direto, por decisão do portal), orçamentos, cupons e fotos do Radar.
- O que você mesmo publica como administrador vai direto ao ar, sem passar pela fila.

## números

- O número ao lado de `Aprovações e Denúncias` no menu soma os envios esperando aprovação e as denúncias pendentes. Ele é atualizado quando você troca de página.
- Na aba `Aprovações`, o número é o total de envios esperando. Na aba `Denúncias`, o total de denúncias pendentes.

## o detalhe

- Mostra os campos, as fotos e os links que o cliente enviou. Não mostra uma prévia de como ficará no site.
- Links abrem em outra aba. O endereço é o que o cliente escreveu: confira antes de confiar.
- Se aparecer `O cliente não preencheu nenhum campo além do título.`, mesmo assim dá para aprovar. Decida se vale aprovar ou recusar pedindo mais dados.
- Não é possível corrigir o envio aqui: só aprovar ou recusar. Para corrigir, recuse explicando o que mudar.
- Clicar fora da janela fecha o detalhe (exceto enquanto está aprovando). Nada é perdido: basta abrir de novo.
- `Recusar` dentro do detalhe fecha o detalhe e abre a janela do motivo.

## ao aprovar

- O item vai ao ar na hora. A empresa passa a `Ativo`; para aparecer no Guia ainda valem as demais regras do Guia.
- Banner com data de início futura: o cliente é avisado de que ele entra no ar nessa data.
- O cliente recebe um e-mail avisando que foi aprovado, se a conta tiver e-mail.
- Aprovar conta no limite do plano do cliente. Se ele já tem o máximo de vagas ou anúncios ativos, a aprovação falha e a mensagem aparece no topo da lista ou dentro do detalhe. O cliente precisa tirar algo do ar ou aumentar o plano.

## perguntas comuns

**posso desfazer uma aprovação?** Não pelo painel. Também não há histórico de quem aprovou e quando.
**posso aprovar vários de uma vez?** Não. Cada envio é aprovado separadamente.
**e se outro administrador decidir o mesmo envio ao mesmo tempo?** O portal não impede. Se um aprovar e o outro recusar, vale a última decisão: o item recusado sai do ar.
**o cliente precisa esperar quanto tempo?** O portal não define prazo. Nada é aprovado ou recusado sozinho; o envio espera até um administrador decidir.

## fontes

- frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:120-142,244-275,380-412
- frontend/src/components (Sidebar) badge = fila + denúncias pendentes (resolução A1)
- backend/portais/moderacao.py:42-76 (ISENTOS_DE_APROVACAO, admin publica direto)
- backend/guia/moderacao.py:101-131; anuncios/moderacao.py:229-234; classificados/moderacao.py:70-90,246-251; turismo/moderacao.py:131-136; portais/moderacao_banner.py:116
- backend/portais/views_admin.py:936-976 (sem checagem de status, sem histórico)
- backend/portais/emails/moderacao.py (e-mail de aprovação; banner com data futura)

## lacunas

- Conferido por leitura do código no HEAD e8f43702 (wt-suporte-tool). Sem execução do produto nem validação visual.
- Limite do plano verificado para vagas e anúncios; para empresa, evento e banner não verificado.
- Sidebar.tsx não relido nesta rodada; contagem do menu vem da resolução anterior.
