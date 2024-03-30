import React from 'react'
import { Text, View } from 'react-native'
import { styled } from 'nativewind'

const ViewStyled = styled(View)


function Home() {
  return (
    <ViewStyled className='h-full bg-slate-900 text-white'>
      <Text>Teste</Text>
    </ViewStyled >
  )
}

export default Home