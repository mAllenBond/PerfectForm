import 'react-quill/dist/quill.snow.css';
import { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { Box, Button, Card, List, ListItem } from '@mui/material';
import DOMPurify from 'dompurify';
import { getBotResponse } from './getBotResponse';

export const ChatBot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const sendMessage = async () => {
    setMessages([...messages, `You: ${newMessage}`]);
    setNewMessage('');
    const botMessage = await getBotResponse(newMessage);
    setMessages([...messages, `You: ${newMessage}`, `Bot: `, botMessage]);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Box sx={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center' }}>
      <Card sx={{ padding: '20px', width: 500 }}>
        <List sx={{ maxHeight: 500, overflow: 'auto' }}>
          {messages.map((message, index) => (
            <ListItem key={index}>
              {/*<ListItemText primary={message} />*/}
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }} />
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
        <Box sx={{ display: 'flex', marginTop: '20px' }}>
          <ReactQuill
            value={newMessage}
            onChange={setNewMessage}
            placeholder="Type your message..."
            style={{ flex: 1, height: '100%', width: '100%' }}
          />
          <Button onClick={sendMessage} sx={{ marginLeft: '10px' }}>
            Send
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
