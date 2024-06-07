export const getBotResponse = async (newMessage: string) => {
  return fetch(import.meta.env.VITE_FIREBASE_API_URL + '/chatCompletion', {
    body: JSON.stringify({ message: newMessage }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then(async (response) => {
      const data = await response.json();
      const formattedContent = data.message.content.replace(/\n/g, '<br>');

      // Return the message content as HTML
      return formattedContent;
    })
    .catch((error) => {
      return 'Bot: Sorry, I am not available right now. Please try again later. Error: ' + error.message;
    });
};
