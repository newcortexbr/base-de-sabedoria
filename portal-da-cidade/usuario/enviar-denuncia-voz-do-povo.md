---
id: usuario-enviar-denuncia-voz-do-povo
titulo: enviar uma denúncia em A Voz do Povo
publico:
  - usuario
modulo: utilidade
categoria: utilidade
aba: nao-se-aplica
tipo_problema: denuncia
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - G1B9mAWbCk4
---

## objetivo

contar ao portal um problema da cidade, como buraco, lixo ou falta de luz, de forma anônima ou não.

## pré-requisitos

- a seção `A Voz do Povo` precisa estar ligada no portal.

## passos

1. No menu do topo do portal, clique em `A Voz do Povo`. [guia=topo.utilidade]
2. No quadro `Fazer uma denúncia`, em `Qual o problema?`, escolha a `Categoria *`. [guia=voz.categoria] [t=17]
3. Em `O que aconteceu?`, escreva no campo `O que aconteceu? *` ou clique em `Gravar áudio` e fale. [guia=voz.relato] [t=20]
4. Em `Onde e quando?`, escolha a `Cidade` e o `Bairro`. [guia=voz.local] [t=23]
5. No campo `Data e hora do ocorrido`, escreva quando foi (por exemplo, "ontem à noite, por volta das 22h"). [guia=voz.quando]
6. Se tiver, em `Mostre pra gente`, clique em `+ Adicionar fotos` (até 5) e em `+ Adicionar vídeo`. [guia=voz.midia] [t=23]
7. Se quiser, em `Seu contato`, preencha `Seu nome` e `WhatsApp`. É opcional: a denúncia pode ser anônima. [guia=voz.contato] [t=25]
8. Clique em `Enviar denúncia` e espere a mensagem `Denúncia enviada`. [guia=voz.enviar]

## resultado

a denúncia chega à redação do portal, que analisa o caso. Aparece `Denúncia enviada` e `Obrigado por ajudar a cidade. A redação vai analisar seu relato.`

## desvios

- sem categoria aparece `Escolha uma categoria para a denúncia.`; sem relato nem áudio, `Escreva o que aconteceu ou grave um áudio.`
- o vídeo tem limite de tamanho e de 2 minutos; acima disso só os 2 primeiros minutos são enviados. Formatos aceitos: MP4, MOV, WEBM e 3GP.
- fotos e vídeo demoram a subir: não feche a página enquanto aparece `Subindo fotos e áudio. Não feche a página.`
- o portal não promete resposta nem prazo; casos relevantes podem virar matéria.

## quando pedir ajuda

em emergência, ligue para os telefones oficiais (veja `Telefones Úteis` na mesma página).

## fontes

- `portal-cidade/frontend/src/app/a-voz-do-povo/UtilidadePublicaClient.tsx:575-660,718-995`
- `portal-cidade/frontend/src/components/layout/HeaderClient.tsx:587`
- vídeo `G1B9mAWbCk4`.

## lacunas

não verificado em navegador. O limite exato de tamanho do vídeo está na constante `LIMITE_VIDEO_MB`, não lida nesta rodada. O vídeo do catálogo é uma peça de divulgação: os tempos marcam a fala, não a tela.
