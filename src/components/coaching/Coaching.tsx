import Card from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import React, { Component, ReactComponentElement } from 'react';
import Header from '../header/Header';

import './Coaching.scss';

export default class Coaching extends Component<any> {
    public render(): ReactComponentElement<any> {
        return (
          <div>
              <Header history={this.props.history} />
              <div className="coachingContainer">
                  <div className="pointsForts">
                      <Grid container spacing={3}>
                          <Grid item xs={12}>
                              <Card className="pointFort">
                                  <CardActionArea>
                                      <CardMedia
                                          className="pointFortImage"
                                          image="runar.jpg"
                                          title="Rúnar"
                                      />
                                      <CardContent className="cardContent">
                                          <Typography gutterBottom variant="h5" component="h2">
                                              Head Coach — Rúnar Geirmundsson
                                          </Typography>
                                          <Typography variant="body2" color="textSecondary" component="p">
                                              My name is Rúnar Geirmundsson, powerlifter, strongman, professional photographer, musician, tattoo fanatic and an avid adventurer. Born in 1991, raised in Grundarfjörður, Iceland.
                                              <br />
                                              <br />
                                              In 2007, I started training powerlifting, because of a serious ankle injury. 14 years into my career as a power lifter, I have accomplished most my goals, but the work is never done. I went from weighing 58kg to 100kg.
                                              <br />
                                              <br />
                                              In this journey I have set 1 teenage world record, 9 junior world records back in the day, over 150 national records, 2nd Icelander to be awarded “Best lifter” at a European tournament, one of a few Icelanders to hold national records in 4 different weight classes, at competitions held all over the world.
                                              <br />
                                              <br />
                                              All of this has given me over 50 national titles, 3 European titles, and a World Championships title (took 3rd the year before).  Thor inspired me to try out my first strongman competition the summer of 2020. Icelands Strongest Man, and got second, missing the first by a single point.
                                              <br />
                                              <br />
                                              I have been coaching people as a main job for over 7 years. Now I’m the coach at Thors Power Gym, home of the strongest man in the world, and lifelong friend, Thor “Mountain” Bjornsson. I have coached a lot of Icelands finest athletes such as Sara Sigmundsdóttir, celebrities, and other high level athletes.
                                              <br />
                                              <br />
                                              I have held seminars all over the country and held my first seminar out of Iceland, the summer of 2017, in Connecticut, USA, and then 2 in the UK in 2018.
                                              <br />
                                              <br />
                                              The more I train, coach, experience, compete, travel, I feel how much I don´t know, and I’m just starting to learn right now. For many years I was ignorant, today I can say I’m just thankful and humble to be able to do what I do. I have a goal to stop competing and training powerlifting this year and shift my focus solely into coaching and photographing.
                                              <br />
                                              <br />
                                              In 2014, I stumbled into the world of photography. I needed something new to motivate me and spark my mind again. I have now worked with amazing professional athletes like Hafþór Júlíus Björnsson, Stefán Sölvi Pétursson, Linval Joseph, Kyle Rudolph, D Hunt and more.
                                              <br />
                                              <br />
                                              I shot a commercial for the NFL team Minnesota Vikings, NUUN Hydration, Virus, REIGN, along with many big corporations in Iceland.
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
