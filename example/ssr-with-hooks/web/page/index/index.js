import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import './index.less'

let count = 1
function Page (props) {
  let state1
  if (!__isBrowser__ && count == 1) {
    console.log(props.modelObj)
    const { reducers, initialState } = props.modelObj['page']
    const [state, dispatch] = useReducer(reducers, initialState)
    state1 = state
    Page.getInitialProps({ state, dispatch })
    count += 1
  }
  console.log(state1)
  return (
    <div className='normal'>
      <div className='welcome' />
      <ul className='list'>
        {
          props.news && props.news.map((item, index) => (
            <li key={`news${index}`}>
              <div>文章标题: {item.title}</div>
              <div className='toDetail'><Link to={`/news/${item.id}`}>点击查看详情</Link></div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Page.getInitialProps = ({ state, dispatch }) => {
  return dispatch({
    type: 'init',
    payload: {
      news: [
        {
          id: '1',
          title: 'Racket v7.3 Release Notes'
        },
        {
          id: '2',
          title: 'Free Dropbox Accounts Now Only Sync to Three Devices'
        },
        { id: '3',
          title: 'Voynich Manuscript Decoded by Bristol Academic'
        },
        { id: '4',
          title: 'Burger King to Deliver Whoppers to LA Drivers Stuck in Traffic'
        },
        { id: '5',
          title: 'How much do YouTube celebrities charge to advertise your product? '
        }
      ]
    }
  })
}
export default Page
