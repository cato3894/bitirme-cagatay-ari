const generateBtn = document.getElementById('generateBtn');
const posResBtn = document.getElementById('generatePosResBtn');
const negResBtn = document.getElementById('generateNegResBtn');
const proposeBtn = document.getElementById('proposeTimeResBtn');
const emailList = document.getElementById('emailList');

const senderNameInput = document.getElementById('senderName');
const receiverNameInput = document.getElementById('receiverName');
const dateTimePicker = document.getElementById('dateTime');

dateTimePicker.oninput = function (event) {
  event.preventDefault();
  dateTimePicker.blur();
};

generateBtn.addEventListener('click', () => {
  const senderName = senderNameInput.value;
  const receiverName = receiverNameInput.value;
  const dateTime = dateTimePicker.value;

  const randomEmail = generateRandomEmail(senderName, receiverName, dateTime);
  const newEmailItem = document.createElement('li');
  newEmailItem.textContent = randomEmail;

  newEmailItem.addEventListener('click', () => {
    navigator.clipboard.writeText(randomEmail)
        .then(() => {
          console.log("Email copied to clipboard");
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
        });
  });
  emailList.appendChild(newEmailItem);
});

posResBtn.addEventListener('click', () => {
  const senderName = senderNameInput.value;
  const receiverName = receiverNameInput.value;

  const randomEmail = generatePositiveResponse(senderName, receiverName);
  const newEmailItem = document.createElement('li');
  newEmailItem.textContent = randomEmail;

  newEmailItem.addEventListener('click', () => {
    navigator.clipboard.writeText(randomEmail)
        .then(() => console.log("Email copied to clipboard"))
        .catch(err => console.error("Failed to copy: ", err));
  });
  emailList.appendChild(newEmailItem);
});

negResBtn.addEventListener('click', () => {
  const senderName = senderNameInput.value;
  const receiverName = receiverNameInput.value;

  const randomEmail = generateNegativeResponse(senderName, receiverName);
  const newEmailItem = document.createElement('li');
  newEmailItem.textContent = randomEmail;

  newEmailItem.addEventListener('click', () => {
    navigator.clipboard.writeText(randomEmail)
        .then(() => console.log("Email copied to clipboard"))
        .catch(err => console.error("Failed to copy: ", err));
  });
  emailList.appendChild(newEmailItem);
});

proposeBtn.addEventListener('click', () => {
  const senderName = senderNameInput.value;
  const receiverName = receiverNameInput.value;
  const dateTime = dateTimePicker.value;  // Always get the current value!

  const randomEmail = generateProposeNewTimeResponse(senderName, receiverName, dateTime);
  const newEmailItem = document.createElement('li');
  newEmailItem.textContent = randomEmail;

  newEmailItem.addEventListener('click', () => {
    navigator.clipboard.writeText(randomEmail)
        .then(() => console.log("Email copied to clipboard"))
        .catch(err => console.error("Failed to copy: ", err));
  });
  emailList.appendChild(newEmailItem);
});

function generateRandomEmail(senderName, receiverName, dateTime) {
  const formattedDateTime = new Date(dateTime).toLocaleString();
  return `Subject: Inquiry\n\nHi ${receiverName},\n\nThis is ${senderName} writing to you. I'm reaching out regarding [briefly mention the topic].\n\nPlease let me know if you're available for a quick chat sometime next week.\n\nBest regards,\n${senderName}\n${formattedDateTime}`;
}

function generatePositiveResponse(senderName, receiverName) {
  return `Subject: Re: Inquiry\n\nHi ${senderName},\n\nThank you for your email. I'd be happy to discuss [topic]. Next week works well for me.\n\nWhat time would be good for you?\n\nBest,\n${receiverName}`;
}

function generateNegativeResponse(senderName, receiverName) {
  return `Subject: Re: Inquiry\n\nHi ${senderName},\n\nThank you for your email. I appreciate you reaching out.\n\nUnfortunately, I'm fully booked next week and won't be able to connect. I'd be happy to explore this further at a later time. Perhaps we could schedule a brief call in two weeks?\n\nRegards,\n${receiverName}`;
}

function generateProposeNewTimeResponse(senderName, receiverName, dateTime) {
  const formattedDate = new Date(dateTime).toLocaleString();
  return `Subject: Re: Inquiry\n\nHi ${senderName},\n\nThank you for your email. I'm interested in discussing [topic] further, but unfortunately, I'm not available next week.\n\nWould you be free to chat sometime during the week of ${formattedDate} instead?\n\nPlease let me know your availability.\n\nBest regards,\n${receiverName}`;
}