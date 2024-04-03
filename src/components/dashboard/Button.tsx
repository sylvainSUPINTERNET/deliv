interface IProps {
    text: string;
    className?: string
}



export function Button (props:IProps) {

    const transitionCss = {
        transition: "outline-color 200ms ease-in-out, color 200ms ease-in-out"
    };
    
    const createStore = () => {
        console.log('clicked')
        console.log(props.className)
    }
    return (
       <button style={transitionCss} className={`${props.className} outline outline-[#243c5a] outline-2 p-6 rounded-lg text-slate-400 hover:text-white hover:outline-white`} onClick={createStore}>
            {props.text}
       </button>
    )
}