---
id: admin-publicar-vaga-recusada
titulo: "publicar uma vaga que eu recusei"
publico:
  - admin
modulo: vagas
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - desfazer recusa
  - recusei sem querer
  - aprovar vaga reprovada
  - voltar atrás na reprovação
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

Aqui você aprova e publica uma vaga que ficou reprovada por engano.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Vagas de Emprego`, clique em `Listar Vagas`. [t=18] [guia=menu:/painel/vagas]
2. No filtro `Todos os status`, escolha `Reprovada`. [guia=vagas.situacao]
3. Clique em `Filtrar`. [guia=vagas.filtrar]
4. Na coluna `Status` da vaga, clique em `reprovada`. [guia=vagas.alterar-status]
5. Na pergunta de aprovação e publicação, clique em `Publicar`. [guia=confirmacao.confirmar]

## resultado

A vaga passa para `ativa`, e o painel mostra `Vaga publicada`. A visibilidade pública também depende das regras do contratante.

## desvios

- Este caminho é da lista de vagas. Não conclua que outras telas de moderação tenham a mesma ação.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/vagas/page.tsx:129`.
- `frontend/src/app/painel/vagas/page.tsx:178`.
- `backend/classificados/views_public.py:30`.
- Vídeo `ufB3QTKfPsM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ufB3QTKfPsM.md` e legenda `videos/legendas/ufB3QTKfPsM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

O vídeo mostra a lista, mas não demonstra a reversão da reprovação; os passos dessa ação foram conferidos no código. Não há tempo atribuído ao que não foi demonstrado.
