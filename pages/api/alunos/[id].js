export default function handler(req, res) {
  const id = +req.query.id;
  res.status(200).json({
    id,
    nome: `Bibi Junir ${id}`,
    email: `bibijnr {id}@gmail.com`,
  });
}
