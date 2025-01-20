import * as fs from "fs";

function generateRandomNumbers(
  count: number,
  min: number = 1,
  max: number = 100
): number[] {
  const numbers = new Set<number>();

  while (numbers.size < count) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNum);
  }

  return Array.from(numbers);
}

function saveNumbersToFileAsVariable(
  numbers: number[],
  filePath: string
): void {
  const data = `export const data: number[] = ${JSON.stringify(numbers)};`;
  fs.writeFileSync(filePath, data, "utf8");
}

// Número de números aleatórios a serem gerados
const N = 5; // Substitua pelo número desejado
const filePath = "data.ts";

// Gerar os números e salvar no arquivo
const randomNumbers = generateRandomNumbers(N);
saveNumbersToFileAsVariable(randomNumbers, filePath);

console.log(
  `Arquivo '${filePath}' criado com sucesso com ${N} números aleatórios.`
);
