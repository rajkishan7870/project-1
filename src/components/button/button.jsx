import React from 'react'
import styles from './button.module.css'

export default function Button({data, onClick, type, className}) {
  return (
    <div>
        <button className = {className} type ={type} onClick = {onClick}>{data}</button>
    </div>
  )
}
