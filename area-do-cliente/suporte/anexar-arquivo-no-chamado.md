---
id: ac-anexar-arquivo-no-chamado
titulo: "anexar print ou arquivo em um chamado"
publico:
  - cliente
modulo: suporte
aba: Suporte
tipo_problema:
  - anexar arquivo
  - mandar print
  - enviar foto
  - anexo
  - tipo de arquivo não permitido
  - arquivo acima do limite
  - limite de anexos
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

enviar um print, foto, planilha ou documento junto com o chamado.

## pré-requisitos

- Estar logado.
- O arquivo precisa ser de um destes tipos: PDF (`.pdf`), imagem PNG (`.png`), JPG (`.jpg`), WEBP (`.webp`), texto (`.txt`), CSV (`.csv`), planilha Excel (`.xlsx`) ou documento Word (`.docx`).
- Tamanho máximo por arquivo e quantidade por chamado aparecem embaixo do botão: "Até N MB por arquivo, no máximo N arquivos por chamado." (o padrão é 100 MB e 20 arquivos).

## passos

1. No chamado novo (`Novo chamado`) ou na caixa `Responder` de um chamado aberto, clique em `Anexar arquivo`.
2. Escolha o arquivo no seu computador ou celular. No chamado novo dá para escolher vários; para tirar um da lista, clique em `Remover`.
3. Termine o chamado ou a resposta e clique em `Enviar chamado` (ou `Enviar resposta`). No chamado novo, os arquivos sobem logo depois que o chamado é criado. Na resposta, o arquivo sobe na hora em que você o escolhe (o botão mostra `Enviando…`).

## resultado

o anexo aparece no `Histórico do atendimento`, com nome e tamanho, e pode ser aberto clicando no nome.

## desvios

- "Tipo de arquivo não permitido.": o arquivo não é de um tipo da lista. O sistema confere o conteúdo do arquivo, não só o nome — renomear `.zip` ou `.exe` para `.pdf` não passa. Zip, vídeo, áudio e executáveis não são aceitos.
- "Arquivo acima do limite permitido.": o arquivo é grande demais. Diminua (por exemplo, print em vez de vídeo).
- "Este chamado já atingiu o limite de anexos.": chegou ao número máximo do chamado.
- "O chamado foi aberto, mas o anexo não subiu: ... Abra o chamado e envie por lá, sem abrir um novo.": o chamado foi criado; mande o arquivo pela resposta dentro dele.
- "Sua sessão expirou. Atualize a página e entre novamente.": entre de novo e envie o arquivo.
- "Não foi possível enviar o anexo. Tente novamente.": falha momentânea.
- Imagem com extensão `.jpeg` pode não aparecer na janela de escolha de arquivos; renomeie para `.jpg` ou mude o filtro da janela para "Todos os arquivos".
- Não anexe documentos com senhas, códigos ou chaves.

## quando pedir ajuda

se o arquivo certo for recusado, descreva o problema na mensagem do chamado sem anexo.

## fontes

- `src/domain/ports/file-storage.ts:45` — lista de tipos permitidos; `:59` — conferência pela assinatura do arquivo.
- `src/app/(cliente)/api/anexos/deps.ts:43` — tamanho máximo (padrão 100 MB); `:54` — máximo por chamado (padrão 20).
- `src/app/(cliente)/suporte/novo/page.tsx:63` — texto "Até N MB por arquivo, no máximo N arquivos por chamado.".
- `src/app/(cliente)/suporte/novo/NovoTicketForm.tsx:195`–`:251` — `Anexar arquivo`, `Remover`, aviso de anexo que não subiu.
- `src/app/(cliente)/suporte/novo/anexo-local.ts` — "Arquivo acima do limite permitido." e "Este chamado já atingiu o limite de anexos.".
- `src/ui/ticket/AttachmentUploader.tsx:36`, `:128`, `:159`–`:165` — botão e mensagens no chamado aberto.
- `docs/DECISIONS.md` DEC-35 — allowlist.

## lacunas

o botão aceita `.jpg` mas não lista `.jpeg` no filtro da janela; não foi testado se o servidor aceita um JPEG com nome `.jpeg` (pela assinatura deve aceitar). Limites reais de produção dependem de configuração.
