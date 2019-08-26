import React,{Component} from 'react';
export default class Edit extends Component{
  constructor(props)
  {
    super(props);

    this.state = {
      Array1:[]

    };


  }
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data  => this.setState( { Array1:data} ));
    }
  render(){
    return(
      <div class="product_edit">
        <div className='container'>
          <div className='row text-center'>
            <div className = 'edit'>
              <h1>Form</h1>
              <div className = 'form-group'>
              {
                this.state.Array1.map( hit =>
                <input type="text" name="name" className='form-control' id='name' placeholder="Sign Up" value={hit.body}/>
              )}
              </div>
              <div className = 'form-group'>
                <input type="password" name="name" className='form-control' id='name' placeholder="Password" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
