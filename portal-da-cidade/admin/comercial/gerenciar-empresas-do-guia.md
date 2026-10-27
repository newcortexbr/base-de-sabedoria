---
id: gerenciar-empresas-do-guia
titulo: localizar e atualizar empresas do Guia
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
tags:
  - empresa
  - guia
  - filtrar
  - editar
  - situacao
  - ver
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - wukhVMFEHWg
  - JdJr7pXVx98
---

## objetivo

aqui você acompanha as empresas do Guia, encontra uma delas e ajusta a ficha ou a situação.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.

## explicação

A lista permite editar, mudar a situação, abrir a página pública ou excluir uma empresa. Os filtros de situação e categoria atualizam a lista; para a busca pelo nome, use `Buscar`. A página mostra até 20 empresas por vez.

Para campos específicos, veja os artigos de plano, categoria, WhatsApp e conteúdos da ficha. A cortesia do portal não exige plano pago.

## veja também
- para cadastrar uma empresa nova, veja o artigo "cadastrar uma empresa no Guia".
- para ativar, inativar ou reprovar uma empresa, veja o artigo "mudar a situação de uma empresa do Guia".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas] [t=9]
2. Escreva o nome em `Buscar empresa...`. [guia=guia-empresas.busca] [t=63]
3. Se precisar, escolha a situação em `Todos os status`. [guia=guia-empresas.filtro-status] [t=60]
4. Clique em `Buscar`. [guia=guia-empresas.buscar]
5. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar] [t=91]
6. Altere o `Nome da empresa *`, se necessário. [guia=empresa-editor:nome] [t=113]
7. Altere a `Descrição`, se necessário. [guia=empresa-editor.descricao] [t=115]
8. Clique em `Salvar Alterações`. [guia=empresa-editor.salvar] [t=439]

## resultado

A ficha é atualizada ou a situação escolhida passa a aparecer na lista. A tela reconhece `Pendente`, `Ativo`, `Inativo`, `Banido` e `Reprovado`.

## desvios

uma categoria inativa também oculta as empresas daquela categoria. Se uma empresa foi reprovada, isso é diferente de uma empresa apenas inativa; verifique o estado antes de agir. Exclusão é diferente de desativação e não é tratada neste roteiro.

## uso recomendado

- A empresa cria a conta e monta o perfil pela área do cliente (ficha, plano, fotos, cardápio, cupom). O admin acompanha, aprova e ajusta o que for preciso.
- `+ Cadastrar Empresa` serve para casos especiais (página de parceiro, cliente que pediu ajuda). `Importar do Google Maps` serve para não deixar o portal vazio no início: cadastra muitas empresas de uma vez, com planilha gerada pela ferramenta GMAPS (painel de treinamentos), enviada e conferida na prévia antes de importar.
- Filtros: situação e categoria; busca pelo nome. Cada linha mostra logo, nome, estrela de destaque, categoria e subcategoria, cidade, plano e contato.
- Ícones da direita: editar, abrir a página no portal, excluir. Só empresas `Ativo` aparecem no site.

## campos da ficha (editar)

- `Pegar dados do Google Meu Negócio`: traz nome, endereço, telefone e horários para conferir antes de salvar. `Descrição`: texto sobre o estabelecimento na página.
- Categoria libera recursos como cardápio, delivery e quartos.
- `Empresa em destaque`: coloca a estrela e dá mais visibilidade na listagem.
- Localização: o CEP preenche o endereço; cidade e bairro vêm da lista; o ponto no mapa é encontrado sozinho.
- Contato: telefone, WhatsApp, Instagram, Facebook, e-mail e site. O e-mail é de uso interno e não aparece no site.
- Logo e capa: a capa é o banner largo no topo da página.
- Cardápio: link externo (ex.: iFood) ou PDF. Se a empresa cadastrar pratos em `Gerenciar Cardápio`, vale o cardápio digital do portal e link/PDF são ignorados.
- Reserva e delivery: `Aceita reservas de mesa` + link gera o botão de reservar mesa. O delivery do portal liga-se nas configurações do delivery; `Tenho delivery em outro lugar` cobre venda externa. Cada opção marcada vira um botão.
- Cupom de desconto: é o mesmo cupom do menu de cupons (foto do card, segunda linha, condições de uso, código, descrição, tipo, valor, validade, com prévia).
- Botões de ação: `Link para agendamento` e `Link para solicitar orçamento` viram os botões de agendar horário e pedir orçamento na ficha.
- Comodidades e formas de pagamento: itens livres, com sugestões prontas de um clique (ex.: Wi-Fi, ar-condicionado, estacionamento).
- Horários: `Fechado` ou 24 horas por dia, ou hora de abrir e fechar; o botão de copiar aplica um dia aos demais.
- Galeria: fotos e vídeos do YouTube, um por item.
- Acesso à área do cliente: mostra se o dono tem acesso e o e-mail de login. A senha não fica guardada: `Redefinir senha` cria outra para enviar ao dono; `Remover acesso` tira o login.
- SEO: título e descrição do Google; em branco, usa nome e descrição da empresa.
- Conteúdo da ficha: atalhos para cardápio, serviços, equipe, catálogo de produtos, cardápio do delivery, fila de pedidos e configurações do delivery.

## quando pedir ajuda

peça ajuda se a empresa não aparecer, se houver dúvida entre reprovar, inativar ou excluir, ou se a gravação falhar. Não peça à IA para aprovar ou alterar registros.

## fontes

- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:124-130` — menu.
- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:49-89,122-145,216-222` — busca e ações.
- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:1041-1053,1752-1753` — campos e gravação.

## lacunas

Sem navegação real. Não foi medido o tempo até a alteração aparecer nas páginas públicas.
