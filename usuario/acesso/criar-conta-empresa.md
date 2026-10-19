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
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo

criar a conta ligada ao cadastro da empresa e entrar na área do cliente.

## pré-requisitos

- Estar no portal da cidade onde deseja anunciar.
- Ter acesso ao e-mail que informará no cadastro, pois é necessário confirmar esse endereço.

## passos

1. Abra `/anuncie`.
2. Preencha os dados solicitados no formulário de cadastro da empresa.
3. Consulte o e-mail informado e digite os seis dígitos de confirmação no formulário.
4. Após a criação, use “Entrar na minha conta” para acessar `/minha-conta/login`.

## resultado

A conta e o cadastro são criados depois da confirmação do e-mail. A empresa pode ser associada à conta de cliente.

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
