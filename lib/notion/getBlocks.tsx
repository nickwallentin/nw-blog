import notion from './notion';

export default async function getBlocks(id: string) {
  try {
    if (!id) {
      throw 'ID was not provided';
    }
    const blocks = [];
    let hasMore = true;
    let cursor = undefined;
    while (hasMore) {
      const response = await notion.blocks.children.list({
        block_id: id,
        page_size: 100,
        start_cursor: cursor,
      });
      hasMore = response.has_more;
      cursor = response.next_cursor;
      response.results.forEach((block) => blocks.push(block));
    }

    return blocks;
  } catch (error) {
    console.error(error);
  }
}
