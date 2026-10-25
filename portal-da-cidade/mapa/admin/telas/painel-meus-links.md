# /painel/meus-links (Meus Links)

Arquivo: `app/painel/meus-links/page.tsx` (132 linhas; lista em `links.ts`)

## o que você vê
Todos os endereços públicos do portal num lugar só: "Copie para mandar no WhatsApp, colocar na bio ou abrir para conferir." Campo "Buscar link (ex.: vagas, anuncie, sorteio)" e o endereço do portal ao lado. Grupos: `Site público` (Página inicial, Notícias, Guia Comercial, Vagas de Emprego, Classificados, Guia Turístico, Eventos, Artigos, Orçamento Online, A Voz do Povo, Cupons de Desconto, Sorteios, Doações, Melhores da Cidade, Radar de Preços, Fale Conosco), `Páginas de venda (Anuncie)` (Anuncie, Vagas, Classificados, Eventos, Seja Colunista, Publique Notícias, Publicidade, Seja Parceiro), `Acesso dos clientes` (Login da Área do Cliente, Criar conta, Login do Parceiro) e `Institucional` (Privacidade, Termos, Cookies). Cada link mostra nome e endereço completo e três botões: `Copiar` (vira "Copiado"), `Abrir` (nova aba) e o ícone de QR Code, que abre uma janela com o código para imprimir ou mostrar.

## rota e gate
- `/painel/meus-links`. client. só administrador. sem gate de módulo na rota; os links é que somem: só aparecem as seções ligadas no portal ("Ao ligar um módulo, o link dele entra aqui sozinho"), e os de parceiro só com o programa de parceiros aberto.

## como chegar
- menu lateral: item `Meus Links` logo abaixo de `Painel`, no topo (fora das partes Conteúdo/Comercial/Sistema) (`Sidebar.tsx:91`).

## o que faz
- só leitura: facilita copiar o endereço certo de cada página pública.

## ações e campos
- busca filtra por nome e endereço; `Copiar` copia o endereço completo; `Abrir`; QR Code (fecha com o X ou clicando fora).

## estados
- "Nenhum link com esse nome." na busca sem resultado. Se a configuração do portal não carregar, mostra todos os links (como o menu).

## possíveis problemas
- link não aparece: o módulo está desligado em Configurações > Módulos do Portal.
- o endereço usa o domínio em que o painel foi aberto; abrir o painel por outro domínio gera links desse domínio.
