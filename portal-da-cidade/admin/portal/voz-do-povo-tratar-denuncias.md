---
id: voz-do-povo-tratar-denuncias
titulo: "tratar uma denúncia da Voz do Povo"
publico:
  - admin
modulo: utilidade
categoria: utilidade
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

aqui você decide o que fazer com cada relato que um morador mandou em A Voz do Povo e deixa a fila em dia.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## explicação

- o relato tem quatro situações: `Recebida` (chegou agora), `Em análise` (você está cuidando), `Resolvida` (problema resolvido) e `Arquivada` (encerrada sem ação).
- a lista abre em `Em aberto`, que mostra `Recebida` e `Em análise`.
- **não existe** ignorar, bloquear ou excluir relato da Voz do Povo. O mais perto de "ignorar" é `Arquivar`: o relato sai da fila mas continua guardado, e dá para voltar atrás.
- tratar a denúncia não exige excluir nem bloquear: o passo obrigatório é só mudar a situação (`Em análise`, `Resolvida` ou `Arquivar`). Denúncia não é aprovação: aprovar é liberar o que o cliente enviou; denunciar é o morador reclamar do que já está no ar.
- ignorar, excluir o item e bloquear a conta existem só nas denúncias de conteúdo (empresa, vaga, classificado, evento), em `Aprovações e Denúncias`. São ações pesadas e opcionais; veja "ignorar uma denúncia", "tirar do ar o conteúdo de uma denúncia" e "bloquear a empresa ou conta de uma denúncia".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `A Voz do Povo` e depois em `Denúncias`. [guia=menu:/painel/utilidade/denuncias]
2. Para ler tudo antes de decidir, clique em `Ver detalhes` na linha do relato. [guia=utilidade-denuncias.detalhes]
3. Para começar a cuidar, clique em `Em análise` na linha. [guia=utilidade-denuncias:em_analise]
4. Quando o problema for resolvido, clique em `Resolvida`. [guia=utilidade-denuncias:resolvida]
5. Se o relato não precisa de ação (repetido, sem sentido, fora do assunto), clique em `Arquivar`. [guia=utilidade-denuncias:arquivada]
6. Se clicou errado, clique em `Desfazer`, que aparece logo depois da ação. [guia=utilidade-denuncias.desfazer]

## resultado

o relato muda de situação e sai da lista `Em aberto` quando vira `Resolvida` ou `Arquivada`. O texto do morador não é alterado.

## desvios

- o morador não vê resposta nem acompanha pelo site: ele só envia. Se ele deixou WhatsApp, o contato aparece em `Ver detalhes`.
- para ver os já encerrados, escolha `Resolvida`, `Arquivada` ou `Todos os status` no seletor do topo. [guia=utilidade-denuncias.filtro]

## fontes

- `portal-cidade/frontend/src/app/painel/utilidade/denuncias/page.tsx:20`
- `portal-cidade/frontend/src/app/painel/utilidade/denuncias/[id]/page.tsx:96`
- `portal-cidade/backend/utilidade/urls_admin.py:14`

## lacunas

a Voz do Povo não tem excluir, ignorar nem bloquear no painel (só status). Se o dono quiser essas ações, é função nova.

