import type { NextApiRequest, NextApiResponse } from 'next'

const VOICEFLOW_API_KEY = process.env.VOICEFLOW_API_KEY
const VOICEFLOW_VERSION_ID = process.env.VOICEFLOW_VERSION_ID || 'production'
const VOICEFLOW_PROJECT_ID = process.env.VOICEFLOW_PROJECT_ID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  if (!VOICEFLOW_API_KEY || !VOICEFLOW_PROJECT_ID) {
    return res.status(500).json({ error: 'Voiceflow API key or Project ID is not configured' })
  }

  try {
    const response = await fetch('https://general-runtime.voiceflow.com/state/user/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': VOICEFLOW_API_KEY,
      },
      body: JSON.stringify({
        versionID: VOICEFLOW_VERSION_ID,
        projectID: VOICEFLOW_PROJECT_ID,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Voiceflow API error:', response.status, errorData)
      return res.status(response.status).json({ error: 'Failed to initialize chat', details: errorData })
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Error in /api/voiceflow/start:', error)
    res.status(500).json({ error: 'Internal Server Error', message: error instanceof Error ? error.message : 'Unknown error' })
  }
}

