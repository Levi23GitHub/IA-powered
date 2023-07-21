// Function to handle form submission and sending data to the backend
function handleSubmit(event) {
    event.preventDefault();
  
    const campaignName = document.getElementById('campaignName').value;
    const targetAudience = document.getElementById('targetAudience').value;
    const budget = document.getElementById('budget').value;
    const imageUpload = document.getElementById('imageUpload').files;
  
    // You can now send the form data to the backend using AJAX or fetch API
    // For the sake of this example, we'll just log the data to the console
    console.log('Campaign Name:', campaignName);
    console.log('Target Audience:', targetAudience);
    console.log('Budget:', budget);
    console.log('Uploaded Images:', imageUpload);
  
    // Clear the form after submission
    document.getElementById('campaignForm').reset();
  
    // Simulating AI-generated image recommendations (replace this with real recommendations)
    const recommendations = generateRecommendations();
    displayRecommendations(recommendations);
  }
  
  // Function to generate dummy AI-generated image recommendations (replace this with real AI logic)
  function generateRecommendations() {
    return [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg',
    ];
  }
  
  // Function to display AI-generated image recommendations on the page
  function displayRecommendations(recommendations) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '<h2>AI-Generated Image Recommendations:</h2>';
  
    const ul = document.createElement('ul');
    recommendations.forEach((image) => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = image;
      img.alt = 'Recommended Image';
      li.appendChild(img);
      ul.appendChild(li);
    });
  
    recommendationsDiv.appendChild(ul);
  }
  
  // Attach event listener to the form for submission handling
  document.getElementById('campaignForm').addEventListener('submit', handleSubmit);
  