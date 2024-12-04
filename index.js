const core = require('@actions/core');

try {
  // Get the name input
  const name = core.getInput('name');
  
  // Create the greeting message
  const greeting = `Hello, ${name}!`;

  // Set the output variable
  core.setOutput('greeting', greeting);

  console.log(greeting); // Log the message to the console
} catch (error) {
  core.setFailed(error.message);
}
