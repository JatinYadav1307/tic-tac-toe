import { init } from '@rematch/core'
import selectorsPlugin from '@rematch/select'
import board from './rematch/models/board'

export default init({
	models: { board },
	plugins: [selectorsPlugin()],
})
