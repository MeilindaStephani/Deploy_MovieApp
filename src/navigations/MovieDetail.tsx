import React from 'react'
import { View, Text, Button } from 'react-native'
import { API_URL, API_ACCESS_TOKEN } from '@env'

const MovieDetail = ({ navigation }: any): JSX.Element => {
  const fetchData = (): void => {
    if (!API_URL || !API_ACCESS_TOKEN) {
      throw new Error('Environment variables not found')
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    }

    fetch(API_URL, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movie Detail Page</Text>
      <Button
        title="Fetch Data"
        onPress={() => {
          fetchData()
        }}
      />
    </View>
  )
}

export default MovieDetail