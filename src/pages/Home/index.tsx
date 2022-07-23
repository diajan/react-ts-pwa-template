import Page from 'helpers/HOC/Page'
import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation('pages', { keyPrefix: 'home' })

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">{t('greeting')}</h1>
    </div>
  )
}

Home.componentName = 'Home'
export default Page(Home)
