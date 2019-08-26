import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import '../assets/css/index.css'
import AppConfig from 'Constants/AppConfig';
import Add from './Add';
import Contact from './Contact';
import Pay from './Pay';
import Contract from './Contract';
import Finish from './Finish';
import $ from 'jquery'
import Footer from '../components/Footer/AO-footer';
// import SigninFirebase from '../../../../container/SigninFirebase';
// import Test from './test';



export default class StepForm extends React.Component {
   state = {
      //address
      address1:'',
      address2:'',
      city:'',
      zipcode:'',
      taxid:'',
      warehouse: false,
      return: false,
      addWarehouse:[],
      return_2: [],
      order:'',
      ship:'',
      selectedAddress: null,
      selectedAddressArray:[],
      selectedCountryArray:[],
      //contact
      addContact:[1],
      contact: [false],
      selectedContact: [null],
      //common
      count: 1,
      activeStep: 0,
   };
   getSteps() {
    return ['Address', 'Contact', 'Payment', 'Contract'];
 }
//  Address Page funcions

Open = () => {
    const state = {...this.state}
    state.addWarehouse.push(state.count);
    state.return_2.push(false)
    state.selectedAddressArray.push(null)
    state.selectedCountryArray.push(null)
    this.setState(state)  
}
handleChangeInput = (e) =>{
    this.setState({
        [e.target.id]: e.target.value
    })
}
handleChange = (event, type) => {
    if(type === 'order'){
        this.setState({order: event.target.value});
    }
    if(type === 'ship'){
        this.setState({ship: event.target.value});
    }

  }


Delete = (index) => {
    const state = {...this.state}
    state.addWarehouse.splice(index, 1);
    state.return_2.splice(index, 1);
    state.selectedAddressArray.splice(index, 1);
    state.selectedCountryArray.splice(index, 1);
    this.setState(state)
    
}
handleSelectAddress = selectedAddress => {
    this.setState({ selectedAddress });
    console.log(`Option selected:`, selectedAddress);
}

isChecked = (e, address, index) => {
    if(address==='warehouse'){
        const warehouse = this.state.warehouse
        this.setState({warehouse:!warehouse})
    }
    if(address==='return'){
        const return2 = this.state.return
        this.setState({return:!return2})
    }
    if(address==='return_2'){
        const return_2 = [...this.state.return_2]
        return_2[index] = !return_2[index]
        this.setState({return_2})
    }
    
}

handleSelectAddressArray = (i,selectedAddressArray) => {
    const SelectedArray = [...this.state.selectedAddressArray]
    SelectedArray[i] = selectedAddressArray
    this.setState({ selectedAddressArray : SelectedArray });   
}
handleSelectCountryArray = (i,selectedCountryArray) => {
    const SelectedArray = [...this.state.selectedCountryArray]
    SelectedArray[i] = selectedCountryArray
    this.setState({ selectedCountryArray : SelectedArray });   
}
// Contact Page function
Open2 = () => {
    const state = {...this.state}
    state.addContact.push(state.count);
    state.contact.push(false)
    state.selectedContact.push(null)
    this.setState(state)
    
}

handleSelectContact = selectedContact => {
    this.setState({ selectedContact });
    console.log(`Option selected:`, selectedContact);
   }

isChecked2 = (index) => {
    const contact = [...this.state.contact]
    contact[index] = !contact[index]
    this.setState({contact})
    console.log(index);
    
}
handleSelectContact = (i,selectedContactArray) => {
    const SelectedArray = [...this.state.selectedContact]
    SelectedArray[i] = selectedContactArray
    this.setState({ selectedContact : SelectedArray });   
}


getStepContent = (stepIndex) => {
    switch (stepIndex) {
       case 0:
          return <Add
          Open={this.Open}
          Delete={this.Delete}
          isChecked={this.isChecked}
          warehouse={this.state.warehouse}
          return={this.state.return}
          handleChange={this.handleChange}
          return_2={this.state.return_2}
          addWarehouse={this.state.addWarehouse}
          ship={this.state.ship}
          order={this.state.order}
          handleChangeInput={this.handleChangeInput}
          selectedAddress={this.state.selectedAddress}
          handleSelectAddress={this.handleSelectAddress}
          handleSelectAddressArray={this.handleSelectAddressArray}
          selectedAddressArray={this.state.selectedAddressArray}
          handleSelectCountryArray={this.handleSelectCountryArray}
          selectedCountryArray={this.state.selectedCountryArray}
          address1={this.state.address1}
          address2={this.state.address2}
          city={this.state.city}
          zipcode={this.state.zipcode}
          taxid={this.state.taxid}
          />;
       case 1:
          return <Contact
          Open={this.Open2}
          addContact={this.state.addContact}
          isChecked={this.isChecked2}
          contact={this.state.contact}
          selectedContact={this.state.selectedContact}
          handleSelectContact={this.handleSelectContact}

          />;
       case 2:
          return <Pay/>;
       case 3:
          return <Contract/>;
       default:
          return 'Uknown stepIndex';
    }
 }
 handleBack_signup = () => {
     this.props.history.push('/signup')
 }
   handleNext = () => {
      const { activeStep } = this.state;
      this.setState({
         activeStep: activeStep + 1,
      });
   };

