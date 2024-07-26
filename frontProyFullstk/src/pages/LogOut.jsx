import { logout, reset } from '../features/auth/authSlice'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from 'react-toastify'
import Items from './Items/Items'

const LogOut = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/login')
        }

        dispatch(reset())
    }, [isError, isSuccess, message, navigate, dispatch])


    const handleLogout = () => {
        dispatch(logout()).then(() => {
            dispatch(reset())
            navigate('/login')
        })
    }

    return (
        <Items />
    )
}

export default LogOut
