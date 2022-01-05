export function getStaticPaths() {
  return {
    fallback: false, //204
    paths: [
      { paths: { id: "105" } },
      { paths: { id: "100" } },
      { paths: { id: "2050" } },
      { paths: { id: "110" } },
    ],
  };
}

export function getStaticProps() {
  return {
    props: {},
  };
}

export default function handler(req, res) {
  const id = +req.query.id;
  res.status(200).json({
    id,
    nome: `Bibi Junior ${id}`,
    email: `bibijnr${id}@bibi.com`,
  });
}
