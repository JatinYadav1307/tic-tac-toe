import { init } from '@rematch/core'
import selectorsPlugin from '@rematch/select'

export default init({
	models: { },
	plugins: [selectorsPlugin()],
})
