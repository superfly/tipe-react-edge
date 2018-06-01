# Tipe on the Edge

### Getting started

Copy `.fly.secrets.example.yml` to `.fly.secrets.yml`, update each secret value with the appropriate token (get this from tipe.io).

Open `index.js` and change the `DOCUMENT_ID` constant to match which document you want to render.

Then run:

```
npm install
npx fly server
``

Then load: http://localhost:3000