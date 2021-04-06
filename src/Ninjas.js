import React, { Component } from 'react';


const Ninjas = ({ninjas}) => {    
    const ninjaList = ninjas.map(ninja =>{
        return ninja.age > 25 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
            </div>
        ) : null
    })
    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )   
}
export default Ninjas