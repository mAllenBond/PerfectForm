/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import * as functions from 'firebase-functions';
import { onRequest } from 'firebase-functions/v2/https';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: functions.config().openai.key,
});

export const chatCompletion = onRequest(async (request, response) => {
  const resp = await openai.chat.completions.create({
    messages: [{ content: request.body.message, role: 'system' }],
    model: 'gpt-3.5-turbo',
  });

  response.send(resp.choices[0]);
});
