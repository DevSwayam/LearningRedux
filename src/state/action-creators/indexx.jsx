export const despositMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'desposit',
            payload:amount
        })
    }
}

export const withDrawMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}

