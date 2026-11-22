# Desafio de Teste — Campo Minado

Casos de teste em **JavaScript** para validar funções de um Campo Minado com tabuleiro de **18 x 14 e 40 bombas**.

## Colaborador

- **Daniel Mitsuo Tsuyama**

## Especificação do desafio

- Tabuleiro de 18 linhas e 14 colunas.
- 40 bombas.
- Casos de teste em JavaScript para testar JavaScript.

### Regras implementadas

- Validação das dimensões do tabuleiro.
- Validação da quantidade de bombas.
- Rejeição de bombas duplicadas e posições fora do tabuleiro.
- Contagem de bombas nas casas vizinhas.
- Revelação de casa com bomba ou número de bombas vizinhas.
- Validação de coordenadas.

## Como executar

```bash
npm test
```

Requer Node.js 18 ou superior. Os testes utilizam o módulo nativo `node:test`, sem dependências externas.

## Estrutura

```text
index.js     # funções do tabuleiro
test.js      # casos de teste automatizados
package.json # comando de execução
```

## Funcionamento dos casos de teste

| Grupo | O que verifica |
|---|---|
| Tabuleiro | Dimensões 18 x 14 e quantidade esperada de bombas. |
| Validação de bombas | Rejeição de dimensões inválidas, quantidade incorreta, duplicidade e coordenadas fora do tabuleiro. |
| Vizinhança | Contagem de bombas ao redor de uma posição, incluindo posições próximas às bordas. |
| Revelação | Identificação de bomba e retorno da quantidade de bombas vizinhas. |
| Coordenadas | Rejeição de coordenadas inválidas. |

**Observação:** o projeto implementa funções de validação e revelação simplificadas para testar os cenários, não um jogo completo com interface.
