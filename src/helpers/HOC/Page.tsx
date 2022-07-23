/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import PageTitle from 'components/utils/PageTitle'
import { Translation } from 'react-i18next'

const Page = (Component: any) => {
  return class extends React.Component {
    render() {
      return (
        <Translation ns="title">
          {t => (
            <>
              <PageTitle title={t(Component.componentName)} />
              <Component {...this.props} />
            </>
          )}
        </Translation>
      )
    }
  }
}

export default Page
