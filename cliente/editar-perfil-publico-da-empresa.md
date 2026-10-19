---
id: cliente-editar-perfil-publico-empresa
titulo: atualizar as informações públicas da empresa
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
---

## objetivo
atualizar descrição, logo e contatos do perfil da empresa que visitantes veem.

## pré-requisitos
- ter vínculo ativo com a empresa no portal.
- estar na área de cliente autenticada. não há instruções de login neste artigo.

## passos
1. na área do cliente, abra `Minha empresa`.
2. atualize os campos: `Adicionar logo`, `Descrição da empresa`, `WhatsApp`, `E-mail de contato` e `Site`.
3. revise o conteúdo antes de salvar.
4. clique em `Salvar`. aparece a mensagem `Dados atualizados em todas as suas seções.`

## resultado esperado
a área do cliente confirma o salvamento e, ao recarregar, os dados continuam lá. a tela lista onde o dado vale (`Vagas de Emprego`, `Classificados`). as informações atualizadas passam a compor o perfil público, respeitando o tempo de atualização da página.

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