   handleBack = () => {
      const { activeStep } = this.state;
      this.setState({
         activeStep: activeStep - 1,
      });
   };

   handleReset = () => {
      this.setState({
         activeStep: 0,
      });
   };

   render() {
    $(document).ready(function(){

        $('input').focus(function(){
          $(this).parent().find(".label-txt").addClass('label-active');
        });
        
        $("input").focusout(function(){
          if ($(this).val() === '') {
            $(this).parent().find(".label-txt").removeClass('label-active');
          };
        });
        
        });

      const steps = this.getSteps();
      const { activeStep } = this.state;

      return (
        <div id="wrapper_container">
        {/* <!-- header --> */}
            <header className="text-center">
                {/* <!-- top header --> */}
                <div className="top_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 logo" style={{textAlign:"-webkit-center"}}>
                                <img src={AppConfig.brandLogo} className="img-fluid" alt="American outlets"/>   
                            </div>
                        </div>
                    </div>
                    {/* <!-- bottom header --> */}
                    {/* <!-- <div className="bottom_header">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-8 ml-auto mr-auto about_text">
                                    <h3 className="c-white font-weight-bold">Welcome to american outlets</h3>
                                    <p className="c-white mb-0">Before selling to millions of new globel customers on American Outlets, we need some info to get your seller profile setup.</p>
                                </div>
                            </div>
                        </div>
                    </div> --> */}
                </div>
            </header>
            {this.state.activeStep === steps.length ? (
            <Finish/>
                        ) : (                          
            <section className="form_body_content position-relative">
                <div className='container-fluid' style={{width:'92%'}}>
                    <div className="box-shadow">
                        <div className="row">
                            <div className="col-12">
                                <Stepper activeStep={activeStep} alternativeLabel className="stepper-rtl">
                                        {steps.map(label => {
                                            return (
                                                <Step key={label}>
                                                    <StepLabel>{label}</StepLabel>
                                                </Step>
                                            );
                                        })}
                                </Stepper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    
                        {/* form */}                         
                        <div>{this.getStepContent(activeStep)}</div>                       
                </div>
                <div className='container'>
                    {this.state.activeStep === steps.length ? (
                        <div style={{overflow:"auto"}} className="w-100 buttons">
                            <Button variant="contained" className="btn btn-success text-white" onClick={this.handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div style={{overflow:"auto"}} className="w-100 buttons">
                            
                            <button type="button" id="prevBtn" style={activeStep === 0?{display:'none'}: {display:'block'}} onClick={this.handleBack}><i><FontAwesomeIcon icon={faChevronLeft} /></i>Back</button>
                            
                            <button type="submit" className="btn bg_red c-white float-md-right" id="nextBtn" onClick={this.handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</button>
                        </div>
                        )}
                </div>
            </section>  
             )}
             {/* footer   */}
             <Footer/>
         </div>
      );
   }
}
