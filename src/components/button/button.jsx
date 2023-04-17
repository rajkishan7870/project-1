import React from 'react'
import styles from './button.module.css'

export default function Button({data, onClick, type}) {
  return (
    <div>
        <button className = {styles.button} type ={type} onClick = {onClick}>{data}</button>
    </div>
  )
}
