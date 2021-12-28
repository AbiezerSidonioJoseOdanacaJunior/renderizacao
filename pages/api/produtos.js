// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {id: 1, nome: "Caneta", preco: "4.50"},
    {id: 2, nome: "Lapis", preco: "3.14"},
    {id: 3, nome: "Borracha", preco: "2.16"},
    {id: 4, nome: "Caderno", preco: "10.99"},
    {id: 5, nome: "Regua", preco: "5.59"},
    {id: 6, nome: "Compasso", preco: "15.29"}
  ])
}
