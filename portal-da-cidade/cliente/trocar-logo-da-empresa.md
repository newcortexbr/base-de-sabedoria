---
id: cliente-trocar-logo-empresa
titulo: "trocar o logo da empresa"
publico:
  - cliente
modulo: guia-comercial
categoria: guia-comercial
aba: Minha empresa
tipo_problema:
  - editar-perfil-empresa
  - contato-incorreto
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - OInXMQlSWqw
---

## objetivo
aqui você troca a imagem do logo da sua empresa.

## pré-requisitos
- ter vínculo ativo com a empresa no portal.
- estar na área do cliente autenticada. não há instruções de login neste artigo.

## passos

1. Na parte `Minha conta` do menu da esquerda, clique em `Minha empresa`. [t=9] [guia=menu:/minha-conta/minha-empresa]
2. No quadro `Identidade`, clique em `Trocar logo` (ou em `Adicionar logo`, quando a empresa ainda não tem imagem) e escolha o arquivo. [t=14] [guia=empresa.logo]
3. Clique em `Salvar`. Aparece a mensagem `Dados atualizados em todas as suas seções.` [t=44] [guia=empresa.salvar]

## resultado
O novo logo fica salvo. sem logo, o portal mostra as iniciais da empresa. [t=17]

## desvios
- `Remover seleção` desfaz a escolha do arquivo antes de salvar.
- os campos disponíveis dependem do tipo de cadastro de empresa.
- se a conta perdeu o vínculo com a empresa, a tela pode informar que o perfil foi removido; suporte/admin deve verificar o vínculo.
- o navegador pode guardar o logo antigo por um tempo; veja "salvei, mas o site ainda mostra o antigo".

## quando pedir ajuda
se não reconhecer a empresa associada ou não puder editar o próprio perfil, contate o suporte do portal. não tente alterar dados de outra empresa.

## fontes
- `frontend/src/app/minha-conta/minha-empresa/CamposDeEmpresa.tsx:60-90` — `Adicionar logo`/`Trocar logo`, `Remover seleção`, iniciais.
- `frontend/src/app/minha-conta/minha-empresa/page.tsx:197` — quadro `Identidade`; `:241-247` `Salvar` e mensagem.

## lacunas
testado em tela (2026-10-15, conta sintética sem empresa no Guia): salvar e recarregar. não testado: logo enviado, aparência na ficha pública do Guia. sem tempo fixo de atualização.
