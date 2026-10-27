---
id: cadastrar-instituicoes-e-causas-doacoes
titulo: "cadastrar instituições e causas na área de doações"
publico:
  - admin
modulo: doacoes
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - criar
  - instituicao
  - causa
  - doacao
  - cadastro
  - foto
  - whatsapp
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - grm3bUrPBxM
---

## objetivo

Cadastre uma instituição para aparecer na página de Doações. Se a causa ainda não existe, use antes o artigo “cadastrar uma causa de doação”.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Doações`, clique em `Instituições`. [t=17] [guia=menu:/painel/doacoes]
2. Clique em `+ Nova instituição`.  [t=39] [guia=doacoes.nova]
3. Preencha `Nome da instituição *`.  [t=43] [guia=doacoes.nome]
4. Escolha `Causa *` na lista.  [t=43] [guia=doacoes.causa]
5. Se quiser, preencha `Resumo do card`.  [t=46] [guia=doacoes.resumo]
6. Em `Foto de capa do card *`, clique em `Clique para escolher a imagem`.  [t=58] [guia=doacoes.capa]
7. Se quiser, selecione uma imagem em `Logo`.  [t=60] [guia=doacoes.logo]
8. Se quiser, preencha `Frase de destaque`.  [t=65] [guia=doacoes.frase]
9. Preencha `Descrição completa *`.  [t=69] [guia=doacoes.descricao]
10. Se souber, preencha `CEP`.  [t=73] [guia=campo-cep.cep]
11. Escolha `Cidade *` na lista.  [t=75] [guia=local:cidade]
12. Se quiser, escolha `Bairro`.  [t=75] [guia=local.bairro]
13. Se quiser, preencha `Endereço` com rua e número.  [guia=doacoes.endereco]
14. Se houver, preencha `Link "Conheça a instituição"`.  [t=85] [guia=doacoes.link]
15. Se houver, preencha `WhatsApp`.  [t=88] [guia=doacoes.whatsapp]
16. Se houver, preencha `Instagram`.  [t=88] [guia=doacoes.instagram]
17. Se houver, preencha `Facebook`.  [t=91] [guia=doacoes.facebook]
18. Se houver, preencha `E-mail`.  [t=91] [guia=doacoes.email]
19. Clique em `Salvar instituição`.  [t=98] [guia=doacoes.salvar]
20. Na janela `Publicar no site agora?`, clique em `Sim, publicar`. [guia=confirmacao.confirmar]

## resultado

Após a publicação, aparece `Instituição salva` e a lista de instituições é aberta. Os contatos preenchidos podem aparecer no site.

## explicação

- Nome, causa, descrição completa, cidade e foto de capa do card são obrigatórios.
- A localização do mapa é descoberta a partir do endereço e da cidade; digitar somente o CEP não garante o mapa.
- Capa da página e Galeria são áreas opcionais de fotos e vídeos. Veja “adicionar fotos à página de uma instituição de doações”. A publicação pode concluir com erro em alguma mídia; nesse caso, a tela informa o que precisa ser enviado novamente.
- Para mudar dados já publicados, abra `Editar` na lista de instituições; para retirar uma instituição, veja “excluir uma instituição de doações”.

## como funciona

- Menu `Doações` tem as abas `Instituições` e `Causas`. A lista de instituições tem busca por nome e mostra causa e cidade, com editar, ver no site e excluir.
- Salvou, está no site: a instituição vai ao ar na hora. Para tirar do ar, exclua.
- `Capa da página`: slide do topo com fotos e vídeos do YouTube; setas ordenam e o primeiro item é o que abre. `Foto de capa do card` aparece na listagem; `Logo` é um selo quadrado sobre a capa.
- `Frase de destaque` aparece em letra grande numa faixa rosa; `Resumo do card` aparece na listagem; `Descrição completa` fica na página da instituição.
- Endereço usa os mesmos campos do Guia: CEP, cidade, bairro; o mapa é encontrado sozinho.
- `Galeria`: mais fotos e vídeos; vazia, a seção some do site.
- Cada botão de contato (`Conheça a instituição`, WhatsApp, Instagram, Facebook, e-mail) só aparece no site se estiver preenchido.

## no site

- A página `Doações` abre com o convite Corrente do Bem e o vídeo `Veja como funciona`. O visitante busca por nome, cidade ou o que a instituição faz e filtra pelas causas cadastradas. Card: foto, cidade, resumo e `Conheça a instituição`.
- Página da instituição: capa, causa, cidade, botões `Conheça a instituição` e `Falar no WhatsApp`, redes sociais, copiar link para compartilhar, descrição completa, mapa com endereço, `Como chegar` e galeria.

## fontes

- `frontend/src/components/painel/Sidebar.tsx:259`
- `frontend/src/app/painel/doacoes/EditorInstituicao.tsx:188`
- `frontend/src/app/painel/doacoes/EditorInstituicao.tsx:249`
- `frontend/src/app/painel/doacoes/EditorInstituicao.tsx:451`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/grm3bUrPBxM.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
