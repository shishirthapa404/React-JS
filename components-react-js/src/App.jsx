import './App.css'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div className="components">
      <Navbar/>
      <div className="card-components">
        <Card name="Sunil" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRftHM47FuSUx03T_HDiKqENHJzHgT8SPyGd_Zb17Hc-erlWxBdDJZQiBTAcb6_zfgPzyK_FocWyk3ndLysMHI271jjDyF9YcNJhoTbymAIg&s=10"/>
        <Card name="Rabin" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEzMhMTlEEwsCmQq7Q4Dey2MjOG2TyPQyVrQ2SRAgIJ6Pt8kVB4btqddPsyz2tJz9HqUZJI4O6D6cO2EB31yC9N0vtf6bLVZKeRnFCaxc1w&s=10"/>
        <Card name="Anoj" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_Vc1ZL1XUieS3h1MVg106nNqEcPEYLBIBdttluOirg&s=10"/>
        <Card name="Sanchit" img="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRSI-FlCIkXfhwm7S7NVQCiTDxMORMNEcrchMGmefIQlesY4Twt9v2VNFv3abHdbufEvoQe7K4X1TtKxh18QcYk7Thj-mcvqagfD0sWczGJ3vOKOyWs5WkCKWG3axai9zukrH66NXdiVfM&s=19"/>
        <Card name="Gyanu" img="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQH9AzyBoi8DOib2waKQOiFNup9ZFFYLphEX8Mt9gTrYDEObh8Z4KcH7DqR26eRO5x22JSDJphtQGurXqvOIVebcrHcwOcwGfBqet00MY106EU_GKYPemwI1Mb4zKcrIDVNHRH69kN3HcA&s=19"/>
        <Card name="Tiger" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3uESSWT8gJ9eEflX2QZK4j1cugaRdGoe8r8iy9SZ3Nlt_ENDiglho8uQCXK02CN0O4CmbB8fPA1yH99ein_upp61-eeoTfauTdqGw3dfdw&s=10"/>
        
      </div>
      
    </div>
  )
}

export default App;