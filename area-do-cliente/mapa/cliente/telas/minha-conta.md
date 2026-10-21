# /minha-conta — Minha Conta

Arquivo: `src/app/(cliente)/minha-conta/page.tsx`

## quem acessa
- cliente logado, inclusive conta BLOCKED.

## o que faz
- dados cadastrais (nome, CPF/CNPJ, e-mail, telefone) e troca de senha.

## estados de erro/vazio
- nome, CPF/CNPJ e e-mail são protegidos: só o suporte altera.
- trocar a senha pede a senha atual e depois um código enviado ao e-mail.

## possíveis problemas para leigo
- o cliente não consegue corrigir o próprio e-mail ou CPF: precisa abrir chamado.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [minha-conta.png](../prints/minha-conta.png) (37 KB) · dados brutos: [json](../prints/json/minha-conta.json)
- aberta em `/minha-conta` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [menu/links] "9 itens: Início · Meus negócios · Visão geral · Minha plataforma · Treinamentos · Ferramentas · Lives · Suporte · Pagamentos" — menu (14,110,207,366)
- [título] "Minha conta" — topo, na parte de cima, ao centro (272,122,1000,34)
- [título] "Dados cadastrais" — conteúdo, na parte de cima, ao centro (343,221,327,22)
- [campo] "Telefone / WhatsApp" — conteúdo, no meio da tela, à direita (782,404,469,48)
- [link] "solicite a alteração ao suporte" — conteúdo, no meio da tela, ao centro (334,509,537,34)
- [botão] "Cancelar" — conteúdo, no meio da tela, à direita (967,574,97,44)
- [botão] "Salvar alterações" — conteúdo, no meio da tela, à direita (1074,574,177,44)
- [título] "Senha de acesso" — conteúdo, no fim da página, ao centro (345,678,698,22)
- [botão] "Alterar minha senha" — conteúdo, no fim da página, à direita (1057,700,194,44)
- [link] "Acessar suporte" — menu lateral, no fim da página, à esquerda (26,726,130,24)
- [link] "ME Mariana Souza Exemplo Minha conta" — menu lateral, no fim da página, à esquerda (14,775,207,63)
- [botão] "Sair" — menu lateral, no fim da página, à esquerda (14,848,207,38)

## o que você vê
Tela "Minha Conta": dados da pessoa e segurança do acesso.
- "SEUS DADOS E SUA SEGURANÇA".
- "Dados cadastrais" (valem para todos os negócios): "Nome completo", "CPF / CNPJ" e "E-mail de acesso" com o aviso "(protegido, só o suporte altera)"; "Telefone / WhatsApp" pode ser editado.
- Botões "Cancelar" e "Salvar alterações".
- "Senha de acesso": confirma a senha atual e recebe um código no e-mail mascarado (ex.: m***@exemplo.test); botão "Alterar minha senha".
Menu da esquerda (igual em todas as telas logadas): "Início", "Meus negócios", "Visão geral", "Minha plataforma", "Treinamentos", "Ferramentas", "Lives", "Suporte", "Pagamentos"; embaixo, o quadro "Conte com a gente." com o link "Acessar suporte", o nome da pessoa com "Minha conta" e o botão "Sair".
