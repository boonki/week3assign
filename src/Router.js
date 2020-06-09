import React, { Component } from 'react'
import HomePage from './HomePageComponent';

import { Switch, Route } from 'react-router-dom';
import React,{Component } from 'react';

export class Router extends Component {
    render() {

        const homePage = ({match}) => {
            const knights = this.state.quarantinevibes.filter(tiktok => tiktok.id === +match.params.tiktokId)[0];
            return (
              <div>
               <a href="{tiktok.youtubeLink}" target="_blank">{tiktok.title}</a>
              </div>
            );
          };
 
        return (
            <Switch>
       <Route exact path='homepage' component={homePage}/>
       <Route path='/albums/:albumId' component={AlbumInfo}/>        
       
      </Switch>
        )
    }
}

export default Router


