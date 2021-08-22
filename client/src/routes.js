import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {AllUsersPage} from './pages/AllUsersPage'
import {FileAndData} from './pages/FileAndData'


export const useRoutes = isAuthenticated => {

  // if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <div style={{ padding: '30px' }}>          
            <AllUsersPage />
          </div>
        </Route>       
        <Route path="/user" exact>
          <div style={{ padding: '30px' }}>          
            <FileAndData />
          </div>
        </Route>        
      </Switch>
    )  
}
