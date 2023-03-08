import React from 'react'
import Screen from '../../layout/Screen'
import SubMenu from '../../layout/SubMenu'
import Header from '../../ui/Header'
import SideBar from '../../ui/SideBar'
import Title from '../../ui/Title'

const Cakes = () => {
  return (
    <Screen>
        <Header/>
        <SideBar/>
        <SubMenu>
            <Title title='Tortas estándar'/>
        </SubMenu>
        <Title title='Tortas estándar'/>
    </Screen>
  )
}

export default Cakes