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
        <Spinner />
    } else {
        return (
            <section className='items-container'>
                <div className='items'>
                    {items.map(item => (
                        <Link to={`/item/${item.id}`} key={item.id}>
                            <div className='item'>
                                <img src={item.image} />
                                <h3>{item.product_name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        )
    }
}

export default Items
