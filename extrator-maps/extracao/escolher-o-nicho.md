---
id: ext-escolher-o-nicho
titulo: "escolher o nicho (ramo de negócio) na extração, ou deixar em branco"
publico:
  - cliente
modulo: extracao
aba: Nova extração
tipo_problema:
  - nicho
  - categoria
  - nicho-nao-reconhecido
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - R9FCgunNxFE
  - jl7GHmHVJcM
---

## objetivo
preencher a etapa `Nicho` corretamente.

## pré-requisitos
- estar na etapa 3 de 6 (`Nicho`) da `Nova extração` (veja `ext-nova-extracao-passo-a-passo`).

## explicação
- é um nicho por extração. a tela avisa: "Escolha apenas 1 ramo de negócio por extração" / "Ou deixe em branco para extrair todas as empresas da região." para vários nichos, faça várias extrações (no vídeo: a cobrança do Google funciona nesse escopo).
- em branco = "Busca ampla (sem categoria)": mapeia todas as empresas das cidades e bairros escolhidos. você controla o gasto pela quantidade máxima de registros.
- o campo `Qual nicho você procura? (opcional)` aceita até 120 caracteres. dica da tela: "Digite um único ramo. Ex.: barbearia" e "Escreva um ramo com suas palavras (por exemplo: pet shop) e clique em Avançar: escolhemos a categoria certa para você."
- ao clicar em `Avançar`, abre "Escolhendo o nicho certo..." enquanto uma IA escolhe a categoria do Google. categorias equivalentes vão juntas e aparecem em `Nicho escolhido` como, por exemplo, "Oficina mecânica + Conserto de carros + ...", com o botão `Trocar`.
- o Google traz categorias em inglês; isso é padrão da fonte. a extração pode trazer empresas de categorias vizinhas (no vídeo da importação, ao pedir imobiliária vieram também corretores e outros).

## passos
1. digite o ramo com suas palavras, por exemplo `barbearia` (um só, com pelo menos 3 letras), ou deixe vazio.
2. clique em `Avançar` e aguarde "Escolhendo o nicho certo...".
3. confira `Nicho escolhido`; se não for o que queria, clique em `Trocar`.
4. siga para `Quantidade`.

## resultado
o nicho fica definido e conta como 1 categoria no cálculo de buscas.

## se der errado
- `Não conseguimos identificar o nicho agora. Tente novamente em instantes.`: aparece também se o texto tiver menos de 3 letras. escreva o ramo por extenso e tente de novo; se persistir, fale com o suporte.
