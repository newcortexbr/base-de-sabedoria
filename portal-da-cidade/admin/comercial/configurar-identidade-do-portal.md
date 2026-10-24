---
id: configurar-identidade-do-portal
titulo: "configurar nome, logo e favicon do portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8M4kdEfP7Eg
  - XekThBh1ygU
---

## objetivo

aqui você muda o nome, a logo e o favicon, que é o ícone da aba do navegador.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

### mudar nome e imagens

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações` para abrir as opções, se estiverem fechadas. [t=6] [guia=configuracoes.abrir-menu]
2. Clique em `Configurações Gerais`. [t=9] [guia=menu:/painel/configuracoes]
3. Em `Identidade`, preencha `Nome do portal`. [t=11] [guia=configuracoes.nome]
4. Clique em `Salvar` ao lado do nome. [t=14] [guia=configuracoes.salvar-nome]
5. Em `Logo do portal`, clique em `Enviar logo` ou `Trocar logo`. [t=19] [guia=configuracoes.logo]
6. No seletor de arquivos do computador, escolha a imagem da logo. [guia=fora]
7. Em `Favicon`, clique em `Enviar favicon` ou `Trocar favicon`. [t=19] [guia=configuracoes.favicon]
8. No seletor de arquivos do computador, escolha a imagem do ícone. [guia=fora]

### remover a logo

1. Na mesma tela, clique em `Remover` ao lado da logo. [guia=configuracoes.remover-logo]
2. Na confirmação `Remover a logo do portal?`, clique em `Remover`. [guia=confirmacao.confirmar]

### remover o favicon

1. Na mesma tela, clique em `Remover` ao lado do favicon. [guia=configuracoes.remover-favicon]
2. Na confirmação `Remover o favicon do portal?`, clique em `Remover`. [guia=confirmacao.confirmar]

## resultado

Nome: `Salvo com sucesso`. Envio das imagens: `Logo atualizada` ou `Favicon atualizado`. Remoção: `Logo removida` ou `Favicon removido`. Enviar e remover imagens salvam imediatamente, sem outro botão de salvar.

## desvios

Nome em branco não é enviado. Falhas aparecem em vermelho no quadro correspondente.

## veja também

Para cores, topo e rodapé, veja “mudar a aparência (layout) do portal”. Para contatos, pixels, aviso do app e convite do WhatsApp, use os artigos próprios dessas opções. Para cobertura, veja “adicionar ou remover cidades da cobertura do portal”.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:108` — nome.
- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:224` — envio e remoção de imagens.
- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:357` — campos e botões.

## lacunas

Sem validação no navegador. Limites de tamanho e formatos aceitos pelo servidor não foram verificados; o seletor apenas anuncia imagens.
