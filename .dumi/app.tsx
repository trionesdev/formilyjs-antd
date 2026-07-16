import { StyleProvider } from '@ant-design/cssinjs'
import { App, ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import React from 'react'

const getLocale = () => {
  if (typeof window === 'undefined') return enUS
  return window.location.pathname.startsWith('/zh-CN') ? zhCN : enUS
}

export function rootContainer(container: React.ReactNode) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider locale={getLocale()}>
        <App>{container}</App>
      </ConfigProvider>
    </StyleProvider>
  )
}
