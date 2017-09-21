import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {Card, CardBlock, Button, CardTitle, CardText, CardImg} from 'reactstrap';


export default class References extends Component {
  render(){
    return(
      <div className="references-container">
      <h1 className="headings"> References </h1>

      <div className="references">
      <Card className="card">
       <CardImg className="card-image" top width="100%" src="http://www.billboard.com/files/styles/article_main_image/public/media/cher-press-2014-650-430.jpg" width="200px" alt="Card image cap" />
       <CardBlock>
         <CardTitle className="card-title">Cher Bono</CardTitle>
         <CardText className="card-text">Brooklynn is strong enough to rise above. This is a womans world. This is a womans world.</CardText>
         <CardText>
           <a href="https://www.cher.com/">Connect with Cher</a>
         </CardText>
       </CardBlock>
     </Card>
     <Card className="card">
      <CardImg className="card-image" top width="100%" src="http://www.billboard.com/files/styles/article_main_image/public/media/ilana-glazer-spike-press-2015-billboard-650.jpg" width="200px" alt="Card image cap" />
      <CardBlock>
        <CardTitle className="card-title">Ilana Glaser</CardTitle>
        <CardText className="card-text">Yas. Yas. Yas. Yas. Yas. Yas. Yas. Brooklynn is a LITERAL genius. Everyone should hire her. </CardText>
        <CardText>
          <a href="https://www.youtube.com/user/BroadCity">Check out Ilana on Youtube</a>
        </CardText>
      </CardBlock>
    </Card>
    <Card className="card">
     <CardImg className="card-image" top width="100%" src="http://ksassets.timeincuk.net/wp/uploads/sites/55/2015/07/2014StVincent_NME_1ST_120214.jpg" width="200px" alt="Card image cap" />
     <CardBlock>
       <CardTitle className="card-title">Annie Clark</CardTitle>
       <CardText className="card-text">Brooklynn is a visionary. Wise beyond her years.  </CardText>
       <CardText>
         <a href="http://ilovestvincent.com/">Connect with Annie</a>
       </CardText>
     </CardBlock>
   </Card>
</div>
      </div>
    );
  }
}
