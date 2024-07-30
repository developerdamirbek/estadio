'use server'

import sharp from 'sharp'
import { APP_CDN_URL } from '@/constants'

function bufferToBase64(buffer: Buffer): string {
  return `data:image/png;base64,${buffer.toString('base64')}`
}

async function getBuffer(url: string) {
  const response = await fetch(url)

  return Buffer.from(await response.arrayBuffer())
}

export async function getPlaceholderImage(url: string) {
  try {
    const lowResImage = await getBuffer(`${APP_CDN_URL}_next/image?url=${encodeURIComponent(url)}&w=48&q=50`)
    const resizedBuffer = await sharp(lowResImage).resize(20).toBuffer()

    return {
      placeholder: bufferToBase64(resizedBuffer),
    }
  } catch {
    return {
      placeholder:
        // eslint-disable-next-line max-len
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
    }
  }
}
