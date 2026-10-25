---
id: alterar-salario-de-vaga
titulo: "alterar o salário de uma vaga de emprego"
publico:
  - admin
modulo: vagas
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

Aqui você muda o salário oferecido ao candidato em uma vaga já cadastrada. Para alterar o preço cobrado para anunciar uma vaga, o caminho é `Meus Planos`, na parte `Comercial`, e a seção `Vagas de Emprego`.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Vagas de Emprego`, clique em `Listar Vagas`. [t=18] [guia=menu:/painel/vagas]
2. Digite o cargo ou a empresa em `Buscar por cargo ou empresa...`. [t=34] [guia=vagas.busca]
3. Clique em `Filtrar`. [t=36] [guia=vagas.filtrar]
4. Clique em `Editar` na linha da vaga. [t=42] [guia=vagas.editar]
5. Desmarque `A combinar` no quadro `Salário`. [guia=vaga-form.salario-combinar]
6. Preencha o novo `Salário (R$)`. [guia=vaga-form.salario-valor]
7. Clique em `Salvar alterações`. [guia=vaga-form.publicar]

## resultado

O salário da vaga é atualizado. O preço dos planos para anunciar não é alterado.

## desvios

- Para deixar de mostrar um valor, use o mesmo caminho, marque `A combinar` e salve.
- Preço de anúncio e salário oferecido são assuntos diferentes; a alteração de preço deve ser orientada pelo artigo “configurar planos comerciais”.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/vagas/VagaForm.tsx:429`.
- `frontend/src/app/painel/vagas/VagaForm.tsx:568`.
- `frontend/src/app/painel/planos/[secao]/JanelaEditarPlano.tsx:63`.
- Vídeo `ufB3QTKfPsM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ufB3QTKfPsM.md` e legenda `videos/legendas/ufB3QTKfPsM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
