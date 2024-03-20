import axios from "axios"
import { useEffect, useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
import "./App.css"
import Menu from "./components/Menu/Menu"


function App() {
let [product, setProduct] = useState([])

let getdata = () =>{
  axios.get("https://dummyjson.com/products"). then((response)=>{
    setProduct(response.data.products);
  })
}
 useEffect(()=>{
  getdata()
 },[])
 console.log(product);

  return (
    <>
    <Menu/>
    <section id="api">
      <Container>
          <Row>
          {product.map((item)=>(
            <Col lg={6}>
             <div className="one">
             <img className="w-100" src={item.thumbnail} alt="" />
              <h2>{item.title}</h2>
              <h4>{item.description}</h4>
              <p>${item.price}</p>
             </div>
             </Col>
             ))}
          </Row>
      </Container>
    </section>
    </>
  )
}

export default App
