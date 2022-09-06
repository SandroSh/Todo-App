function Button(props){
      
    return( <button onClick={props.damateba || props.gamokleba || props.ganuleba} >{props.text || "Default text"}</button> )
        
       

}

export default Button;