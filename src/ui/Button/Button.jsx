import React, { useState, useCallback } from 'react'
import { Spring, animated } from '@react-spring/web'

export const Button = ({ title, onClick }) => {
  const [pressed, setPressed] = useState(false)

  const click = useCallback(() => {
    setPressed(false)
    onClick()
  }, [])

  return (
    <Spring native from={{ scale: 1 }} to={{ scale: pressed ? 0.8 : 1 }}>
      {({ scale }) => (
        <animated.button
          style={{
            backgroundColor: 'red',
            height: '100px',
            width: '100px',
            color: 'rgb(255, 255, 255)',
            transform: scale.to((scale) => `scale(${scale})`)
          }}
          onMouseDown={() => setPressed(true)}
          onClick={click}
          onMouseLeave={() => setPressed(false)}
        >
          {title}
        </animated.button>
      )}
    </Spring>
  )
}
