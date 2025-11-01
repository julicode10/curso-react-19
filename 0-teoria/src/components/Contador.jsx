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
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={resetear}>Resetear</button>

            <h2>Ver Modal: {ver ? 'Si' : 'No'}</h2>
            <button onClick={() => setVer(!ver)}>Ver Modal</button>
            {
                ver && <Modal />
            }
        </div>
    )
}