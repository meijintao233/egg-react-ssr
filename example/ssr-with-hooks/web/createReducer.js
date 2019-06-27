import model from './model'

const modelObj = {}
for (let key in model) {
  const { namespace, reducers, initialState } = model[key]
  modelObj[namespace] = {}
  modelObj[namespace]['reducers'] = reducers
  modelObj[namespace]['initialState'] = initialState
}
export default modelObj
