import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {name,infoBox} from "./styles.js";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    let hot="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let cold="https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain="https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW58ZW58MHx8MHx8fDA%3D";
  return (

    <div>
      <Card sx={{ maxWidth: 345,borderRadius:'15px',border:'1px solid black',backgroundColor:'#11aadd22',marginTop:'15px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={info.humidity>80?rain:info.temp>18?hot:cold}
            alt="green iguana"
          />
          <CardContent sx={infoBox}>
          {info.humidity>80?<ThunderstormIcon/>:info.temp>18?<WbSunnyIcon/>:<AcUnitIcon/>}
            <Typography gutterBottom variant="h4" component="div" sx={name}>
              {info.name}
            </Typography>
            
            <hr />
            <Typography variant="body2" className='info' sx={{ color: "text.primary",fontWeight:'bold'}} component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p> Humidity = {info.humidity}</p>
              <p> Min Temp = {info.tempMin}&deg;C</p>
              <p> Max Temp = {info.tempMax}&deg;C</p>
              <p>The Weather Can be described as {info.description} and feels like {info.feelsLike}&deg;C </p>


            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
