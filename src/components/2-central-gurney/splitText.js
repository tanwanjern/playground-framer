import React from 'react'
import { motion } from 'framer-motion'

export function SplitText({ children, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        className="inline-block"
      >
        <motion.span
          {...rest}
          className="inline-block"
          custom={i}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.span>
      </span>
    )
  })
}
