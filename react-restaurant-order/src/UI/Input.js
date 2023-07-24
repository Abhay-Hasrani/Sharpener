const Input = (props)=>{
    return (
        <>
        <label className={"label "+props.className} htmlFor={props.id}>{props.label}</label>
        <input id={props.id} type={props.type} className={"label "+props.className}/>
        </>
    )
}
export default Input;