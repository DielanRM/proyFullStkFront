import { logout, reset } from '../features/auth/authSlice'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from 'react-toastify'

const LogOut = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/login')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    return (
        <>
        </>
    )
}

export default LogOut
