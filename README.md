# iot-website

## Uploading New Projects to Capstone Showcase

To upload new projects to the Capstone Showcase, follow these steps:

1. **Add Project to Google Sheet**:
   - Open the Google Sheet at [this link](https://docs.google.com/spreadsheets/d/1EChubuI97Rkd7-4m5NIRXlZECEuo1nzx20Bn2Nx_FOM/edit?gid=829360953#gid=829360953).
   - Add the new project details to the appropriate section of the sheet.
   - If you need access to the sheet, contact bryanchang1234@gmail.com.

2. **Add a Sheet for the Corresponding Semester**:
   - If a sheet for the current semester does not exist, create a new sheet within the same Google Sheet document.
   - Name the sheet according to the semester (e.g., "fall-2025").

3. **Fetch Projects**:
   - Ensure you have the necessary CREDENTIALS for `fetchProjects.js`. Contact bryanchang1234@gmail.com for access.
   - Run the following command to fetch the projects:
     ```bash
     node fetchProjects.js
     ```

4. **Build the Project**:
   - Use Yarn to build the project by running:
     ```bash
     yarn build
     ```

5. **Deploy the Project**:
   - Deploy the project using your preferred deployment method.

By following these steps, you can successfully upload and showcase new projects in the Capstone Showcase.
