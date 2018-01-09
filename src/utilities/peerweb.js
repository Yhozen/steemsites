import PeerWeb from 'peerweb'
const peerweb = new PeerWeb(process.env.NODE_ENV === 'development')
export { peerweb }