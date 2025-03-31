/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import {useEffect, useRef} from 'react'
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import grapesjsPresetWebpage from 'grapesjs-preset-webpage'
import grapesjsBlocksBasic from 'grapesjs-blocks-basic'
import grapesjsPluginForms from 'grapesjs-plugin-forms'
import grapesjsPluginExport from 'grapesjs-plugin-export'
import grapesjsComponentCountdown from 'grapesjs-component-countdown'
import grapesjsNavbar from 'grapesjs-navbar'

export default function SDKExample() {
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editorRef.current) {
      const editor = grapesjs.init({
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
        ],
        pluginsOpts: {
          grapesjsPresetWebpage: {},
          grapesjsBlocksBasic: {},
          grapesjsPluginForms: {},
          grapesjsPluginExport: {},
          grapesjsComponentCountdown: {},
          grapesjsNavbar: {},
        },
      })
    }
  }, [])

  return (
    <main className='flex h-screen flex-col justify-between p-5 gap-2'>
      <div
        className='flex-1 w-full h-full overflow-hidden'
        ref={editorRef}
      ></div>
    </main>
  )
}
