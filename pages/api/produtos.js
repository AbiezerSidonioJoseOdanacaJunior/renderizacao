// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function numeroAleatorio(min = 1, max = 10000) {
  return parseInt(Math.random() * (max - min)) + min;
}

export default function handler(req, res) {
  res.status(200).json([
    { id: numeroAleatorio(), nome: "Caneta", preco: "4.50" },
    { id: numeroAleatorio(), nome: "Lapis", preco: "3.14" },
    { id: numeroAleatorio(), nome: "Borracha", preco: "2.16" },
    { id: numeroAleatorio(), nome: "Caderno", preco: "10.99" },
    { id: numeroAleatorio(), nome: "Regua", preco: "5.59" },
    { id: numeroAleatorio(), nome: "Compasso", preco: "15.29" },
  ]);
}
