---
id: pj-baixar-arquivo-e-validade
titulo: "baixar o arquivo, baixar de novo e prazo de 7 dias"
publico:
  - cliente
modulo: arquivos
aba: Dashboard
tipo_problema:
  - download
  - baixar-arquivo
  - arquivo-expirado
  - validade
  - zip
  - arquivo-grande
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - JXWDV_IiAWQ
  - IKdKLgi-e94
produto: dados-pj
---

## objetivo
baixar a lista e saber até quando ela fica disponível.

## pré-requisitos
- uma lista com situação `Concluído`.

## explicação
- ao terminar, o download começa sozinho. a janela também mostra `Baixar arquivo`, e a tela mostra `Baixar Arquivo Gerado`.
- o arquivo fica disponível por 7 dias. depois disso, o histórico mostra `Arquivo expirado` e é preciso gerar outra lista (outro crédito). guarde o arquivo no seu computador.
- nome do arquivo: `lista_empresas_<UF>_<cidade>_<data>`; com 3 cidades, `varias-cidades`.
- lista com mais de 200.000 empresas vem em um `.zip` com várias partes (`..._parte_1`, `..._parte_2`...), de até 200.000 linhas cada, para o Excel não travar.

## passos
1. espere o download automático ou clique em `Baixar arquivo`.
2. para baixar de novo, vá ao `Dashboard` → `Histórico de bases geradas` → `Baixar`.
3. se vier `.zip`, extraia antes de abrir.

## resultado
o arquivo está salvo no seu computador.

## se der errado
- `Arquivo expirado`: gere de novo com os mesmos filtros.
- `Arquivo não encontrado, expirado ou sem permissão de acesso.`: o prazo passou ou a lista é de outra conta.
- o download não começou: libere downloads automáticos do site no navegador e use `Baixar`.
