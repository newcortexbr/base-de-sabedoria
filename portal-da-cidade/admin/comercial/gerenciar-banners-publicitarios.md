---
id: gerenciar-banners-publicitarios
titulo: gerenciar banners publicitários
publico:
  - admin
modulo: banners
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - criar
  - banner
  - publicidade
  - imagem
  - link
  - espaco
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - BqIfSq7bVXM
---

## objetivo

Aqui você cadastra um banner no painel. Para tirar um banner do ar sem apagar, veja “ativar ou desativar um banner publicitário”.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Em `Conteúdo`, clique em `Banners Publicitários`. [t=10] [guia=menu:/painel/guia/banners]
2. Clique em `+ Novo Banner`. [t=46] [guia=guia-banners.novo]
3. Preencha `Título *`. [t=48] [guia=guia-banners-cadastrar.titulo]
4. Envie a arte em `Imagem *`. [t=48] [guia=guia-banners-cadastrar.imagem]
5. Se quiser abrir um endereço ao clicar na arte, preencha `URL de Destino`. [t=51] [guia=guia-banners-cadastrar.url-destino]
6. Abra `Posição *`. [t=54] [guia=guia-banners-cadastrar.posicao]
7. Escolha o local de exibição na lista. [t=56] [guia=guia-banners-cadastrar.posicao-lista]
8. Preencha `Nome da Empresa *` em `Dados da venda`. [t=85] [guia=guia-banners-venda.empresa]
9. Preencha `Telefone *`. [t=87] [guia=guia-banners-venda.telefone]
10. Preencha `Valor do Plano *`. [t=87] [guia=guia-banners-venda.valor]
11. Se quiser vincular um cliente cadastrado, escolha-o em `Atrelar a um cliente`. [t=92] [guia=guia-banners-venda.cliente]
12. Defina `Data início`. [t=95] [guia=guia-banners-cadastrar.data-inicio]
13. Defina `Data fim`. [t=97] [guia=guia-banners-cadastrar.data-fim]
14. Defina `Ordem`. [t=97] [guia=guia-banners-cadastrar.ordem]
15. Deixe `Ativo` marcado para permitir a exibição. [t=100] [guia=guia-banners-cadastrar.ativo]
16. Clique em `Salvar Banner`. [t=100] [guia=guia-banners-cadastrar.salvar]

## resultado

O cadastro é salvo. A exibição depende de estar ativo, aprovado e dentro do período.

## desvios

- Com a lista vazia, também existe o botão `+ Cadastrar banner`.
- Dependendo da posição, aparecem campos opcionais de categoria, roteiro ou ponto turístico.
- Os dados de venda são internos. Eles não são o preço dos espaços vendidos na área do cliente; esses preços ficam em `Meus Planos`.
- Para mudar um cadastro, veja “editar um banner publicitário”; para apagar, veja “excluir um banner publicitário”.

## lista e filtros

- A lista mostra imagem, página, posição e período de cada banner. Busca por título; filtros por página (home, notícias, Guia comercial, vagas, turismo, eventos) e por situação: `No ar`, `Agendado`, `Vencido`, `Fora do ar`, `Aguardando pagamento`, `Pendente de aprovação`, `Reprovado`.
- Banner `Vencido` sai do site sozinho quando a data fim passa.
- Cada linha tem ativar ou desativar, editar e excluir.

## posição e prévia

- `Posição *` define a página e o lugar exato (topo da página, cabeçalho, outdoor, dentro da matéria, lateral etc.); cada posição tem um tamanho ideal de arte. O campo de busca da lista filtra: digitar "matéria" mostra as posições dentro e ao lado das notícias.
- A prévia ao lado mostra onde o banner aparece, no computador e no celular. Nada muda no ar até salvar.
- `Dados da venda` (empresa, telefone, valor do plano) nunca aparecem para o visitante. `Atrelar a um cliente` vincula a um cliente de `Meus Clientes`.
- No site: banner de turismo no topo da página de turismo; em notícias, no topo acima das matérias; no Guia comercial, logo abaixo do menu.

## contratação pelo cliente

O cliente pode contratar o espaço sozinho em `Banners Publicitários` na área do cliente, sem cadastro manual: vê os banners no ar, em análise e aguardando pagamento, clica em novo banner, escolhe página e posição (cartões com o desenho do lugar), o período, envia a arte e vê o total; `Pagar e publicar` por Pix ou cartão. Pago, o banner entra na fila de aprovação do administrador, que decide se vai ao ar. Só posições com preço em `Meus Planos` ficam à venda.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/guia/banners/cadastrar/page.tsx:152`.
- `frontend/src/app/painel/guia/banners/CamposDeVenda.tsx:57`.
- `frontend/src/app/painel/guia/banners/regras.ts`.
- Vídeo `BqIfSq7bVXM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/BqIfSq7bVXM.md` e legenda `videos/legendas/BqIfSq7bVXM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
