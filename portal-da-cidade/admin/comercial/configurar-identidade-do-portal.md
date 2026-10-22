---
id: configurar-identidade-do-portal
titulo: configurar informações e aparência do portal
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - 8M4kdEfP7Eg
  - XekThBh1ygU
  - He7XF-kolwk
  - _YSN9di_ZOU
  - vPnHq9kRWW8
  - lrTaEV5JnVM
---

## objetivo

aqui você muda o nome, a logo, os contatos e a aparência do portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para preencher WhatsApp e redes sociais, veja o artigo "configurar as redes sociais do portal".
- para preencher e-mail e telefone do Fale Conosco, veja o artigo "configurar a página Fale Conosco do portal".
- para mudar topo, início, cores ou rodapé, veja o artigo "mudar a aparência (layout) do portal".

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Configurações` e depois em `Configurações Gerais`. [guia=menu:/painel/configuracoes] [t=6]
2. No quadro `Identidade`, escreva o `Nome do portal`. [guia=configuracoes.nome] [t=9]
3. Clique em `Salvar` ao lado do nome. [guia=configuracoes.salvar-nome] [t=12]
4. Para a `Logo do portal`, clique em `Enviar logo` (ou `Trocar logo`) e escolha a imagem. O envio é imediato. [guia=configuracoes.logo] [t=17]
5. Logo abaixo, envie também o favicon, que é o ícone que aparece na aba do navegador.
6. Em `Cidades do portal` ficam as cidades da cobertura. Para adicionar uma nova, chame o time comercial no WhatsApp.
7. Em `Pixels de rastreamento`, cole o código do Google Analytics, do Meta ou de outra plataforma e clique em identificar pixel. Os pixels ativos aparecem logo abaixo.
8. Em `Aplicativo do portal`, ligue o aviso `Baixar app`. Ele convida o visitante a instalar o portal no celular, com um ícone na tela inicial com a logo e o nome do portal.
9. Em `Grupo de WhatsApp`, cole o link de convite do grupo ou canal, marque a opção de exibir o convite no site e salve. No site aparece o convite com o botão `Entrar no grupo`.

## resultado

as informações ou opções de aparência salvas ficam associadas ao portal. O nome aparece no topo quando não há logo.

## desvios

os modelos disponíveis são definidos pelo produto; a tela permite escolher configurações, não criar um modelo visual novo. A aparência final pode depender de conteúdo e módulos existentes.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento apresentar erro ou se a opção esperada não estiver disponível. Não envie senhas nem chaves de integração.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:26-40,72-95`
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/page.tsx:13-29,31-36,59-60,84-86`
- `portal-cidade/docs/PRODUCT.md:82-93`
- `portal-cidade/docs/DECISIONS.md:14-21`

## lacunas

não foi feita validação visual no navegador. Os campos e ações de cada subpágina podem mudar.
