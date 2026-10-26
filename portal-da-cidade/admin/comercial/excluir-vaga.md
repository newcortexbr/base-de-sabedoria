---
id: excluir-vaga
titulo: "excluir uma vaga de emprego"
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

Aqui você apaga uma vaga de emprego permanentemente.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Em `Conteúdo`, em `Vagas de Emprego`, clique em `Listar Vagas`. [t=18] [guia=menu:/painel/vagas]
2. Digite o cargo ou a empresa em `Buscar por cargo ou empresa...`. [t=34] [guia=vagas.busca]
3. Clique em `Filtrar`. [t=36] [guia=vagas.filtrar]
4. Clique em `Excluir` na linha da vaga. [t=45] [guia=vagas.excluir]
5. Na pergunta `Excluir esta vaga permanentemente?`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

A vaga é excluída; o painel mostra `Vaga excluída`.

## desvios

- Se quiser somente encerrar a publicação, use o botão `ativa` na coluna `Status`, em vez de excluir o cadastro.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/vagas/page.tsx:113`.
- `frontend/src/app/painel/vagas/page.tsx:265`.
- `frontend/src/components/painel/ModalAvisoConfirmacao.tsx:153`.
- Vídeo `ufB3QTKfPsM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ufB3QTKfPsM.md` e legenda `videos/legendas/ufB3QTKfPsM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

O vídeo cita Excluir, mas não demonstra a janela de confirmação. Não há tempo atribuído ao que não foi demonstrado.
