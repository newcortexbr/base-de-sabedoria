---
id: admin-eventos-organizadores
titulo: "cadastrar um organizador de eventos"
publico:
  - administrador do portal
modulo: Agenda de Eventos
categoria: conteúdo
aba: Organizadores
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
Cadastrar a pessoa ou empresa que organiza eventos, para poder escolhê-la no campo `Organizador`.

## pré-requisitos/permissões
Acesso de administrador. Os passos abaixo cadastram sem login do proprietário; o bloco de acesso é opcional.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Eventos`. [t=48] [guia=menu:/painel/turismo/eventos]
2. Clique na aba `Organizadores`. [t=55] [guia=eventos.aba-organizadores]
3. Clique em `+ Novo Organizador`. [guia=eventos-organizadores.novo]
4. Preencha `Nome *`. [guia=eventos-organizador-novo.nome]
5. Se quiser, preencha `Descrição`. [guia=eventos-organizador-novo.descricao]
6. Se quiser, selecione um arquivo em `Logo`. [guia=eventos-organizador-novo.logo]
7. Se quiser, escolha uma opção em `Cor do logo`. [guia=eventos-organizador-novo.cor]
8. Clique em `Criar Organizador`. [guia=eventos-organizador-novo.salvar]

## resultado
O painel mostra `Organizador cadastrado` e volta para a lista quando o acesso opcional não foi preenchido.

## cadastrar com acesso do proprietário
Para criar também o login, preencha o bloco `Acesso do proprietário (opcional)` antes de concluir:

1. Preencha `Nome do responsável *`. [guia=acesso-proprietario.nome]
2. Preencha `E-mail de login *`. [guia=acesso-proprietario.email]
3. Preencha `Senha inicial *`. [guia=acesso-proprietario.senha]
4. Clique em `Criar Organizador`. [guia=eventos-organizador-novo.salvar]
5. Depois de guardar os dados exibidos, clique em `Anotei os dados, voltar para a lista`. [guia=eventos-organizador-novo.confirmar-dados]

## desvios
Se o acesso falhar depois do cadastro, o organizador já foi criado: use a edição indicada no aviso para resolver o acesso. Não cadastre o mesmo organizador novamente. A confirmação de exclusão informa que os eventos perderão o vínculo.

## fontes
- Código b2f62d3f: `frontend/src/components/painel/AbasEventos.tsx:12` e `:49`.
- `frontend/src/app/painel/turismo/eventos/organizadores/page.tsx:100` — novo; `:82` — exclusão.
- `frontend/src/app/painel/turismo/eventos/organizadores/cadastrar/page.tsx:59` — validação e falha parcial; `:116` — campos; `:186` — criar.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:236` — campos; `:378` — acesso opcional.
- `videos/legendas/Hyh3UxHW_jU.srt` — só o acesso à agenda e apresentação da aba.

## lacunas
Sem navegador nem criação real de acesso. O código de envio de e-mail não comprova entrega; o cartão informa o resultado disponível. O vídeo não demonstra o cadastro do organizador.
