// popup.js
document.addEventListener('DOMContentLoaded', () => {
  const extractDataBtn = document.getElementById('extractDataBtn');
  extractDataBtn.addEventListener('click', async () => {
    // Logic to extract data from LinkedIn profiles and post to API
    const linkedinProfileLinks = ['https://www.linkedin.com/in/example1', 'https://www.linkedin.com/in/example2', 'https://www.linkedin.com/in/example3'];
    for (const profileLink of linkedinProfileLinks) {
      await postDataToAPI(profileLink);
    }
  });
  
  async function postDataToAPI(profileLink) {
    // Logic to fetch data from LinkedIn profile and post to API
    try {
      const response = await fetch('http://localhost:3000/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'John Doe',
          url: profileLink,
          about: 'Software Engineer',
          bio: 'Passionate about web development',
          location: 'New York, USA',
          followerCount: 1000,
          connectionCount: 500
        })
      });
      if (response.ok) {
        console.log('Data posted successfully');
      } else {
        console.error('Failed to post data');
      }
    } catch (error) {
      console.error(error);
    }
  }
});
