---
id: gerenciar-vagas-e-classificados
titulo: localizar e gerenciar vagas de emprego no painel
publico:
  - admin
modulo: vagas
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

Aqui você encontra as vagas de emprego e abre a edição. Para mudar o preço cobrado por anúncio de vaga, use `Meus Planos`, na parte `Comercial`, e a seção `Vagas de Emprego`.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Em `Conteúdo`, em `Vagas de Emprego`, clique em `Listar Vagas`. [t=18] [guia=menu:/painel/vagas]
2. Digite o cargo ou a empresa em `Buscar por cargo ou empresa...`. [t=34] [guia=vagas.busca]
3. Se quiser, escolha a `Área`. [t=34] [guia=vagas.area]
4. Se quiser, escolha uma opção em `Todos os status`. [t=36] [guia=vagas.situacao]
5. Clique em `Filtrar`. [t=36] [guia=vagas.filtrar]
6. Na linha da vaga desejada, clique em `Editar`. [t=42] [guia=vagas.editar]

## resultado

A edição da vaga é aberta. O botão para gravar as mudanças é `Salvar alterações`.

## desvios

- A coluna `Status` tem um botão com o estado da vaga: `ativa` encerra; os outros estados passam para `ativa`. Vagas `pendente` ou `reprovada` pedem confirmação em `Publicar`.
- Para corrigir o salário oferecido ao candidato, veja “alterar o salário de uma vaga de emprego”. Esse campo não muda o preço cobrado para anunciar.
- Para uma vaga recusada, veja “publicar uma vaga que eu recusei”. Para remover o cadastro, veja “excluir uma vaga de emprego”.
- Para ver os números, veja “ver quantas pessoas viram uma vaga”.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/vagas/page.tsx:163`.
- `frontend/src/app/painel/vagas/VagaForm.tsx:568`.
- `frontend/src/app/painel/planos/[secao]/JanelaEditarPlano.tsx:63`.
- Vídeo `ufB3QTKfPsM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ufB3QTKfPsM.md` e legenda `videos/legendas/ufB3QTKfPsM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
