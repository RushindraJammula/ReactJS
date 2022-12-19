import Card from "react-bootstrap/Card";
import React from "react";
const numberOfCards = 11;
const cardDetails = [ {"title":"Angels and Demons","publisher":"Penguin Random House","Author":"Dan Brown","Price":"409","ProdId":"2012"},
                      {"title":"Norse Mythology","publisher":"Bloomsbury Publishing","Author":"Neil Gaiman","Price":"300","ProdId":"2019"}
                      ];

  
export default function App() { 
  return (
    <div className="App">
       {cardDetails.map((cardEach) => {      
           console.log("Entered",cardEach);                 
           // Return the element. Also pass key  
           return (
            <Card style={{flex:3, backgroundColor:'pink',border:"2px 2px 2px 2px",width:"18rem","margin-bottom":"5px"}}
        >
                <Card.Body>
                    <Card.Title style={{color:"green"}} tag="h5">{cardEach.title}</Card.Title>
                    <Card.Text>{cardEach.Author} <br></br>{cardEach.publisher} <br></br> {cardEach.Price}</Card.Text>
                    <Card.Footer>{cardEach.ProdId}</Card.Footer>
                </Card.Body>
            </Card>
      )   
           
        })}
    </div>
  );
}