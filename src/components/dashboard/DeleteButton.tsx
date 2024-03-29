interface IProps {
    text: string;
    className?: string
}


export function DeleteButton (props:IProps) {

    const transitionCss = {
        transition: "outline-color 200ms ease-in-out, color 200ms ease-in-out"
    };
    
    const createStore = () => {
        console.log('clicked')
        console.log(props.className)
    }
    return (
       <button style={transitionCss} className={`${props.className} 
       outline outline-red-400 outline-2 p-2 rounded-lg text-red-400 hover:text-red-800 hover:outline-red-800`} onClick={createStore}>
            {props.text}
       </button>
    )
}