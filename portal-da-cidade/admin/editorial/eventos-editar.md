---
id: eventos-editar
titulo: "editar um evento"
publico:
  - administrador do portal
modulo: Agenda de Eventos
categoria: conteúdo
aba: Eventos
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
aqui você muda um evento que já foi cadastrado e salva.

## pré-requisitos/permissões
Entrar no painel como administrador, com o módulo de eventos ativo no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Turístico / Eventos` e depois em `Eventos`. [guia=menu:/painel/turismo/eventos]
2. Para mudar um evento que já existe, clique em `Editar` na linha do evento que você quer. [guia=eventos.editar]
3. Faça as mudanças, role até o fim e clique em `Salvar`. [guia=eventos.salvar]

## resultado
O evento fica com as mudanças.

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
