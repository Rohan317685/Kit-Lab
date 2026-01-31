import React from 'react'
import { useRouter } from 'next/router'

export default function Routebutton({ path, label}) {
    const router = useRouter();

    function handleClick() {
        router.push(path)
    }

    return (
        <button onClick={handleClick}>
            {label}
        </button>
    )
}