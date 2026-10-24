---
id: editorial-eventos
titulo: "cadastrar um evento pelo painel"
publico:
  - administrador do portal
modulo: Agenda de Eventos
categoria: conteúdo
aba: Eventos
tipo_problema: publicação
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
Cadastrar um evento na agenda pelo painel do administrador. Este fluxo é separado do cadastro pela área do cliente.

## pré-requisitos/permissões
Acesso de administrador ao módulo de eventos.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Eventos`. [t=48] [guia=menu:/painel/turismo/eventos]
2. Clique em `+ Novo Evento`. [t=55] [guia=eventos.novo]
3. Preencha `Título *`. [t=58] [guia=eventos.titulo]
4. Escolha a `Data *`. [t=58] [guia=eventos.data]
5. Se o evento durar vários dias, preencha `Data de término (opcional)`. [t=58] [guia=eventos.data-fim]
6. Preencha `Horário`, se houver. [t=58] [guia=eventos.horario]
7. Preencha `Local`, se houver. [t=58] [guia=eventos.local]
8. Informe o `CEP`, se souber. [t=58] [guia=campo-cep.cep]
9. Confira ou escolha a `Cidade`. [guia=eventos.cidade]
10. Se quiser, escolha a `Categoria`. [t=61] [guia=eventos.categoria]
11. Se quiser, escolha o `Organizador`. [t=61] [guia=eventos.organizador]
12. Para enviar a capa, clique em `Escolher foto`, na parte `Foto de capa`. [t=61] [guia=eventos.capa]
13. Se quiser mais fotos, clique em `+ Adicionar fotos`, na `Galeria de fotos e vídeos`. [t=61] [guia=galeria.adicionar-fotos]
14. Confira ou complete `Endereço completo`. [guia=eventos.endereco]
15. Se quiser, preencha `Organização`. [guia=eventos.organizacao]
16. Preencha `Preço / Ingresso`, se houver informação a mostrar ao visitante. [t=64] [guia=eventos.preco]
17. Se quiser, preencha `Link de compra de ingresso ou rede social`. [t=64] [guia=eventos.link-ingresso]
18. Se quiser, preencha `WhatsApp de contato`. [t=64] [guia=eventos.whatsapp]
19. Se quiser, preencha `Vídeo do evento (YouTube)`. [guia=eventos.video]
20. Preencha `Descrição`, se houver. [t=67] [guia=eventos.descricao]
21. Se quiser exibir o evento em destaque, marque `Destaque`. [guia=eventos.destaque]
22. Confira se `Ativo` está marcado para manter o evento ligado. [guia=eventos.ativo]
23. Clique em `Salvar`. [t=70] [guia=eventos.salvar]

## resultado
O formulário fecha após o salvamento. Em cadastro novo, a galeria é enviada depois que o evento é criado. Se parte do envio falhar, o evento já existe: abra sua edição e envie só os itens que faltaram.

## desvios
- Para incluir os horários de cada atividade, veja [montar a programação de um evento](eventos-programacao.md).
- `Preço / Ingresso` informa o visitante; não configura cobrança ou plano do portal.
- `Data de término (opcional)` controla o último dia de vigência; sem ela, vale `Data *`.
- O vídeo separado do evento e os vídeos da galeria são campos diferentes. Para a galeria, veja [colocar um vídeo do YouTube na galeria](video-na-galeria.md).

## fontes
- Código b2f62d3f: `frontend/src/components/painel/Sidebar.tsx:187`.
- `frontend/src/app/painel/turismo/eventos/page.tsx:434` — novo; `:448` — campos; `:343` — envio da galeria; `:803` — salvar.
- `backend/turismo/vigencia.py:46` — data de referência.
- `videos/legendas/Hyh3UxHW_jU.srt` — cadastro administrativo entre 48 e 72 segundos.

## lacunas
Sem navegador ou envio real de arquivos. As marcas propostas precisam de implementação. SEO e opções comerciais não são necessários para este cadastro básico e não foram demonstrados no vídeo.
