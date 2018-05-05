import { init } from '@rematch/core'
import selectorsPlugin from '@rematch/select'
import board from './rematch/models/board'
import game from './rematch/models/game'

export default init({
	models: { board, game },
	plugins: [selectorsPlugin()],
})
