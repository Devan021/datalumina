import { NextResponse } from 'next/server'

let cachedData: any = null
let lastFetchTime: number = 0
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

export async function GET() {
  try {
    const currentTime = Date.now()
    if (cachedData && currentTime - lastFetchTime < CACHE_DURATION) {
      return NextResponse.json(cachedData)
    }

    const mediumUsername = 'devansp2020'
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`)
    const data = await response.json()

    cachedData = data
    lastFetchTime = currentTime

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching Medium posts:', error)
    return NextResponse.json({ error: 'Failed to fetch Medium posts' }, { status: 500 })
  }
}

