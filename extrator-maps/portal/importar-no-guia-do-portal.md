---
id: ext-importar-no-guia-do-portal
titulo: "extrair do Extrator Maps e importar as empresas no Guia Comercial do Portal da Cidade"
publico:
  - cliente
modulo: portal
aba: Nova extração
tipo_problema:
  - importar-no-portal
  - base-para-portal
  - guia-comercial
  - alimentar-o-portal
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - jl7GHmHVJcM
  - F136_v1JyRY
---

## objetivo
encher o Guia do seu portal com empresas da cidade usando uma lista do Google Maps.

## pré-requisitos
- Extrator Maps e painel administrativo do Portal abertos.
- créditos suficientes (`ext-creditos-como-funcionam`).

## explicação
- a importação é manual: o Extrator gera o arquivo e você o sobe no Portal. o Extrator não importa nada sozinho.
- estratégia do vídeo: importar as empresas no plano gratuito, com pouca visibilidade, para o portal não parecer vazio; depois oferecer o upgrade de plano. empresas importadas aparecem só com nome e endereço (e, se houver, descrição e horário); telefone, galeria de fotos e outros campos só aparecem no plano pago.
- do lado do Portal, o passo a passo completo está em `importar-empresas-no-guia` (portal-da-cidade/admin/comercial/importar-empresas-no-guia.md).

## passos
1. no Extrator, clique em `Nova extração`.
2. em `Finalidade`, escolha `Base para Portal` e `Avançar`.
3. em `Localização`, escolha o estado e a cidade; bairros opcionais (se for segmentar por bairro, uma cidade só, separados por vírgula). no vídeo o autor usa nicho em vez de bairro.
4. em `Nicho`, digite um ramo (exemplo do vídeo: imobiliária) ou deixe em branco. `Avançar`.
5. em `Quantidade`, defina o máximo (exemplo do vídeo: 100).
6. o formato fica em `XLSX`. em `Confirmação`, clique em `Iniciar extração`.
7. quando concluir, clique em `Baixar` e salve o arquivo sem editar.
8. no painel do Portal, abra `Guia Comercial` → listar empresas → `Importar do Google Maps`, clique em `Escolher arquivo` e selecione o arquivo. o Portal mostra "total de linhas" e "linhas novas", e aponta empresas já existentes ou com problema.
9. categorias que o Portal não reconhece pedem escolha: selecione uma categoria existente do seu sistema (o Portal não cria categoria sozinho).
10. clique em `Importar empresas`. depois há as opções `desfazer importação`, `ver empresas` e `importar outra planilha` (desfazer apaga as empresas dessa importação).

## resultado
as empresas aparecem no Guia do portal.

## se der errado
- aparecem empresas de nicho vizinho e categorias em inglês: é normal da fonte do Google; o Portal tenta identificar e pede a categoria das que não reconheceu.
- alguns horários podem vir fora do formato (observado no vídeo).
- arquivo expirado (passou de 7 dias): `ext-baixar-arquivos`.
- dúvidas do Portal: `importar-empresas-no-guia`.
