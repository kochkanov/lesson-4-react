

export const Button =(props)=>{
        let title = props.title;
       let setCount = props.setCount
       let countAll=()=>{
           if(title==='+'){
               setCount((i)=>i+1)
           }else{
               setCount((i)=>i-1)
           }
       } 
    return(
       <button className="btn" onClick={countAll}>{title}</button>

    )
}

