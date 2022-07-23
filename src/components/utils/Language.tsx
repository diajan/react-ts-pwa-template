import React, { useEffect, useState } from 'react'
import i18next from 'i18next'
import { LANG } from 'static/constants'
import cookies from 'js-cookie'

const Language: React.FC = () => {
  const [currentLangCode, setCurrentLangCode] = useState(cookies.get('i18next') || 'en')
  const { dir } = LANG.find(({ code }) => code === currentLangCode)!

  useEffect(() => {
    i18next.changeLanguage(currentLangCode)
    document.body.dir = dir || 'ltr'
  }, [dir, currentLangCode])

  return (
    <div className={`fixed top-0 ${dir === 'ltr' ? 'right-0' : 'left-0'}`}>
      <select
        value={currentLangCode}
        onChange={e => setCurrentLangCode(e.target.value)}
      >
        {LANG.map(({ code, name }) => (
          <option
            key={code}
            value={code}
          >
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Language
