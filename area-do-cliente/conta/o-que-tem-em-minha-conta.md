---
id: ac-o-que-tem-em-minha-conta
titulo: "ver meus dados: o que aparece em Minha conta"
publico:
  - cliente
modulo: conta
aba: Minha conta
tipo_problema:
  - meus dados
  - dados cadastrais
  - minha conta
  - onde vejo meu cadastro
  - protegido
  - não informado
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

encontrar a página `Minha conta` e entender cada informação que aparece nela.

## pré-requisitos

- Estar logado.

## passos

1. No rodapé do menu da esquerda, clique no seu nome (embaixo dele está escrito `Minha conta`). Se a sua conta estiver bloqueada, o item `Minha Conta` aparece também no meio do menu.
2. A página `Minha conta` (`/minha-conta`) abre.

## explicação

a página tem dois quadros:

- `Dados cadastrais` — "Estas informações valem para todos os seus negócios."
  - `Nome completo`, `CPF / CNPJ` e `E-mail de acesso`: aparecem protegidos (com cadeado). Você só vê; quem altera é o suporte. Campo vazio aparece como "Não informado".
  - `Telefone / WhatsApp`: é o único dado que você mesmo muda (veja `ac-atualizar-telefone`).
  - Botão `Salvar alterações`: salva o telefone.
- `Senha de acesso` — mostra o seu e-mail mascarado e o botão `Alterar minha senha` (veja `ac-trocar-senha-logado`).

O `E-mail de acesso` é o mesmo que você usa para entrar e para onde vão os avisos e as respostas do suporte.

## resultado

você vê os dados da conta, que são os mesmos para todos os seus negócios.

## desvios

- "Não foi possível carregar seus dados agora." com o link `Tentar de novo`: falha momentânea. Clique no link.
- Para corrigir nome, CPF/CNPJ ou e-mail, veja `ac-corrigir-nome-documento-email`.

## quando pedir ajuda

peça ajuda se os dados protegidos estiverem errados ou se a página não carregar mesmo depois de `Tentar de novo`.

## fontes

- `src/app/(cliente)/minha-conta/page.tsx:37` — cabeçalho "Minha conta"; `:50` — quadro "Dados cadastrais"; `:66` — erro de carregamento.
- `src/app/(cliente)/minha-conta/MinhaContaForm.tsx:37` — campo protegido e "Não informado"; `:69` — campos; `:111` — `Salvar alterações`.
- `src/app/(cliente)/minha-conta/SenhaDeAcesso.tsx:22` — quadro "Senha de acesso".
- `src/ui/shells/ClientShell.tsx:219` — "Minha conta" no rodapé; no menu só para conta bloqueada.

## lacunas

o texto do topo da página diz "Gerencie seu contato e a segurança de acesso à Área de Membros." — usa "Área de Membros", nome diferente de "Área do Cliente" (`page.tsx:39`). Tela não validada no navegador.
