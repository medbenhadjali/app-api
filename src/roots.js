import React from 'react';

import {BrowserRouter,Link, Route} from 'react-router-dom';
import AddRoot from './Add';
import ListRoot from './List';

const RootContainer = () =>
{
    return(
    <BrowserRouter>
         <Link to="/list_contacts">
     <button>Contact list</button>
     </Link>
     <Link to="/contacts"> 
      <button>Add contact</button>
      </Link>
    <Route exact path="/contacts" component={AddRoot} />
    <Route path="/list_contacts" component={ListRoot}/>
    </BrowserRouter>
    )
}
export default RootContainer;
