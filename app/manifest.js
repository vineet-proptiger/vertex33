import { PROJECT_NAME } from '../lib/config'
import { faviconImages } from '../lib/images'

export default function manifest() {
  return {
    name: PROJECT_NAME,
    short_name: 'Vertex 33',
    icons: faviconImages.android,
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  }
}
