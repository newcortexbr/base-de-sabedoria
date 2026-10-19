---
id: editorial-eventos
titulo: agenda de eventos: cadastro, status e vigência
publico:
  - administrador do portal
modulo: Agenda de Eventos
categoria: conteúdo
aba: Eventos
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
cadastrar e administrar eventos da agenda. Agenda de Eventos é módulo separado de Turismo, mesmo compartilhando o app no backend.

## pré-requisitos/permissões
A tela de eventos fica no painel. Acesso e módulo ativo dependem do portal e do papel atribuído; o guia não substitui essas permissões.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Turístico / Eventos` e depois em `Eventos` (`/painel/turismo/eventos`).
2. Para cadastrar, clique em `+ Novo Evento` no topo da página. Para mudar um evento que já existe, clique em `Editar` na linha dele.
3. Preencha o `Título`, a `Data`, o `Horário`, o local, a cidade, a categoria, o `Organizador` e os outros campos que aparecem.
4. Na parte `Galeria de fotos e vídeos`, adicione as fotos e os vídeos do YouTube. Num evento novo, eles são enviados assim que você salvar.
5. Clique em `Salvar`.
6. Na lista, veja a situação de cada evento: `No ar` (aparecendo no site), `Encerrado` (a data já passou) ou `Inativo` (você mesmo tirou do ar).

## resultado
evento ativo permanece no ar segundo as datas reconhecidas pelo servidor; depois de vencido, sai do ar. Destaques e filtros públicos fazem parte do produto, mas a exibição depende também da configuração e da vigência.

## desvios
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
