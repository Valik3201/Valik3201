const fs = require('fs');
const fetch = require('node-fetch');

async function fetchStats() {
  const username = Valik3201;
  const response = await fetch(`https://api.github.com/users/${username}`);
  return await response.json();
}

async function updateReadme(stats) {
  const readmeTemplate = `# Hello, I'm Valik! 👋

  ![Followers](https://img.shields.io/github/followers/Valik3201?style=social)
  ![Repositories](https://img.shields.io/github/repos/Valik3201?style=social)
  \n\n
  I'm a passionate developer interested in open source and web development.
  \n\n
  My GitHub stats:\n
  - Public Repos: ${stats.public_repos}\n
  - Followers: ${stats.followers}\n
  - Following: ${stats.following}\n`;

  fs.writeFileSync('README.md', readmeTemplate);
}

async function run() {
  const stats = await fetchStats();
  updateReadme(stats);
}

run();
