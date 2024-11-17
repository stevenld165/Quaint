import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '@/config/firebase'

export const getData = async () => {
  try {
    const userSnapshot = await getDocs(query(collection(db, "users"), where("name", "==", "John Doe")))
    console.log(userSnapshot)
    const userDocID = userSnapshot.docs.length > 0 ? userSnapshot.docs[0].id : 0;
    console.log(userDocID)

    const monthDataSnapshot = await getDocs(query(collection(db, "users", userDocID, "month-data"), orderBy("month", "asc")))
    console.log(monthDataSnapshot)
    const filteredMonthData = monthDataSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    console.log(filteredMonthData)
    return(filteredMonthData)

  } catch (err) {
    console.error(err)
  }
}

export const getMonthSentences = async (month) => {

  const userSnapshot = await getDocs(query(collection(db, "users"), where("name", "==", "John Doe")))
  console.log(userSnapshot)
  const userDocID = userSnapshot.docs.length > 0 ? userSnapshot.docs[0].id : 0;
  console.log(userDocID)

  const monthSentenceSnapshot = await getDocs(query(collection(db, "users", userDocID, "month-sentence"), orderBy("month", "asc")))

  const filteredMonthSentence = monthSentenceSnapshot.docs.map((doc) => ({
    ...doc.data(),
    path: doc.ref.path
  }))

  const monthObj = filteredMonthSentence.find((doc) => doc.month == month)
  const monthSentencesSnapshot = await getDocs(query(collection(db, monthObj.path, "sentences" )))

  const filteredMonthSentences = monthSentencesSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }))

  return(filteredMonthSentences)
}

const Database = () => {
  // will be an array 
  
  const [monthData, setMonthData] = useState([])
  const [monthSentences, setMonthSentences] = useState([])

  const getData = async () => {
    try {
      const userSnapshot = await getDocs(query(collection(db, "users"), where("name", "==", "John Doe")))
      console.log(userSnapshot)
      const userDocID = userSnapshot.docs.length > 0 ? userSnapshot.docs[0].id : 0;
      console.log(userDocID)

      const monthDataSnapshot = await getDocs(query(collection(db, "users", userDocID, "month-data"), orderBy("month", "asc")))
      console.log(monthDataSnapshot)
      const filteredMonthData = monthDataSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      console.log(filteredMonthData)
    setMonthData(filteredMonthData)
  
    } catch (err) {
      console.error(err)
    }
  }
  
  const getMonthSentences = async (month) => {

      const userSnapshot = await getDocs(query(collection(db, "users"), where("name", "==", "John Doe")))
      console.log(userSnapshot)
      const userDocID = userSnapshot.docs.length > 0 ? userSnapshot.docs[0].id : 0;
      console.log(userDocID)

      const monthSentenceSnapshot = await getDocs(query(collection(db, "users", userDocID, "month-sentence"), orderBy("month", "asc")))
    
      const filteredMonthSentence = monthSentenceSnapshot.docs.map((doc) => ({
        ...doc.data(),
        path: doc.ref.path
      }))

      const monthObj = filteredMonthSentence.find((doc) => doc.month == month)
      const monthSentencesSnapshot = await getDocs(query(collection(db, monthObj.path, "sentences" )))

      const filteredMonthSentences = monthSentencesSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))

      setMonthSentences(filteredMonthSentences)
  }

  useEffect(() => {
    /*
    getData()
    console.log(monthData)
    getMonthSentences(12)
    console.log(monthSentences)
    */
    
  }, [])

  
  return (
    <View>
      <Text>Database</Text>
    </View>
  )
}

export default Database

const styles = StyleSheet.create({})