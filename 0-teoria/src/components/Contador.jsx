import { useState } from 'react'
import { Modal } from './Modal'
import styles from './Contador.module.css'

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
        <div className={styles.card}>
            <h2 className={styles.contador}>Contador: {contador}</h2>
            <button className={styles.button} onClick={incrementar}>Incrementar</button>
            <button className={styles.button} onClick={decrementar}>Decrementar</button>
            <button className={styles.button} onClick={resetear}>Resetear</button>

            <h2 className={styles.title}>Ver Modal: {ver ? 'Si' : 'No'}</h2>
            <button className={styles.button} onClick={() => setVer(!ver)}>Ver Modal</button>
            {
                ver && <Modal />
            }
        </div>
    )
}