import React, { ReactElement } from 'react'
import { Navigation, FormPPH21Page } from '../../components';

const PPH21Page: React.FC = (): ReactElement => {
  return (
    <div>
      <Navigation path='/' />

      <main>
        <div className='container'>
          <FormPPH21Page/>
        </div>
      </main>
    </div>
  )
}

export default PPH21Page
