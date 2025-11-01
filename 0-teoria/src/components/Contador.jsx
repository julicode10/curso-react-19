import { useState } from 'react'
import { Modal } from './Modal'

export const Contador = () => {
    const [contador, setContador] = useState(0)
    const [ver, setVer] = useState(false)
    
    const incrementar = () => {
        setContador(contador + 1)
    }
    const decrementar = () => {
        setContador(contador - 1)
    }
    const resetear = () => {
        setContador(0)
    }
    return (
        <div className="bg-amber-500 p-4 rounded-md">
            <h2 className="text-2xl font-bold">Contador: {contador}</h2>
            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={incrementar}>Incrementar</button>
            <button className="bg-red-500 text-white p-2 rounded-md" onClick={decrementar}>Decrementar</button>
            <button className="bg-green-500 text-white p-2 rounded-md" onClick={resetear}>Resetear</button>

            <h2 className="text-2xl font-bold">Ver Modal: {ver ? 'Si' : 'No'}</h2>
            <button className="bg-purple-500 text-white p-2 rounded-md" onClick={() => setVer(!ver)}>Ver Modal</button>
            {
                ver && <Modal />
            }
        </div>
    )
}