---
id: denuncias-quem-pode-denunciar-avisos-e-limites
titulo: "denúncias: quem pode denunciar, se sou avisado e limites contra abuso"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: duvida
tags:
  - denuncia
  - moderacao
  - regras
  - notificacao
  - imagem
  - quantidade
  - automatico
  - cliente
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

Entenda como as denúncias chegam e o que o portal faz sozinho.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Denúncias`. [guia=aprovacoes-aba:denuncias]

## resultado

As denúncias novas aparecem em `Pendentes`.

## perguntas comuns

**quem pode denunciar?** Qualquer visitante, sem entrar na conta, nas páginas do Guia Comercial, de Vagas, de Classificados e de Eventos.
**sei quem denunciou?** Não. O painel não mostra quem foi.
**sou avisado de denúncia nova?** Não. Não há e-mail nem aviso; confira a aba `Denúncias` ou o número no menu.
**muitas denúncias tiram o item do ar sozinhas?** Não. Nada acontece automaticamente: só sai do ar se você excluir ou bloquear.
**o portal protege contra denúncia falsa em massa?** Em parte. A mesma conexão pode fazer até 10 denúncias por hora no portal, precisa passar por uma verificação "não sou robô" a partir da segunda em 24 horas e não pode denunciar de novo o mesmo item enquanto a anterior estiver pendente. Muitas pessoas diferentes ainda conseguem denunciar o mesmo item.
**quantas imagens o denunciante pode mandar?** Até 3, de até 5 MB cada.
**a descrição tem limite?** Sim, até 2000 caracteres, e é opcional.
**as imagens ficam guardadas?** Sim, ficam junto da denúncia e podem ser abertas no detalhe.

## fontes

- backend/denuncias/views_public.py; throttling.py; servicos.py:21-63 (captcha, contador, chave_pendente)
- backend/denuncias/models.py:44-45; serializers.py:10
- core/settings/base.py (taxa 10/hora)

## lacunas

- Conferido por leitura do código no HEAD e8f43702 (wt-suporte-tool). Sem execução do produto nem validação visual.
- A taxa 10/hora e o captcha vêm da resolução anterior; o valor em settings não foi relido nesta rodada.
- Por quanto tempo as imagens ficam guardadas não está definido.
