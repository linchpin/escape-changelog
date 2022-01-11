const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    let changelog = core.getInput('markdown');
        changelog = changelog.replace(/\\n/g, "\\n")
                              .replace(/\\'/g, "\\'")
                              .replace(/\\"/g, '\\"')
                              .replace(/\\&/g, "\\&")
                              .replace(/\\r/g, "\\r")
                              .replace(/\\t/g, "\\t")
                              .replace(/\\b/g, "\\b")
                              .replace(/\\f/g, "\\f");

    core.setOutput('escaped_markdown', changelog );
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
