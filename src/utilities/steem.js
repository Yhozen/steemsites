import steem from 'steem'
import { steemURL } from '../config'
steem.api.setOptions({ url: steemURL })
export { steem }