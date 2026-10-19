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
1. Abra `Eventos` em `/painel/turismo/eventos`.
2. Para criar ou editar, use as ações dessa tela. Informe título, datas, local/cidade, categoria, organizador e demais campos apresentados.
3. Revise o status `No ar`, `Encerrado` ou `Inativo`. `Inativo` é escolha administrativa; `Encerrado` deriva da data.
4. Na criação, salve primeiro o evento; a galeria de fotos e vídeos só pode ser enviada quando o registro tiver sido criado.
5. Para fotos de evento existentes, acesse a rota de fotos ligada ao evento (`/painel/turismo/eventos/[id]/fotos`).

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
