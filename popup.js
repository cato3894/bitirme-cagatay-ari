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
  return `hi from ${senderName} ${randomString} to ${receiverName} ${dateTime}`;
}

function generatePositiveResponse(senderName, receiverName) {
  return `Hi ${senderName}, I'm glad to hear from you. Let's meet at ${receiverName}`;
}

function generateNegativeResponse(senderName, receiverName) {
  return `Hi ${senderName}, I'm sorry but I'm busy. Let's meet another time.`;
}