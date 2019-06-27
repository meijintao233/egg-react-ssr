
export default {
  namespace: 'page',
  initialState: {
    news: []
  },
  reducers: (state, action) => {
    switch (action.type) {
      case 'init':
        return { news: action.payload.news }
      default:
        throw new Error()
    }
  }
}
