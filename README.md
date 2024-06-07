# React ChatBot Sandbox

This is my sandbox for tinkering with OpenAI's API and creating a chatbot using React.

## Getting Started

### Requirements
 - node
 - yarn
 - OpenAI API key

### Installation

1. Clone the repository
2. Install dependencies (run `yarn install`) in both the root directory and the `functions` directory.  If I had known this would need a backend, I would have used a different project structure (with Nx).
3. Get an OpenAI API key and add it to the `.runtimeconfig.json` file in the `functions` directory. The config object shape is already defined.
4. Run `yarn dev` in the root directory to start the React app.
5. Run `yarn serve` in the `functions` directory to start the Firebase functions in a local emulator.
