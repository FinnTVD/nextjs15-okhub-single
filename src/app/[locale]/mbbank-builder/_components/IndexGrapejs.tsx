/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import {useEffect, useRef} from 'react'
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'

// Import các plugin miễn phí
import grapesjsPresetWebpage from 'grapesjs-preset-webpage'
import grapesjsBlocksBasic from 'grapesjs-blocks-basic'
import grapesjsPluginForms from 'grapesjs-plugin-forms'
import grapesjsPluginExport from 'grapesjs-plugin-export'
import grapesjsComponentCountdown from 'grapesjs-component-countdown'
import grapesjsNavbar from 'grapesjs-navbar'
import grapesjsStyleBg from 'grapesjs-style-bg'
import grapesjsTabs from 'grapesjs-tabs'
import grapesjsTooltip from 'grapesjs-tooltip'
import grapesjsCustomCode from 'grapesjs-custom-code'
import grapesjsTouch from 'grapesjs-touch'
import grapesjsParserPostcss from 'grapesjs-parser-postcss'
import grapesjsPluginCkeditor from 'grapesjs-plugin-ckeditor'

// Import plugin Destack vừa tạo
import grapesjsDestack from './grapesjs-destack'

export default function IndexGrapejs() {
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editorRef.current) {
      grapesjs.init({
        container: editorRef.current,
        height: '100vh',
        width: 'auto',
        fromElement: true,
        storageManager: {autoload: false},
        plugins: [
          grapesjsPresetWebpage,
          grapesjsBlocksBasic,
          grapesjsPluginForms,
          grapesjsPluginExport,
          grapesjsComponentCountdown,
          grapesjsNavbar,
          grapesjsStyleBg,
          grapesjsTabs,
          grapesjsTooltip,
          grapesjsCustomCode,
          grapesjsTouch,
          grapesjsParserPostcss,
          grapesjsPluginCkeditor,
          grapesjsDestack,
        ],
        pluginsOpts: {
          grapesjsPresetWebpage: {},
          grapesjsBlocksBasic: {},
          grapesjsPluginForms: {},
          grapesjsPluginExport: {},
          grapesjsComponentCountdown: {},
          grapesjsNavbar: {},
          grapesjsStyleBg: {},
          grapesjsTabs: {},
          grapesjsTooltip: {},
          grapesjsCustomCode: {},
          grapesjsTouch: {},
          grapesjsParserPostcss: {},
          grapesjsPluginCkeditor: {},
          grapesjsDestack: {},
        },
      })

      // 🛠️ Thêm logo vào giữa thanh công cụ
      setTimeout(() => {
        const panelButtons = document.querySelector(
          '.gjs-pn-panels .gjs-pn-buttons',
        )
        if (panelButtons) {
          const logo = document.createElement('img')
          logo.src = '/mbbank/Logo_MB_new.png' // 🔹 Thay đường dẫn logo của bạn
          logo.alt = 'Logo'
          logo.style.height = '40px' // 🔹 Điều chỉnh kích thước logo
          logo.style.margin = '0 auto' // 🔹 Căn giữa logo

          // Thêm logo vào giữa các nút
          panelButtons.insertBefore(
            logo,
            panelButtons.children[Math.floor(panelButtons.children.length / 2)],
          )
        }
      }, 500) // Đợi GrapesJS load xong trước khi chèn logo
    }
  }, [])

  return (
    <main className='flex h-screen'>
      <div
        className='flex-1 w-full h-full overflow-hidden'
        ref={editorRef}
      ></div>
    </main>
  )
}
