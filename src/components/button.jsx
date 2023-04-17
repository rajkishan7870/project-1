import React from 'react'

export default function Button({data, onClick}) {
  return (
    <div>
        <button onClick = {onClick}>{data}</button>
    </div>
  )
}
