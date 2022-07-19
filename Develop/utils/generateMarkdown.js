const licenses = {
  'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'BSD 2-Clause "Simplified" License': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
  'BSD 3-Clause "New" or "Revised" License': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  'Creative Commons Zero v1.0 Universal': '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
  'Eclipse Public License 2.0': '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)',
  'GNU Affero General Public License v3.0': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
  'GNU General Public License v2.0': '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  'GNU Lesser General Public License v2.1': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1)',
  'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  'No license': '',
};

// Function that returns a license badge and link based on which license is passed in
function renderLicenseBadge(license) {
  return licenses[license];
}

// Function to generate markdown for README
function generateMarkdown(responses) {
  let tableContents = `## Table of Contents`;

  if (responses.installation !== '') { tableContents += `
  - [Installation](#installation)` };
  if (responses.usage !== '') { tableContents += `
  - [Usage](#usage)` };
  if (responses.contribution !== '') { tableContents += `
  - [Contribution](#contribution)` };
  if (responses.tests !== '') { tableContents += `
  - [Tests](#tests)` };
  if (renderLicenseBadge !== '') {tableContents += `
  - [License](#license)`};
  if (responses.username && responses.email !== '') {tableContents += `
  - [Questions](#questions)`};

  // Generate markdown for README
  let createdMarkdown = 
  `# ${responses.title}
  ---
  ## Description

  ${responses.description}

  `
  // Adds Table of Contents to markdown
  createdMarkdown += tableContents;

  // Installation section
  if (responses.installation !== '') {
  createdMarkdown +=
  `

  ## Installation

  ${responses.installation}
  `
  };


  // Usage section
  if (responses.usage !== '') {

  createdMarkdown +=
  `

  ## Usage 

  ${responses.usage}`
  };


  // Contributing section
  if (responses.contribution !== '') {

  createdMarkdown +=
  `

  ## Contribution

  ${responses.contribution}`
  };


  // Tests section
  if (responses.tests !== '') {

  createdMarkdown +=
  `

  ## Tests

  ${responses.tests}`
  };


  // License section
  if (renderLicenseBadge(responses.license) !== '') {
  createdMarkdown +=
  `

  ## License

  ${renderLicenseBadge(responses.license)}
  `};


  // Questions section
  if (responses.username || responses.email !== '') {
  createdMarkdown +=
  `

  ---

  ## Questions

  For any questions, please contact me with the information below:`
  };

  //Github and email
  if (responses.username !== '') {
  createdMarkdown += `

  GitHub: [${responses.username}](${`https://github.com/` + responses.username })`
  };

  if (responses.email !== '') {
  createdMarkdown += `

  Email: ${responses.email}`
  };


  // Return finished markdown
  return createdMarkdown;
}

module.exports = {
  licenses,
  generateMarkdown
};