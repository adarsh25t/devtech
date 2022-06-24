import * as React from 'react';
import { styled } from '@mui/material/styles';
import './card.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [title, setTitle] = React.useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ab fugiat id nisi odio delectus?");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  const showTitle = () =>{
    console.log(title.toString().slice(5));

    return(
      <Typography  color="text.secondary" className='post-title'>
      
      </Typography>
    )
  }

  return (
    <Card sx={{ maxWidth: 280 }} className="postCard">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title=""
        subheader=""
      />

      <CardContent>
        {showTitle()}
      </CardContent>

      <CardMedia
        component="img"
        height="174"
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--1IczbJwM--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/nlc0dgt74jp27lrn7b7i.jpeg"
        alt="Paella dish"
        className='post-image'
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
    
      </CardActions>
      
    </Card>
  );
}
