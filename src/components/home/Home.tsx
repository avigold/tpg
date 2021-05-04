import React, { Component, ReactComponentElement } from 'react';
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardActions from '@material-ui/core/CardActions/CardActions';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import NavigationService from '../../services/NavigationService';

import './Home.scss';
import Header from '../header/Header';

export default class Home extends Component<any> {
    public render(): ReactComponentElement<any> {
        return (
            <div>
                <Header history={this.props.history} />
                <div className="tpgHome">
                    <video className="heroVideo" autoPlay={true} loop muted>
                        <source src="thorspowerhero.mp4" type="video/mp4"/>
                    </video>
                    <div className="pointsForts">
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Card className="pointFort" onClick={() =>
                                    NavigationService.goTo(this.props.history, '/join')}>
                                    <CardActionArea>
                                        <CardMedia
                                            className="pointFortImage"
                                            image="haffi.jpg"
                                            title="Hafþór"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Equipment
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                See what we have to offer.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View now
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className="pointFort"  onClick={() =>
                                    NavigationService.goTo(this.props.history, '/coaching')}>
                                    <CardActionArea>
                                        <CardMedia
                                            className="pointFortImage"
                                            image="runar-sm.png"
                                            title="Coach"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Coaching
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Let us help you succeed.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className="pointFort">
                                    <CardActionArea>
                                        <CardMedia
                                            onClick={NavigationService.openGymMap.bind(this)}
                                            className="pointFortImage"
                                            image="gym-map.png"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Find Us
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                16B Dalvegur, <a href="tel:+3548220377">☎+3548220377</a>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary"
                                                onClick={NavigationService.openGymMap.bind(this)}>
                                            View Map
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}
