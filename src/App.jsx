import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <div className='headertitle'> 
        <Header header="Adopta un perrito"/>
      </div>
      <div className='Cardperro'>
      <Card 
        image="https://images.pexels.com/photos/14267218/pexels-photo-14267218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Churrasco"
        description="Lleno de energía y listo para Jugar!"
        colorBadge="success"
        textBadge="Corgi"
      />
      <Card 
        image="https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Marraqueta"
        description="Es juguetón, amigable y se lleva bien con niños!"
        colorBadge="primary"
        textBadge="Husky"
      />
      <Card 
        image="https://images.pexels.com/photos/13475044/pexels-photo-13475044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Chacarero"
        description="Un perro de tamaño mediano con un corazón gigante!"
        colorBadge="danger"
        textBadge="Mastin"
      />
      <Card 
        image="https://images.pexels.com/photos/2742261/pexels-photo-2742261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Chaparrita"
        description="Es una compañera leal y cariñosa que adora los mimos y los abrazos!"
        colorBadge="warning"
        textBadge="Labrador"
      />
      </div>
      <div className='Footer'>
        <Footer footer="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto!"/>
      </div>
    </>
  )
}

export default App
