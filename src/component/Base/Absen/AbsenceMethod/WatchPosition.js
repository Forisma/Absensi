import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserCoordinate } from '../../../../redux/coordinates'


export default function WatchPosition({onClose, toggleHighAccuracy}) {
    const userCoordinate = useSelector(state => state.coordinates.user)
    const focusOnLocation = useSelector(state => state.map.focusOnLocation)

    const dispatch = useDispatch()

    useEffect(() => {
        if ('geolocation' in navigator) {
            const successCallback = (position) => {
            const { latitude, longitude } = position.coords
            dispatch(setUserCoordinate([latitude,longitude]))
            if (userCoordinate) focusOnLocation(userCoordinate)
        }
    
        const errorCallback = (error) => {
            console.log('Error getting geolocation', error)
        }
    
        const options = {
            enableHighAccuracy: toggleHighAccuracy,
            maximumAge: 0,
        }
    
        const watchId = navigator.geolocation.watchPosition(
            successCallback,
            errorCallback,
            options
        )
    
        return () => navigator.geolocation.clearWatch(watchId)
        } else {
            console.error('Geolocation is not supported by your browser')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, toggleHighAccuracy])
    
    return <button className={`flex gap-2 flex-1 shadow-lg px-2 shadow-primary/50 justify-center items-center rounded text-neutral-200 click-animation bg-secondary min-h-[32px] mt-auto`} onClick={onClose} title='Hentikan pemindaian lokasi'>
        <FontAwesomeIcon icon={faBinoculars} className='animate-pulse animate-spin'/>
        <span className='flex-1'>Selesai</span>
    </button>   
}