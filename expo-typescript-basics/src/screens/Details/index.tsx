import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { getMovieDetails } from '../../service/api'

function Details( { route } : any) {
    const { movieId, mediaType } = route.params

    const detailsQuery = useQuery({
      queryKey: ["details", movieId, mediaType ],
      queryFn: () => getMovieDetails(movieId, mediaType)
    })

  return (
    <View>
      <Text>{"teste"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

});

export default Details