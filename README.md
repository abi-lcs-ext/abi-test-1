# ABI Teste

Você trabalha como desenvolvedor em uma empresa que processa grandes volumes de dados. Uma das tarefas envolve verificar se certos valores (chamados de "consultas") existem em uma grande base de dados.

Para isso, você receberá dois arrays:

- **queries**: Representa os valores que precisam ser consultados.
- **data**: Representa os valores disponíveis na base de dados.

A função deve retornar um número que representa a média dos índices dos valores de queries que existem em data. Se um valor de queries não existir em data, ele não deve ser considerado no cálculo da média.

## Requisitos

    1. A função deve receber dois parametros: queries e data.
        a. queries é um array de inteiros.
        b. data é um array de inteiros.

    2. A função deve procurar os índices dos valores de queries que existem em data. E no final, retornar a média desses índices.

    3. Se um valor de queries não existir em data, ele não deve ser considerado no cálculo da média.

    4. A função deve ser executada em menos de 2 segundos.

## Exemplo

Entrada

```
queries = [10, 20, 30]
data = [20, 10, 40, 50]
```

Saída

```
0.5
```

Explicação:

- queries[0] = 10 existe em data[1] = 10. O índice de 10 em data é 1.
- queries[1] = 20 existe em data[0] = 20. O índice de 20 em data é 0.
- queries[2] = 30 não existe em data. Portanto, não é considerado no cálculo da média.

Média = (0 + 1) / 2 = 0.5
