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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - d2EweodukHg
  - Uv6Zt7V9YN0
---

## objetivo

criar a conta da empresa pelo cadastro do portal e entrar na área do cliente. O cadastro grátis pede o nome, o WhatsApp, o e-mail e uma senha, e confirma o e-mail com um código.

## pré-requisitos

- Estar no portal da cidade onde deseja anunciar.
- Ter acesso ao e-mail que informará no cadastro, pois é necessário confirmar esse endereço.

## passos

1. Na página inicial do portal, procure a faixa `Divulgue seu negócio no portal da cidade` (na página do `Guia Comercial` ela se chama `Divulgue sua Empresa em nosso portal`) e clique em `Quero anunciar`. [guia=anuncie.quero-anunciar] [t=49]
2. Na página que abrir, no quadro `Cadastre sua empresa`, preencha `Nome completo` e `Nome da empresa`. [guia=conta.formulario]
3. Preencha `WhatsApp` e `E-mail`. [guia=conta.formulario]
4. Em `Senha`, crie uma senha com no mínimo 8 caracteres. [guia=conta.formulario]
5. Clique em `Criar conta`, no fim do quadro. [guia=conta.criar]
6. Abra o seu e-mail e copie o código de 6 números que o portal enviou. [guia=fora]
7. Na tela `Confirme seu e-mail`, digite os 6 números nos quadradinhos e clique em `Confirmar e continuar`. [guia=conta.codigo]

## explicação

- no celular, a página mostra o botão `Cadastrar minha empresa grátis`, que leva ao mesmo quadro.
- se o portal não conseguir entrar sozinho, aparece `Conta criada!`; clique em `Entrar na minha conta` e use o e-mail e a senha que você acabou de criar.
- esta página cria só a conta. O cadastro da empresa no Guia Comercial é feito depois, dentro da área do cliente, no menu `Guia Comercial`; veja os artigos "cadastrar sua empresa no Guia Comercial" e "completar a ficha da empresa no Guia Comercial".

## resultado

A conta é criada depois da confirmação do e-mail; em seguida o portal entra na conta sozinho e abre a área do cliente.

## desvios

- Se o código não chegou, na tela `Confirme seu e-mail` clique em `Reenviar código`; se digitou o e-mail errado, clique em `Trocar e-mail`.
- O endereço antigo `/anuncie/cadastro` redireciona para a mesma página de cadastro.
- Não conclua que a conta foi criada antes da confirmação do e-mail: ela só nasce depois do código.

## quando pedir ajuda

se não conseguir receber ou confirmar o código, peça ajuda ao suporte do portal e informe o endereço de e-mail usado, sem enviar senha ou código de confirmação.

## fontes

- `portal-cidade/frontend/src/components/shared/ChamadaAnuncie.tsx:105-120`
- `portal-cidade/frontend/src/components/shared/ChamadaAnuncieHome.tsx`
- `portal-cidade/frontend/src/app/anuncie/page.tsx:55-99`
- `portal-cidade/frontend/src/app/anuncie/cadastro/page.tsx:5-14`
- `portal-cidade/frontend/src/components/lp/FormularioLP.tsx:296-367,402-445,513-584`

## lacunas

- O vídeo `Uv6Zt7V9YN0` diz "depois de contratar um plano do guia, entre na sua área de cliente"; a página `Cadastre sua empresa` diz "grátis". O código consultado não mostra qual plano o Guia exige para publicar; não afirmar preço nem plano.
- O envio final, a confirmação e a aparência do formulário não foram testados em navegador.
