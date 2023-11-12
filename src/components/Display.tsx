
interface FuncProps {
    input: string,
    output: string,
}
export const Display = ({input, output} : FuncProps) => {
    return(
        <div className="output">
            <span className="input">{input}</span>
            <span id="display" className="result">{output}</span>  
      </div>
    )
}