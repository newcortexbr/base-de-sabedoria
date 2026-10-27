---
id: editar-datas-de-votacao-melhores-da-cidade
titulo: "alterar as datas de uma votação Melhores da Cidade"
publico:
  - admin
modulo: melhores da cidade
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - melhores da cidade
  - votacao
  - editar
  - datas
  - prazo
  - periodo
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ajzmuupRJMM
---

## objetivo

Aqui você altera o começo ou o fim de uma votação. Depois que ela começa, o começo fica bloqueado.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, clique em `Melhores da Cidade`. [t=13] [guia=menu:/painel/melhores-da-cidade]
2. No cartão da votação, clique em `Editar` (ícone de lápis). [t=99] [guia=melhores.editar]
3. Se a votação ainda estiver agendada e quiser mudar o começo, altere `Começa em`. [guia=melhores-editar.inicio]
4. Se quiser mudar o fim, altere `Termina em`. [t=104] [guia=melhores-editar.fim]
5. Clique em `Salvar`. [guia=melhores-editar.salvar]

## resultado

O novo período é enviado para salvar. Se o painel mostrar erro, corrija os campos indicados antes de tentar de novo.

## desvios

- No ar, o campo de começo fica desabilitado e mostra `Já começou: não muda mais.`
- A edição também permite mudar `Nome da votação` e `Nome das competições`; não troca os participantes.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/melhores-da-cidade/ModalEditar.tsx:24`.
- `frontend/src/app/painel/melhores-da-cidade/ModalEditar.tsx:94`.
- Vídeo `ajzmuupRJMM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ajzmuupRJMM.md` e legenda `videos/legendas/ajzmuupRJMM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
