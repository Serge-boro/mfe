import { mount } from 'marketingCont/MarketingApp'
import { useRef, useEffect } from 'react'

import React from 'react'

const MarketingApp = () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}

export default MarketingApp
