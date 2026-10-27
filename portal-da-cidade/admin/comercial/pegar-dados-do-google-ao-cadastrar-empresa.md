---
id: pegar-dados-do-google-ao-cadastrar-empresa
titulo: "cadastrar empresa no Guia pegando os dados do Google"
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - google maps
  - empresa
  - guia
  - cadastro
  - importar
  - endereco
  - horario
  - foto
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
---

## objetivo

aqui você cadastra (ou completa) uma empresa do Guia trazendo nome, endereço, telefone, site, horários e localização do Google, sem digitar tudo.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Clique em `+ Cadastrar Empresa`. Para completar uma empresa que já existe, abra ela pelo lápis (`Editar`). [guia=guia-empresas.cadastrar]
3. Na faixa `Sua empresa já está no Google?`, clique em `Pegar dados do Google Meu Negócio`. [guia=google.abrir]
4. Na janela, escreva o nome da empresa (pelo menos 3 letras) e clique em `Buscar`. [guia=google.nome] [guia=google.buscar]
5. Clique na empresa certa da lista. O portal nunca escolhe sozinho, nem quando aparece uma só. [guia=google.resultado]
6. Confira os campos marcados em verde, complete `Categoria *`, `Subcategoria *` e o que faltou. [guia=empresa-editor:categoria]
7. Clique em `Cadastrar Empresa` (ou salve a edição). [guia=empresa-editor.salvar]

Se você já tinha preenchido algum campo, depois do passo 5 a tela pergunta: escolha `Usar os dados do Google` ou `Manter os meus e preencher só o que está vazio`.

## resultado

Os dados do Google entram no formulário só como sugestão; nada é gravado até você salvar. Se o plano da empresa tem galeria, aparece `As fotos do Google entram na galeria quando você salvar.`: ao salvar, o portal traz até 5 fotos do Google uma única vez.

## perguntas comuns

**A faixa do Google não aparece. Por quê?** O recurso não está disponível no seu portal. A chave do Google é da plataforma; o painel não tem onde colocar ou trocar essa chave.
**Cada busca custa?** Sim. Cada busca e cada empresa escolhida é uma consulta paga ao Google. A busca só sai quando você clica em `Buscar`; repetir o mesmo texto na mesma janela não busca de novo.
**Tem limite?** Sim. Por pessoa, no máximo 300 buscas e 20 empresas escolhidas por hora; as fotos têm limite diário. Se passar, espere e tente de novo.
**Cidade ou bairro ficaram vazios. Errou?** Não. Só entram cidade e bairro que existem na lista do seu portal; escolha à mão.
**Os horários vieram com um turno só?** Sim. Se a empresa abre em dois turnos no dia, só o primeiro entra; ajuste à mão.
**Não achou a empresa?** Clique em `Tentar outro nome` ou em `Cadastrar manualmente` e preencha você mesmo.
**Fechar a janela muda alguma coisa?** Não. Fechar ou `Cancelar` não altera o cadastro.
**As fotos do Google voltam se eu apagar?** Não. Elas são trazidas uma vez só.

## desvios

- `Não conseguimos buscar agora` mostra o motivo; use `Tentar de novo` ou `Cadastrar manualmente`.
- Para muitas empresas de uma vez, veja "importar empresas no Guia a partir de lista do Google Maps".

## fontes

- portal-cidade/frontend/src/components/painel/BuscaNoGoogle.tsx:23-50,60,465,473,536-560,600-612,636-664.
- portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:348-350,1019-1040.
- portal-cidade/backend/guia/views_admin.py:850-905,980-1000 (limites 300/hora e 20/hora; chave por plataforma).
- portal-cidade/backend/guia/google_fotos.py:1-13,33,43-70.
- portal-cidade/frontend/src/app/painel/__tests__/sem-chave-google-no-painel.test.ts:1-8.

## lacunas

- O texto exato de `Buscar` e da lista de resultados não foi conferido na tela renderizada.
- Valor do limite diário de fotos é configurável (padrão 300 na plataforma); o número vigente não é definido no código do portal.
- Quem paga as consultas: comentários do código divergem (franqueado x plataforma); não afirmado no corpo.
