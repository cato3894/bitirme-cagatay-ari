const generateBtn = document.getElementById('generateBtn');
const posResBtn = document.getElementById('generatePosResBtn');
const negResBtn = document.getElementById('generateNegResBtn');
const emailList = document.getElementById('emailList');

const senderName = document.getElementById('senderName').value;
const receiverName = document.getElementById('receiverName').value;
const dateTime = document.getElementById('dateTime').value; // Get the value!



generateBtn.addEventListener('click', () => {

  const randomEmail = generateRandomEmail(senderName, receiverName, dateTime);
  const newEmailItem = document.createElement('li');
  newEmailItem.textContent = randomEmail;
  newEmailItem.addEventListener('click', () => {
    navigator.clipboard.writeText(randomEmail)
      .then(() => {
        // Optional: Display a success message
        console.log("Email copied to clipboard");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });
  emailList.appendChild(newEmailItem);
});

posResBtn.addEventListener('click', () => {
  const randomEmail = generatePositiveResponse(senderName, receiverName);
  const newEmailItem = document.createElement('li');
  newEmailItem.textContent = randomEmail;
  newEmailItem.addEventListener('click', () => {
    navigator.clipboard.writeText(randomEmail)
      .then(() => {
        // Optional: Display a success message
        console.log("Email copied to clipboard");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });
  emailList.appendChild(newEmailItem);
});

negResBtn.addEventListener('click', () => {
  const randomEmail = generateNegativeResponse(senderName, receiverName);
  const newEmailItem = document.createElement('li');
  newEmailItem.textContent = randomEmail;
  newEmailItem.addEventListener('click', () => {
    navigator.clipboard.writeText(randomEmail)
      .then(() => {
        // Optional: Display a success message
        console.log("Email copied to clipboard");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });
  emailList.appendChild(newEmailItem);
});


function generateRandomEmail(senderName, receiverName, dateTime) {
  const randomString = Math.random().toString(36).substring(2, 15);
  const formattedDateTime = new Date(dateTime).toLocaleString(); // Format date/time
  return `Subject: Inquiry\n\nHi ${receiverName},\n\nThis is ${senderName} writing to you.  I'm reaching out regarding [briefly mention the topic].\n\nPlease let me know if you're available for a quick chat sometime next week.\n\nBest regards,\n${senderName}\n${formattedDateTime}`;
}

function generatePositiveResponse(senderName, receiverName) {
  return `Subject: Re: Inquiry\n\nHi ${senderName},\n\nThank you for your email. I'd be happy to discuss [topic].  Next week works well for me.\n\nWhat time would be good for you?\n\nBest,\n${receiverName}`;
}

function generateNegativeResponse(senderName, receiverName) {
  return `Subject: Re: Inquiry\n\nHi ${senderName},\n\nThank you for your email. I appreciate you reaching out.\n\nUnfortunately, I'm fully booked next week and won't be able to connect.  I'd be happy to explore this further at a later time. Perhaps we could schedule a brief call in two weeks?\n\nRegards,\n${receiverName}`;
}
