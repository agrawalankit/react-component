import React, {Component} from 'react';
import img1 from '../assets/images/image_1.png';
import img2 from '../assets/images/image_2.png';
import img3 from '../assets/images/image_3.png';
import Offer from '../main_components/offer'
import Home from '../main_components/homepro';
import Part from '../main_components/partner';
import Comic from '../main_components/comic';
import Mission from '../main_components/mission';
export default class Main extends Component{
  render(){
    return(
      <div className='main'>
      <section class="mainbanner">

        <div class="bannercontent">
          <h2>A simpler way for all of us to take control <br />of our loans.</h2>
          <div class="btnwrap">
            <a href="#loanfolkoffer" class="btn-getstarted" id="btngetstarted">Get Started</a>
          </div>
        </div>
      </section>

      <section class="loanfolkoffer" id="loanfolkoffer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="titleblack marginbot50 text-center">What LoanFolk Offers</h2>
            </div>
          </div>
          <div class="row">
            <Offer h4='Rate comparison made easy' img={img1} para='LoanFolk provides intelligently powered interest rate comparison shopping. Our no obligation service matches you with curated, trusted lenders who have the potential to save you thousands on your loans.' but='Compare now' />

            <Offer h4='A different prespective on debt' img={img2} para='We’re inviting people to share their experiences as part of our debt cartoons series. It’s not just about cracking a smile, it’s about getting people to think and talk about a tough topic in a whole new way.' but='Share your story' />

            <Offer h4='Resources, tools &amp; services' img={img3} para='Articles, calculators, FAQs, and services that give you confidence and control as you make decisions.' but='Learn More' />
          </div>
        </div>
      </section>
      <Home />
      <Part />
      <Comic />
      <Mission />
      </div>
    )
  }
}
