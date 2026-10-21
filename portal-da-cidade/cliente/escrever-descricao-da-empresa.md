---
id: cliente-escrever-descricao-empresa
titulo: "escrever a descrição da empresa"
publico:
  - cliente
modulo: guia-comercial
categoria: guia-comercial
aba: Minha empresa
tipo_problema:
  - editar-perfil-empresa
  - contato-incorreto
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - OInXMQlSWqw
---

## objetivo
aqui você escreve o que sua empresa faz.

## pré-requisitos
- ter vínculo ativo com a empresa no portal.
- estar na área de cliente autenticada. não há instruções de login neste artigo.

## passos

1. No menu da esquerda da sua área, na parte `Minha conta`, clique em `Minha empresa` (`/minha-conta/minha-empresa`). [guia=menu:/minha-conta/minha-empresa]
2. Escreva em `Descrição da empresa` o que sua empresa faz. [guia=empresa.descricao]
3. Clique em `Salvar`. Aparece a mensagem `Dados atualizados em todas as suas seções.` [guia=empresa.salvar]

## resultado
A descrição fica salva.

## desvios
- os campos disponíveis dependem do tipo de cadastro de empresa.
- se a conta perdeu o vínculo com a empresa, a tela pode informar que o perfil foi removido; suporte/admin deve verificar o vínculo.

## quando pedir ajuda
se não reconhecer a empresa associada ou não puder editar o próprio perfil, contate o suporte do portal. não tente alterar dados de outra empresa.

## fontes
- `portal-cidade/frontend/src/app/minha-conta/minha-empresa/page.tsx:3`
- `portal-cidade/frontend/src/app/minha-conta/minha-empresa/page.tsx:20`
- `portal-cidade/frontend/src/app/minha-conta/minha-empresa/page.tsx:79`
- `portal-cidade/docs/PRODUCT.md:24`

## lacunas
testado em tela (2026-10-15, conta sintética sem empresa no Guia): salvar e recarregar. não testado: logo enviado, aparência na ficha pública do Guia, texto de erro por campo (e-mail/telefone inválidos não mostraram mensagem visível). sem tempo fixo de atualização.
