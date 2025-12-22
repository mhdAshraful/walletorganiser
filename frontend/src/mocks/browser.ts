import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Create the browser worker with the handlers defined in `handlers.ts`
export const worker = setupWorker(...handlers)
