import { mount } from 'auth/AuthApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const MarketingApp = ({ checkIsSignIn }) => {
  const ref = useRef(null)
  const history = useHistory()
  // console.log({ historyCon: history })

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location

        // console.log({ pathname, nextPathName })

        if (pathname !== nextPathName) {
          history.push(nextPathName)
        }
      },
      onSignIn: () => {
        checkIsSignIn()
      },
    })
    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}

export default MarketingApp
