require('dotenv').config();

const config = {
  airtableBaseId: process.env.REACT_APP_AIRTABLE_BASE_ID,
  airtableTableName: process.env.REACT_APP_AIRTABLE_TABLE_NAME,
  airtableApiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
};

module.exports = config;
