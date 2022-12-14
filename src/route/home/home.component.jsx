import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {

  const categories = [
    {
      id:1,
      title:'Processors',
      image: 'https://c4.wallpaperflare.com/wallpaper/634/394/413/cpu-computer-intel-wallpaper-preview.jpg'
    },
    {
      id:2,
      title:'Cooling Systems',
      image: 'https://qph.cf2.quoracdn.net/main-qimg-400fcda3886b2290e2007e451a9ae762-lq'
    },
    {
      id:3,
      title:'RAM',
      image: 'https://assets2.rockpapershotgun.com/hyperx-fury-ram.jpg/BROK/resize/880%3E/format/jpg/quality/80/hyperx-fury-ram.jpg'
    },
    {
      id:4,
      title:'Mother Boards',
      image: 'https://www.pcworld.com/wp-content/uploads/2021/09/shutterstock_1391898425_motherboard-100900638-orig.jpg?resize=1240%2C826&quality=50&strip=all'
    },
    {
      id:5,
      title:'Graphics Cards',
      image: 'https://global.aorus.com/upload/Product/F_20201230135856TD1TZv.JPG'
    },
    {
      id:6,
      title:'Storage',
      image: 'https://www.provideocoalition.com/wp-content/uploads/samsung970EVOplus001-1024x800.jpg'
    },
    {
      id:7,
      title:'Power Supply',
      image: 'https://dist.contentdriver.com.au/coolermaster/MPE-7501-AFAAG-AU/images/header-image.jpg'
    },
    {
      id:8,
      title:'Cabinets',
      image: 'https://www.vishalperipherals.in/image/cache/catalog/%20RTX%203070-8gb/HDD/HDD/cabinets/new%20arrival/new%20product/vishalal/811ZLK6F52L._SL1500_-550x550w.jpg'
    },
    
  ]
  return (
    <div>
        <Outlet/>
        <Directory categories={categories}/>
    </div>
    
  );
}

export default Home;
