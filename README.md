# chrome_extension_Task-2
It is a internship assignment
To create a Chrome extension that interacts with LinkedIn profiles and posts data to a NodeJS-Express-Sequelize API, you can follow these steps:

Set Up Your NodeJS-Express-Sequelize Application:
Install Node.js if you haven't already.
Create a new directory for your project.
Initialize a new Node.js project using npm init.
Install necessary dependencies like Express and Sequelize.
Set up your Sequelize models with fields like name, URL, about, bio, location, follower count, and connection count.
Create a POST API route to receive data from the Chrome extension.
Build the Chrome Extension:
Create a new directory for your Chrome extension.
Inside the directory, create manifest.json file with necessary configurations like name, version, permissions, etc.
Create popup.html for the UI of your extension's popup.
Style your popup using popup.css.
Write JavaScript code (popup.js) to fetch LinkedIn profile links from the current page and send them to your NodeJS API using XMLHttpRequest or fetch API.
Implement Chrome Extension Logic:
Use content scripts to interact with the current page's DOM and extract LinkedIn profile links.
When the user clicks the extension's button in the popup, iterate through the LinkedIn profile links and open them one by one.
Extract necessary data from each LinkedIn profile page using DOM manipulation.
Send the extracted data to your NodeJS API endpoint using XMLHttpRequest or fetch API.
Update Your Code in GitHub:
Push your NodeJS-Express-Sequelize application code to a GitHub repository.
Push your Chrome extension code to a separate GitHub repository.
Screen Record and Explain Your Code:
Record a screen capture video explaining your code and the functionality of your Chrome extension.
Upload the video to a platform like YouTube or Vimeo.
Provide Extension Code:
Make the code for both your NodeJS-Express-Sequelize application and Chrome extension available on GitHub.
Share the GitHub repository links with others.
