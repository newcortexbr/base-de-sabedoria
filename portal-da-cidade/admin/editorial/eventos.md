---
id: editorial-eventos
titulo: "agenda de eventos: cadastro, status e vigência"
publico:
  - administrador do portal
modulo: Agenda de Eventos
categoria: conteúdo
aba: Eventos
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
aqui você cadastra e cuida dos eventos da agenda. Eventos têm tela própria, separada do Turismo.

## pré-requisitos/permissões
Entrar no painel como administrador, com o módulo de eventos ativo no portal.

## veja também
- para mudar um evento que já existe, veja o artigo "editar um evento".
- para ver quais eventos estão no ar, veja o artigo "ver a situação dos eventos".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Turístico / Eventos` e depois em `Eventos`. [guia=menu:/painel/turismo/eventos] [t=48]
2. Para cadastrar, clique em `+ Novo Evento` no topo da página. [guia=eventos.novo] [t=55]
3. Escreva o `Título *` do evento. [guia=eventos.titulo]
4. Escolha a `Data *` do evento. [guia=eventos.data]
5. Escreva o `Horário`, por exemplo "19h00 às 23h00". [guia=eventos.horario]
6. Preencha o local, o CEP, a cidade, a categoria, o `Organizador`, o preço, o link de ingresso, o WhatsApp, a descrição e a programação. [guia=eventos.local]
7. Envie a foto de capa do evento, além da galeria.
8. Na parte `Galeria de fotos e vídeos`, clique em `+ Adicionar fotos` para enviar as fotos. [guia=galeria.adicionar-fotos]
9. Role a página até o fim e clique em `Salvar`. Sem este clique, o evento não é gravado. [guia=eventos.salvar]

## resultado
evento ativo permanece no ar segundo as datas reconhecidas pelo servidor; depois de vencido, sai do ar. Destaques e filtros públicos fazem parte do produto, mas a exibição depende também da configuração e da vigência.

## desvios

- A lista da agenda tem busca, filtros e abas de categorias e de organizadores.
- Evento enviado por um cliente passa pela aprovação do administrador depois do pagamento.
- Os planos de eventos (pacotes mensais ou pagamento único, com ou sem destaque) ficam em `Meus planos`; este artigo não cobre essa tela.

- Para pôr um vídeo do YouTube na galeria, veja "colocar um vídeo do YouTube na galeria".
- Ativo não significa necessariamente no ar: a data pode ter encerrado a vigência.
- Inativo é diferente de encerrado.
- Falha de upload: confirme que o evento foi salvo e que está editando o registro certo; não reenvie repetidamente.
- Agenda de Eventos e Turismo são ligáveis separadamente.

## quando pedir ajuda
peça ajuda se status e datas parecerem contraditórios, se a galeria não abrir após salvar ou se evento ativo e vigente não aparecer ao público.

## fontes
- `portal-cidade/frontend/src/app/painel/turismo/eventos/page.tsx:41` — estado derivado da data e campo ativo.
- `portal-cidade/frontend/src/app/painel/turismo/eventos/page.tsx:110` — galeria na criação e edição.
- `docs/PRODUCT.md:41` — módulos Turismo e eventos separados.
- `docs/PRODUCT.md:42` — recursos e ressalva de QA de navegador.

## lacunas
A Epic de eventos não teve QA de navegador conforme `PRODUCT.md`; este conteúdo não declara validação visual. O rótulo exato das ações do formulário pode variar conforme estado.
- revisão 2026-10-19: a galeria do evento agora fica dentro do formulário de edição; `/painel/turismo/eventos/[id]/fotos` só redireciona para a lista. Em evento novo, a galeria pode ser preenchida antes de salvar (envio ocorre após salvar).
