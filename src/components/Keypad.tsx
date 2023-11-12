import { keys } from '../assets/keys'
import { Keys } from '../assets/type'

interface FuncProps {
    setInput(key: string) : void,
}


export const Keypad = ({setInput} : FuncProps) => {
    
    return(
        <>
            <div className="keys">
                {keys.map((item: Keys, index: number) =>
                (<button key={`${index}`} id={`${item.id}`} onClick={() => setInput(item.key)}>
                    {item.key}</button>))}
            </div>
        </>
    )
}