const { Client } = require('@notionhq/client');
const notion: any = new Client({
  auth: process.env.NOTION_TOKEN,
});
export default notion;
