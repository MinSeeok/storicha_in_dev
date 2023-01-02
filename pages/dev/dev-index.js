import { useState } from "react";

export default function devIndex({user}){
    return (
        <div style={{marginTop: '40px', fontSize: '32px'}} onClick={()=> console.log(user)}>Click</div>
    )
}