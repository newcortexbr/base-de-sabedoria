---
id: acesso-criar-conta-empresa
titulo: criar uma conta para sua empresa
publico:
  - visitante
  - cliente
categoria: uso-publico
aba: nao-se-aplica
tipo_problema: orientacao
permissoes:
  - visitante
modulo: acesso
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - Uv6Zt7V9YN0
  - d2EweodukHg
---

## objetivo

criar a conta ligada ao cadastro da empresa, entrar na área do cliente e cadastrar a empresa no Guia Comercial.

## pré-requisitos

- Estar no portal da cidade onde deseja anunciar.
- Ter acesso ao e-mail que informará no cadastro, pois é necessário confirmar esse endereço.

## passos

1. Abra a página `Anuncie Aqui` do portal, no endereço `/anuncie`.
2. Desça até o formulário de cadastro e preencha seus dados: nome, `E-mail`, `WhatsApp`, `Senha` e os dados da empresa que forem pedidos.
3. Clique no botão de criar conta, no fim do formulário.
4. Abra seu e-mail. Você recebe um código de 6 números. Digite esses números no quadro `Confirme seu e-mail`. Se não chegou, clique em `Reenviar código`.
5. Quando aparecer `Conta criada!`, clique em `Entrar na minha conta` para ir à página de entrada (`/minha-conta/login`).

## explicação

- no Guia Comercial, a empresa ganha uma página própria, sem precisar de site: galeria de fotos, lista de serviços, mapa com o botão de como chegar, WhatsApp, cardápio digital e delivery (para restaurantes), catálogo de produtos, cupons, sorteios, pedidos de orçamento, avaliações do Google e destaque na busca.
- o cadastro da empresa no guia só é feito depois de contratar um plano do Guia (veja "cadastrar sua empresa no Guia Comercial").

## resultado

A conta e o cadastro são criados depois da confirmação do e-mail. A empresa pode ser associada à conta de cliente.

## depois de entrar

1. Contrate um plano do Guia Comercial em `Planos e assinaturas`.
2. No menu da esquerda da área do cliente, clique em `Guia Comercial`. No topo aparece o plano com os recursos que ele inclui.
3. Preencha os dados da empresa: pegue os dados do Google Meu Negócio pela busca do nome ou cadastre manualmente (nome e descrição; o CEP preenche bairro e rua e a localização no mapa é descoberta pelo endereço).
4. Escolha a categoria (ela define as páginas extras, como cardápio e delivery para restaurantes) e a subcategoria, que é obrigatória.
5. Preencha o horário de funcionamento (há atalho para aplicar o mesmo horário a todos os dias, e marcação de fechado ou aberto 24 horas).
6. Clique em `Publicar no guia`: o cadastro vai para análise e aparece "seu cadastro está em análise". Quando o portal aprova, a tela mostra "Sua empresa está publicada no site" e o botão `Ver no site`.

Detalhes completos: artigos "cadastrar sua empresa no Guia Comercial" e "completar a ficha da empresa no Guia Comercial".

## desvios

- `/anuncie/cadastro` redireciona para `/anuncie`; comece pelo formulário dessa página.
- Se o código não chegar, confira se informou o e-mail certo e se consegue receber mensagens nele. O formulário oferece reenvio.
- Não conclua que o cadastro foi criado antes da confirmação: a conta não nasce pela metade.

## quando pedir ajuda

se não conseguir receber ou confirmar o código, peça ajuda ao suporte do portal e informe o endereço de e-mail usado, sem enviar senha ou código de confirmação.

## fontes

- `portal-cidade/frontend/src/app/anuncie/page.tsx:55-99`
- `portal-cidade/frontend/src/app/anuncie/cadastro/page.tsx:5-14`
- `portal-cidade/frontend/src/components/lp/FormularioLP.tsx:122-124,297-320,402-415`
- `portal-cidade/docs/DECISIONS.md:11852-11858`
- `portal-cidade/docs/PRODUCT.md:207-212`

## lacunas

- A documentação canônica sobre o fluxo de empresa está inconsistente: `FLOWS.md` ainda diz que autocadastro não existe (`portal-cidade/docs/FLOWS.md:62-81`), enquanto `PRODUCT.md` e o código atuais mostram o cadastro público. Este artigo segue a decisão D-331 e o código atual.
- O envio final, a confirmação e a aparência do formulário não foram testados em navegador.
