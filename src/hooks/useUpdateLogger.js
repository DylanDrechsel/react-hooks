/* Console logs arguement whenever it is updated */

import { useEffect } from 'react'

export default function useUpdateLogger(value) {
    useEffect(() => {
        console.log(value)
    }, [value])
}