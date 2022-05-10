export default async function apiHandler(req, res) {
  try {
    const { id } = req.query;
    console.log('ARTICLE ID', id);
  } catch (error) {}
}
