import React, {Component} from 'react';
import {Spinner} from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './Loading.css'

class template extends Component {
    render() {
      
        return (
          <div>
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only" >Loading...</span>
            </div>
       
        </div>
        );
      
    }
}

export default template;