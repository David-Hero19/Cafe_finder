# WorkBrew — Remote Cafe Finder

A beautifully designed cafe finder for remote workers, with a Python serverless API backend hosted on Vercel.

## Project Structure

```
remote-cafe-finder/
├── api/
│   └── cafes.py          # Python serverless function (Vercel)
├── public/
│   ├── index.html        # Main page
│   ├── style.css         # Styles
│   └── app.js            # Frontend logic
├── vercel.json           # Vercel routing config
├── requirements.txt      # Python deps (stdlib only)
└── README.md
```

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# From the project root:
vercel

# Follow the prompts — it auto-detects the config.
# For production:
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects `vercel.json` — click **Deploy**

That's it. No environment variables needed.

## API

### `GET /api/cafes`

Returns all cafes (or filtered subset).

**Query parameters:**

| Param     | Type   | Example           | Description                        |
|-----------|--------|-------------------|------------------------------------|
| `city`    | string | `San Francisco`   | Filter by city name                |
| `wifi`    | int    | `4`               | Minimum WiFi score (1–5)           |
| `noise`   | string | `quiet`           | `quiet` / `moderate` / `buzzy`     |
| `outlets` | int    | `4`               | Minimum outlet score (1–5)         |

**Response:**
```json
{
  "cafes": [...],
  "total": 12
}
```

## Adding More Cafes

Edit the `CAFES` list in `api/cafes.py`. Each cafe object:

```python
{
    "id": "unique-string",
    "name": "Cafe Name",
    "city": "City",
    "address": "Street Address",
    "wifi": 5,           # 1–5
    "outlets": 4,        # 1–5
    "noise_level": "quiet",    # quiet | moderate | buzzy
    "noise_score": 1,    # 1 = quietest, 5 = loudest
    "price": 2,          # 1–4 ($ signs)
    "overall_score": 4.8,
    "description": "...",
    "amenities": ["WiFi", "Cold brew", ...],
    "hours": {
        "Mon–Fri": "7:00 AM – 8:00 PM",
        "Sat–Sun": "9:00 AM – 6:00 PM",
    }
}
```

## Local Development

Since the frontend uses `/api/cafes` as a relative URL, you need a local server that routes both static files and the Python function.

```bash
# Install Vercel CLI
npm install -g vercel

# Run locally
vercel dev
```

This spins up a local dev server at `http://localhost:3000` that mirrors the production Vercel environment exactly.
