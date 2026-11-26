# HumanizeAI
Next.js writing editor. No database or authentication. Requires a funded OpenAI API account and a supported chat-completions model. API usage is billed by the provider separately from ChatGPT subscriptions.

## Local setup
Install Node.js 22, run `npm install`, copy `.env.example` to `.env.local`, set your API key and model, then run `npm run dev`. Open http://localhost:3000. Run `npm run build` to check production compilation.

## Deployment
Push this directory to GitHub (never commit .env.local). Import the repository in Vercel, select Next.js, and add OPENAI_API_KEY, OPENAI_MODEL and optionally MAX_INPUT_LENGTH in project environment variables. Deploy. Verify each mode, grammar checking, invalid requests, mobile layout and provider errors.

## Limitations
The in-memory rate limiter is per running instance, not a distributed quota. Before public launch, add a shared rate limiter or hosting-level protection and provider spending limits. Browser history is opt-in and stored unencrypted on the device. No submitted text is intentionally logged by this application; provider retention is governed by provider terms. Output should be reviewed for accuracy. No detector-bypass guarantees. The grammar button uses the same AI provider. Undo/redo applies to output edits. Ctrl/Cmd+Enter submits text. Styling uses Tailwind and custom CSS rather than generated shadcn components. API is OpenAI-specific. Live API and browser tests require external setup.
