import React from 'react'

class HelloWorld extends React.Component {
    render() {  

        const itemArr = [{name: "anagha", age: 25},{name: "manasi", AGE: 24},{name: "shweta", age: 26}]

        const iterateBlog = itemArr.map((item, index) => {

        return(
            <div key={index}>
               <h6>{item.name}</h6> 
               <h6>{item.age}</h6> 

            </div>
            )
        })
        return (
            <div className="main" style={
                {
                    color: "red",
                    margin: "16px",
                    boxSizing: 'border-box',
                    borderRadius: '5px',
                    boxShadow: '0 2px 5px #ccc',
                    padding: '16px'
                }
            }>
                <div>
                    {iterateBlog}
                </div>
                
            </div>



        )
    }
}

export default HelloWorld