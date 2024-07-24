import { useEffect, useState } from "react"
import { getItem } from "../../features/itemServices"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from '../../components/Spinner';
import './DetailItems.scss'

const DetailItems = () => {

  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchDta = async () => {
      try {
        const data = await getItem(id)
        setItem(data.data)
        setLoading(false)
      } catch (error) {
        toast.error('No se obtuvieron los datos')
      }
    }
    fetchDta()
  }, [])

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col">
              <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" className="image"/>
          </div>
          <div className="info">
            <h3>{item.original_title}</h3>
              <p>{item.overview}</p>
              <p>🗣️ Idioma original</p>
              <p>{item.original_language}</p>
              <p>🍿 Lanzada en Cines el:</p>
              <p>{item.release_date}</p>
              <p>👍 Votos </p>
              <p>{item.vote_count}</p>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default DetailItems
