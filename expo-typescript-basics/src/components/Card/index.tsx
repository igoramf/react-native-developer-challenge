import { Link } from '@react-navigation/native'
import { styled } from 'nativewind'
import React from 'react'
import { Text, View } from 'react-native'
import { ResultItem } from '../../interfaces/apiResult'


const ViewStyled = styled(View)
const TextStyled = styled(Text)

interface MovieProps {
  movie: ResultItem;
}

function Card() {
  return (
    <ViewStyled>
        <TextStyled>Movie Card</TextStyled>
    </ViewStyled>
  )
}

export default Card