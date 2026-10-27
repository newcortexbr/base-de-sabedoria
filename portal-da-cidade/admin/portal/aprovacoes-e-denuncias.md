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
4. Dentro do detalhe, clique em `Aprovar`. [guia=aprovacoes.aprovar-detalhe]
5. Para só fechar o detalhe, clique em `Fechar`. [guia=aprovacoes.fechar-detalhe]
6. Ou aprove direto na linha do envio, em `Aprovar`. [t=64] [guia=aprovacoes.aprovar]

## resultado

Aparece o aviso `Publicação aprovada`, o envio sai da lista e o número da aba diminui. Para recusar, veja "recusar um envio que aguarda aprovação".

## o que entra na fila

- Entram: `Empresa` (Guia Comercial), `Vaga`, `Anúncio` (classificados), `Evento` e `Banner`.
- Não entram: artigos (todo colunista publica direto, por decisão do portal), orçamentos, cupons e fotos do Radar.
- O que você mesmo publica como administrador vai direto ao ar, sem passar pela fila.

## como funciona

- No topo da página ficam as duas regras do portal (valem para o portal inteiro e salvam na hora). Veja "ligar ou desligar Exigir minha aprovação e Permitir denúncias".
- Na aba `Aprovações`, cada envio pendente mostra há quanto tempo espera. No detalhe de uma vaga aparecem descrição, salário, local e contato.
- Denúncia: o visitante clica em denunciar no anúncio, escolhe o motivo e conta o que aconteceu. Ela chega na aba `Denúncias`, onde você vê o item, o motivo e a descrição e pode abrir a página denunciada.
- Decisões da denúncia: ignorar (está tudo bem), excluir o item (tira do ar) ou bloquear empresa/conta (tira do ar tudo o que o anunciante publicou). Todas pedem confirmação.

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
- O limite do plano do cliente só barra a aprovação de `Vaga` e `Anúncio`. Se ele já tem o máximo de vagas ou anúncios ativos, a aprovação falha e a mensagem aparece no topo da lista ou dentro do detalhe. O cliente precisa tirar algo do ar ou aumentar o plano.
- `Empresa`, `Evento` e `Banner` são aprovados sem conferir limite de plano na hora da aprovação.

## perguntas comuns

**posso desfazer uma aprovação?** Não pelo painel. Também não há histórico de quem aprovou e quando. **O que fazer:** se o item não devia estar no ar, tire-o do ar pela tela do módulo dele (Guia, Vagas, Classificados, Eventos ou Banners). Para saber quem aprovou, combine com a equipe quem cuida da fila. Para pedir essa função, use `Sugestões de Funções`, no rodapé do menu da esquerda. [guia=menu:/painel/sugestoes]
**posso aprovar vários de uma vez?** Não. Cada envio é aprovado separadamente.
**e se dois administradores decidirem o mesmo envio ao mesmo tempo?** Vale a primeira decisão. Quem chegou depois vê o aviso `Este envio já foi decidido, talvez por outra pessoa da equipe. Atualize a página.` e nada muda. Atualize a página para ver a lista em dia.
**posso aprovar ou recusar de novo um envio que já foi decidido?** Não. O portal só aceita decisão sobre envio que ainda está esperando.
**o cliente precisa esperar quanto tempo?** Não há prazo. Nada é aprovado ou recusado sozinho; o envio espera até um administrador decidir. **O que fazer:** olhe a fila todo dia; o número ao lado de `Aprovações e Denúncias` no menu mostra quantos esperam.

## fontes

- frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:120-142,244-275,380-412
- frontend/src/components/painel/Sidebar.tsx:332-342,385 (número do menu = fila + denúncias pendentes; recarrega a cada troca de página)
- backend/portais/moderacao.py:42-76 (ISENTOS_DE_APROVACAO, admin publica direto)
- backend/guia/moderacao.py:101-131; anuncios/moderacao.py:229-234; classificados/moderacao.py:70-90,246-251; turismo/moderacao.py:131-136; portais/moderacao_banner.py:116
- backend/portais/views_admin.py:942-966 (trava a linha e recusa com 409 se não está mais pendente; sem histórico)
- backend/classificados/moderacao.py:70-90,224; anuncios/moderacao.py:70-90,207 (limite só em vaga e anúncio); guia/moderacao.py:92-106; turismo/moderacao.py:105-117; portais/moderacao_banner.py:90-100 (_aprovar de empresa, evento e banner sem limite)
- backend/portais/emails/moderacao.py (e-mail de aprovação; banner com data futura)

## lacunas

- Conferido por leitura do código no HEAD 66d38db2 (wt-suporte-tool). Sem execução do produto nem validação visual.
