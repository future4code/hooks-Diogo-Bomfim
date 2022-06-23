import { useState, useEffect } from 'react'
import axios from 'axios'

const useRequestData = (url) => {
  const [data, setData] = useState(undefined)
  const [error, setError] = useState('')

  const getTrips = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
      }
    )
      .catch((err) => {
        setError(err)
      }
    )
  }

  useEffect(() => {getTrips()}, 
  [() => getTrips()])

  return [data, error]
}

export default useRequestData


