---
id: voz-do-povo
titulo: "A Voz do Povo: ver relatos dos moradores"
publico:
  - admin
modulo: utilidade
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - 1a0wZmdXDLk
---

## objetivo

aqui você acompanha e dá andamento aos relatos enviados pelos moradores.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para decidir o que fazer com cada relato (em análise, resolvida, arquivar), veja o artigo "tratar uma denúncia da Voz do Povo".
- para abrir e ler um relato, veja o artigo "ler um relato completo da Voz do Povo".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `A Voz do Povo` e depois em `Denúncias`. A lista já abre com os relatos em aberto. [guia=menu:/painel/utilidade/denuncias] [t=51]
2. No topo da lista, use a caixa de seleção para ver só um tipo: `Em aberto`, `Recebida`, `Em análise`, `Resolvida`, `Arquivada` ou `Todos os status`. [guia=utilidade-denuncias.filtro] [t=68]
3. Em cada relato, clique em `Em análise`, `Resolvida` ou `Arquivar` para mudar a situação dele. [guia=utilidade-denuncias:em_analise] [t=62]
4. Se clicou errado, use `Desfazer`, que aparece logo em seguida. [guia=utilidade-denuncias.desfazer]

5. Em `Telefones Úteis`, cadastre os números de emergência e serviços da cidade, com horário de atendimento, e escolha quais aparecem no site.
6. Em `Linhas de Ônibus`, cadastre as linhas que o morador consulta na página `A Voz do Povo` do site.

## resultado

o relato muda de situação; o texto do morador não é editado.

## desvios

- Esta tela é diferente de `Aprovações e Denúncias`, que trata de conteúdo de empresas, vagas e eventos.
- A lista mostra só a primeira página de relatos.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/utilidade/denuncias/`
- `suporte-kb/mapa/admin/telas/painel-utilidade-denuncias.md`, `painel-utilidade-denuncias-id.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
