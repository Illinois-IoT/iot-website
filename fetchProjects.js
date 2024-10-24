const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const fs = require('fs');
const path = require('path');

// Google Sheets document ID
const SPREADSHEET_ID = '1EChubuI97Rkd7-4m5NIRXlZECEuo1nzx20Bn2Nx_FOM';

// Service account credentials
// Email brynchang1234@gmail.com for access
const CREDENTIALS = require('./cs437capstoneshowcase-9cffbeb401f7.json');

async function fetchProjects() {
  try {
    console.log('Service account email:', CREDENTIALS.client_email);
    console.log('Spreadsheet ID:', SPREADSHEET_ID);

    const client = new JWT({
      email: CREDENTIALS.client_email,
      key: CREDENTIALS.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    doc.auth = client;

    console.log('Attempting to load document info...');
    await doc.loadInfo();
    console.log('Document title:', doc.title);

    for (const sheet of doc.sheetsByIndex) {
      console.log('Sheet title:', sheet.title);
      
      const rows = await sheet.getRows();
      console.log('Number of rows:', rows.length);

      const projects = rows.map(row => {
        const teamMembers = [];
        for (let i = 1; i <= 4; i++) {
          const member = row.get(`teammember${i}`);
          const email = row.get(`email${i}`);
          if (member && email) {
            teamMembers.push({ name: member, email: email });
          }
        }

        return {
          id: row.get('id'),
          title: row.get('title'),
          description: row.get('description'),
          teamMembers: teamMembers,
          demoVideo: row.get('demoVideo'),
          award: row.get('award'),
          read_more: row.get('read_more')
        };
      });

      // Write to JSON file based on sheet name
      const filePath = path.join(__dirname, 'src', 'pages', 'capstone-showcase', 'projects_data', `${sheet.title}.json`);
      fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));

      console.log(`Projects data for sheet "${sheet.title}" has been fetched and saved successfully.`);
      console.log('Sample project:', JSON.stringify(projects[0], null, 2));
    }

  } catch (error) {
    console.error('Error fetching projects:', error);
    if (error.response) {
      console.error('Error details:', error.response.data);
    }
  }
}

fetchProjects();