import PeerWeb from 'peerweb'
import { isDev } from '../config'

const peerweb = new PeerWeb(isDev)
export { peerweb }