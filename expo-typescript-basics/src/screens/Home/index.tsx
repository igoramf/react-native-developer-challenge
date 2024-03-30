import React, { useState } from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { styled } from 'nativewind'
import Card from '../../components/Card'
import InputArea from '../../components/InputArea'
import { useQuery } from '@tanstack/react-query'
import { getSearchResults, getTrending } from '../../service/api'

const ViewStyled = styled(View)
const TextStyled = styled(Text)

function Home() {
  const [searchString, setSearchString] = useState<string>("")

  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending
  })

  const searchQuery = useQuery({
    queryKey: ['searchedItems'],
    //queryFn: getSearchResults
  })

  return (
    <ViewStyled className='h-full w-full flex items-center flex-col'>
        <InputArea setQueryString={setSearchString}></InputArea>

        <ViewStyled className='flex justify-start w-full pl-12 mt-4'>
          <TextStyled className='text-3xl font-medium'>Trending</TextStyled>
        </ViewStyled>

        {trendingQuery.isLoading || searchQuery.isLoading && 
          <ActivityIndicator size="large" color={"red"} />
        }

        <ScrollView horizontal showsVerticalScrollIndicator={false}> 
          {trendingQuery.data?.results && (
            <>
              {
                  trendingQuery.data?.results.map((item) => {
                  return (
                    <Card></Card>
                    )
                  })
                }
            </>
          )} 
        </ScrollView>
    </ViewStyled >
  )
}

export default Home