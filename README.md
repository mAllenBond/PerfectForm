# React ChatBot Sandbox

This is my sandbox for tinkering with OpenAI's API and creating a chatbot using React.

## Getting Started

### Requirements
 - Node
 - yarn
 - OpenAI API key

### Installation

1. Clone the repository
2. Install dependencies (run `yarn install`) in both the root directory and the `functions` directory.  If I had known this would need a backend, I would have used a different project structure (with Nx).
3. Get an OpenAI API key and add it to the `.runtimeconfig.json` file in the `functions` directory. The config object shape is already defined.
4. Run `yarn dev` in the root directory to start the React app.
5. Run `yarn serve` in the `functions` directory to start the Firebase functions.

## Technical Challenge Requests and Status

UI Development Task:

1. UI Framework Selection:

 - [x] Use Material-UI (MUI) components to ensure the chatbot interface is in line with the latest design standards and practices.

 - [x] Build the interface using React to create a dynamic and responsive user experience.

2. Chat Interface Design:

 - [x] Design an input area that allows agents to enter customer queries.

 - [x] Create a response display panel that supports rich text formatting, enabling agents to receive and manipulate chatbot responses.
    **Note:** The rich text formatting is there for your input, the responses from OpenAI are plain text format.

3. Rich Text Editing Features:

 - [x] Incorporate text editing tools such as bold, italic, underline, lists, and links, giving agents the ability to format the chatbot responses before sending them to customers.

 - ?? Implement editable templates for common responses to streamline the interaction process.  
    **Note:** I'm not sure what you mean by "editable templates". This is clearly a story copied out of an epic, and this is comically large scope.

4. Interaction Design:

 - [??] Ensure the interface design is intuitive, with clear visual cues for agents to follow the conversation flow.  
    **Note:** I'm not sure what you mean by "clear visual cues". I'm assuming you mean chat bubbles and the like. I am not the designer, so I'm not sure what you're looking for here.

 - [??] Include components like buttons for quick replies, placeholders for dynamic content, and interactive elements that enhance the chatbot's usability.
    **Note:** I'm not sure what you mean by "placeholders for dynamic content". I'm assuming you mean the chatbot's responses.

5. Front-End Functionality:

 - [x] Integrate front-end components with OpenAI APIs to fetch and post data.

 - [x] Handle user input validation and error messages gracefully to assist agents in troubleshooting and correcting input before submission.

Deliverables:

 - [x] A functional chatbot UI prototype, developed in React with MUI, showcasing the chat input and response functionalities.

 - [x] A GitHub repository link containing all source code, along with a README detailing setup instruction, dependencies, and how to run the UI.

 - [x] Documentation outlining the design decisions, user testing results, and a style guide for future development.


