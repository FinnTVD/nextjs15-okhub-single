/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { gsap } from "gsap"
import { twMerge } from "tailwind-merge"
// import crypto from 'crypto-browserify'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertRemToPx(rem: number) {
  if (typeof window === 'undefined' || !document?.documentElement) {
    return
  }

  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  ) // Giá trị này sẽ là 1vw
  return rem * rootFontSize
}
export const scrollToElement = (id: string, top: number = 0): void => {
  const element = document.getElementById(id)

  if (!element) {
    console.error(`Element with ID "${id}" not found.`)
    return
  }

  const elementOffset =
    element.getBoundingClientRect().top + window.scrollY - top

  gsap.to(window, {
    duration: 1, // Thời gian scroll (giây)
    scrollTo: elementOffset,
    ease: 'power2.out', // Hiệu ứng mượt
  })
}

export function delay(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${ms / 1000} seconds`)
    }, ms)
  })
}

// const SECRET_KEY = 'Pl4og/set0wVSa9bnC+jICEA7V/0N31t' // Thay bằng key bí mật của bạn (phải đủ 32 bytes)
// const IV_LENGTH = 16 // Độ dài IV (Initialization Vector)

// // 🛠️ Hàm mã hóa (Encrypt)
// export const encryptData = (key: string, data: any) => {
//   try {
//     const iv = crypto.randomBytes(IV_LENGTH) // Tạo IV ngẫu nhiên
//     const cipher = crypto.createCipheriv(
//       'aes-256-cbc',
//       Buffer.from(SECRET_KEY, 'utf-8'),
//       iv
//     )

//     let encrypted = cipher.update(JSON.stringify(data), 'utf-8', 'base64')
//     encrypted += cipher.final('base64')

//     // Lưu IV cùng với dữ liệu đã mã hóa
//     const result = iv.toString('base64') + ':' + encrypted
//     localStorage.setItem(key, result)
//   } catch (error) {
//     console.error('Encryption failed:', error)
//   }
// }

// // 🔓 Hàm giải mã (Decrypt)
// export const decryptData = (key: string) => {
//   try {
//     const storedData = localStorage.getItem(key)
//     if (!storedData) return null // Không có dữ liệu

//     // Tách IV và dữ liệu đã mã hóa
//     const [ivBase64, encryptedData] = storedData.split(':')
//     const iv = Buffer.from(ivBase64, 'base64')

//     const decipher = crypto.createDecipheriv(
//       'aes-256-cbc',
//       Buffer.from(SECRET_KEY, 'utf-8'),
//       iv
//     )

//     let decrypted = decipher.update(encryptedData, 'base64', 'utf-8')
//     decrypted += decipher.final('utf-8')

//     return JSON.parse(decrypted)
//   } catch (error) {
//     console.error('Decryption failed:', error)
//     return null
//   }
// }
