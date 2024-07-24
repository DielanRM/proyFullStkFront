import { useEffect, useState } from "react"
import { getItems } from "../../features/itemServices"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner'
import './Items.scss'

const Items = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getItems()
                setItems(response.data)
                setLoading(false)
            } catch (error) {
                toast.error('No se obtuvieron los datos')
            }
        }
        getData()
    }, [])



    if (loading) {
        return <Spinner />;
    } else {
        return (
            <section className='items-container'>
                        {items.map(item => (
                        <Link to={`/api/peliculas/${item._id}`} key={item._id}>
                            <div className='item'>
                                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                                <h3 className="titulo">{item.original_title}</h3>
                                <p className="sinapsis">{item.overview}</p>
                            </div>
                        </Link>
                        ))}

                <div className='items'>
                    <img src="https://image.tmdb.org/t/p/w200/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" alt="Poster" /> {/*url del posterpath*/}
                </div>
            </section>
        )
    }
}

export default Items
