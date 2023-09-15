
import {footerStyles} from '../Styles/footer.css'

import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {data, theme} = useContextGlobal()
  return (
    <footer className={theme}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-LOGO" />
      <div>
      <img src="/images/ico-facebook.png" width={35} alt="Facebook" />
      <img src="/images/ico-instagram.png" width={35} alt="Instragram" />
      <img src="/images/ico-tiktok.png" width={35} alt="Tiktok" />
      <img src="/images/ico-whatsapp.png" width={35} alt="Whatsapp" />
      </div>
    </footer>
  )
}


export default Footer
