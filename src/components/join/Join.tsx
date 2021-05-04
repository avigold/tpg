import Card from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import React, { Component, ReactComponentElement } from 'react';

import './Join.scss';
import Header from '../header/Header';

export default class Join extends Component<any> {
    public render(): ReactComponentElement<any> {
        return (
            <div>
                <Header history={this.props.history} />
                <div className="joinContainer">
                    <div className="joinInner">
                        <Grid container spacing={3} className="pointsForts">
                            <Grid item xs={4}>
                                <Card className="pointFort">
                                    <CardActionArea>
                                        <CardMedia
                                            component="video"
                                            autoPlay
                                            loop
                                            muted
                                            className="pointFortImage"
                                            src="bars.mp4"
                                            title="bars"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Bars
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className="pointFort">
                                    <CardActionArea>
                                        <CardMedia
                                            component="video"
                                            autoPlay
                                            loop
                                            muted
                                            className="pointFortImage"
                                            src="atlas.mp4"
                                            title="atlas"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Stones
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className="pointFort">
                                    <CardActionArea>
                                        <CardMedia
                                            component="video"
                                            autoPlay
                                            loop
                                            muted
                                            className="pointFortImage"
                                            src="monolift.mp4"
                                            title="monolift"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Monolift
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className="pointFort">
                                    <CardActionArea>
                                        <CardMedia
                                            component="video"
                                            autoPlay
                                            loop
                                            muted
                                            className="pointFortImage"
                                            src="platform.mp4"
                                            title="platforms"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Platforms
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className="pointFort">
                                    <CardActionArea>
                                        <CardMedia
                                            component="video"
                                            autoPlay
                                            loop
                                            muted
                                            className="pointFortImage"
                                            src="dumbbells.mp4"
                                            title="dumbbells"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Dumbbells
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className="pointFort">
                                    <CardActionArea>
                                        <CardMedia
                                            component="video"
                                            autoPlay
                                            loop
                                            muted
                                            className="pointFortImage"
                                            src="benches.mp4"
                                            title="benches"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Benches
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}
