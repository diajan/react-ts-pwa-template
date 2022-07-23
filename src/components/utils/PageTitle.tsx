import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title: string
  children?: React.ReactNode
}

const PageTitle: React.FC<Props> = ({ title, children }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title || children}</title>
    </Helmet>
  )
}

export default PageTitle
