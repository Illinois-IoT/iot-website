const path = require('path');
const fs = require('fs');

exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions;
  const projectTemplate = path.resolve('src/templates/capstone-showcase-template.js');

  // Read all JSON files in the projects_data directory
  const projectDataDir = path.resolve('src/pages/capstone-showcase/projects_data');
  const files = fs.readdirSync(projectDataDir);

  // Custom sort function to order semesters correctly
  const semesterOrder = { 'spring': 1, 'fall': 2 };
  const jsonFiles = files.filter(file => file.endsWith('.json')).sort((a, b) => {
    const [semesterA, yearA] = a.replace('.json', '').split('-');
    const [semesterB, yearB] = b.replace('.json', '').split('-');
    if (yearA === yearB) {
      return semesterOrder[semesterA] - semesterOrder[semesterB];
    }
    return yearA - yearB;
  });

  const latestSemesterFile = jsonFiles[jsonFiles.length - 1];

  jsonFiles.forEach(file => {
    const semester = file.replace('.json', '');
    const filePath = path.resolve(projectDataDir, file);
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    console.log(`Creating page for ${semester} with data:`, fileContent); // Debugging line

    createPage({
      path: `/capstone-showcase/${semester}`,
      component: projectTemplate,
      context: {
        projects: fileContent,
      },
    });
  });

  // Redirect the base path to the latest semester
  console.log(`Redirecting from /capstone-showcase to /capstone-showcase/${latestSemesterFile.replace('.json', '')}`);
  createRedirect({
    fromPath: '/capstone-showcase/',
    toPath: `/capstone-showcase/${latestSemesterFile.replace('.json', '')}`,
    // toPath: `/capstone-showcase/fall-2024`,
    isPermanent: true,
    redirectInBrowser: true,
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-google-slides/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
