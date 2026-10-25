---
id: turismo-pontos-trocar-fotos
titulo: "trocar as fotos de um ponto turístico"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Pontos Turísticos
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - QrkL_nJEa-c
---

## objetivo
Trocar a capa ou substituir uma foto da galeria de um ponto existente. Cada parte tem uma forma diferente de salvar.

## pré-requisitos/permissões
Acesso de administrador e ponto já cadastrado.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Pontos Turísticos`. [t=7] [guia=menu:/painel/turismo/pontos]
2. Escreva o nome em `Buscar ponto turístico...`. [guia=pontos.campo-busca]
3. Clique em `Buscar`. [guia=pontos.buscar]
4. Clique em `Editar` na linha do ponto. [guia=pontos.editar]

### trocar a capa

5. Em `Foto principal`, clique em `Escolher foto` para selecionar a nova capa. [guia=ponto-editar.foto]
6. Clique em `Salvar alterações`, no fim do formulário. [guia=ponto-editar.salvar]

### substituir foto da galeria

5. Na `Galeria de fotos e vídeos`, clique em `+ Adicionar fotos` para selecionar a nova foto. [guia=galeria.adicionar-fotos]
6. Depois que a nova foto aparecer, clique em `Remover` na foto antiga. [guia=galeria.remover]
7. Na confirmação `Remover esta foto?`, clique em `Remover`. [guia=confirmacao.confirmar]

## resultado
A capa é enviada ao clicar em `Salvar alterações`. As inclusões e remoções da galeria são enviadas na própria ação, sem depender desse botão. Remover uma foto da galeria não troca a capa.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/pontos/page.tsx:83` — busca; `:144` — editar.
- `frontend/src/app/painel/turismo/pontos/[id]/page.tsx:201` — upload imediato; `:263` — remoção; `:431` — capa; `:672` — galeria com legendas; `:746` — salvar.
- `frontend/src/components/painel/GaleriaDeMidia.tsx:243` — remover no modo com legendas.
- `frontend/src/components/painel/ModalAvisoConfirmacao.tsx:135` — confirmação.
- `videos/legendas/QrkL_nJEa-c.srt` — navegação em 7 segundos. O vídeo ensina cadastro, não troca de foto na edição.

## lacunas
Sem navegador ou envio real de fotos. Os tempos de criação do vídeo não foram usados para prometer uma demonstração de edição.
