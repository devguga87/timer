import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

import * as Styled from './styles'

const DefaultLayout = () => {
  return (
    <Styled.LayoutContainer>
      <Header />
      <Outlet />
    </Styled.LayoutContainer>
  )
}

export default DefaultLayout
