import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Cards from '../components/card/Cards'
import Footer from '../components/footer/Footer'

export default function Category5() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState([])
  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/categories/5/products")
        setInfo(res?.data)
        return res
      } catch (error) {
        setError(error?.response?.data?.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <Header />,
      {error && <pre style={{marginBottom: 10}}>{error.toString()}</pre>}
      {loading ? <div className='loader' style={{ marginTop: 20 }}></div> : (
        <div className="cards">
          {info.map((i) => (
            <Cards key={i?.id} id={i?.id} title={i?.title} price={i?.price} img1={i?.images[0]} img2={i?.images[1]} img3={i?.images[2]} />
          ))}
        </div>

      )}
      <Footer />
    </>
  )
}