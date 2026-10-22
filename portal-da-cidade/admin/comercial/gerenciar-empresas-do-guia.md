---
id: gerenciar-empresas-do-guia
titulo: localizar e atualizar empresas do Guia
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-21
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

- Você não precisa cadastrar as empresas por aqui. A própria empresa cria a conta e monta o perfil pela área do cliente: preenche a ficha, escolhe o plano e adiciona fotos, cardápio e cupom. Você acompanha, aprova e ajusta quando precisar.
- O botão `Cadastrar empresa` serve para casos especiais, como montar a página de um parceiro ou de um cliente que pediu ajuda.
- O botão de importar do Google Maps serve para não deixar o portal vazio no começo: cadastra muitas empresas de uma vez. A planilha é gerada pela ferramenta Gmaps, no painel de treinamentos. Envie o arquivo, confira a prévia na revisão e importe.
- Só empresas ativas aparecem no site.

## veja também
- para cadastrar uma empresa nova, veja o artigo "cadastrar uma empresa no Guia".
- para ativar, inativar ou reprovar uma empresa, veja o artigo "mudar a situação de uma empresa do Guia".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas] [t=9]
2. No topo da lista, escreva o nome em `Buscar empresa...`. [guia=guia-empresas.busca] [t=63]
3. Se quiser, escolha uma categoria e uma situação (`Todos os status`) nos filtros ao lado. [guia=guia-empresas.filtro-status] [t=60]
4. Clique em `Buscar`. [guia=guia-empresas.buscar]
5. Cada linha mostra a logo, o nome, a estrela de destaque, a categoria e a subcategoria, a cidade, o plano e o contato. A situação pode ser mudada direto na lista.
6. Nos ícones da direita, você edita a empresa, abre a página dela no portal ou exclui.
7. Para mudar os dados de uma empresa, clique no lápis (`Editar`) na linha da empresa que você quer. [guia=guia-empresas.editar] [t=91]
8. Na ficha, preencha o que precisar, de cima para baixo:
   - `Dados da empresa`: o botão para pegar dados do Google Meu Negócio traz nome, endereço, telefone e horários (confira antes de salvar). Depois vêm o nome e a descrição, que é o texto sobre o estabelecimento na página.
   - `Classificação`: categoria e subcategoria. É a categoria que libera recursos como cardápio, delivery e quartos.
   - `Plano`: define o que o site mostra da empresa. A primeira opção é a cortesia do portal com todos os itens, que é o padrão: o site mostra tudo que estiver preenchido, sem contratação nem fatura. As outras opções são os planos do Guia, os mesmos de `Meus Planos`. Se o plano for pago, a tela avisa antes de salvar, a contratação é registrada para o cliente da empresa e a fatura fica em aberto no financeiro até você confirmar o pagamento. No plano grátis não se gera contratação. Se você trocar de plano depois, a contratação anterior e as faturas abertas dela são canceladas. No painel você continua vendo e preenchendo todos os campos; quem filtra é o site.
   - situação e a opção `Empresa em destaque`, que coloca a estrela e dá mais visibilidade na listagem.
   - `Localização`: digite o CEP e o endereço é preenchido sozinho. Escolha a cidade e o bairro da lista. O ponto no mapa é encontrado automaticamente.
   - `Contato`: telefone, WhatsApp, Instagram, Facebook, e-mail e site. O e-mail é de uso interno e não aparece no site.
   - `Logo e capa`: a capa aparece no topo da página, em banner largo.
   - `Cardápio`: link de cardápio externo (como iFood) ou PDF. Se a empresa cadastrar os pratos pelo cardápio digital do portal, o link e o PDF são ignorados.
   - `Reserva e delivery`: marque que aceita reservas de mesa e informe o link; marque delivery em outro lugar se a empresa vende por outro canal. O delivery do portal é ligado nas configurações do delivery. Cada opção marcada vira um botão.
   - `Cupom de desconto`: é o mesmo cupom do menu de cupons.
   - `Botões de ação`: links para agendar horário e para pedir orçamento.
   - `Comodidades e pagamento` e `Horários de funcionamento` (fechado 24 horas ou horário por dia, com a opção de copiar para os outros dias).
   - `Galeria de fotos`: fotos e vídeos do YouTube.
   - `Acesso à área do cliente`: mostra se o dono já tem acesso e o e-mail de login. A senha não fica guardada: use redefinir senha para criar outra e enviar ao dono, ou remover acesso para tirar o login dele.
   - `SEO`: título e descrição que aparecem no Google. Em branco, o sistema usa o nome e a descrição da empresa.
   - `Conteúdo da ficha`: atalhos para cardápio, serviços, equipe, catálogo de produtos, cardápio do delivery, fila de pedidos e configurações do delivery.
9. Clique em `Salvar alterações` no fim da página.

## resultado

A ficha é atualizada ou a situação escolhida passa a aparecer na lista. A tela reconhece `Pendente`, `Ativo`, `Inativo`, `Banido` e `Reprovado`.

## desvios

uma categoria inativa também oculta as empresas daquela categoria. Se uma empresa foi reprovada, isso é diferente de uma empresa apenas inativa; verifique o estado antes de agir. Exclusão é diferente de desativação e não é tratada neste roteiro.

## quando pedir ajuda

peça ajuda se a empresa não aparecer, se houver dúvida entre reprovar, inativar ou excluir, ou se a gravação falhar. Não peça à IA para aprovar ou alterar registros.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/page.tsx:18-29,31-45,59-73,81-89`
- `portal-cidade/docs/DECISIONS.md:101-109`

## lacunas

os rótulos e consequências de cada ação de status não foram validados visualmente; não há promessa de efeito imediato em todas as páginas públicas.
