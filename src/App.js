import React, { useState } from 'react';

import './App.css';
import Grid from "./components/Grid/Grid";
import Cell from "./components/Cell";
import Image from "./components/Image";
import Nav from "./components/Nav";
import Text from "./components/Text";
import Button from "./components/Button/Button";
import TextArea from "./components/TextArea";
import Form from "./components/Form";

import useForm from "./hooks/useForm";
import useTracker from "./hooks/useTracker";
import InputField from "./components/InputField";
import List from "./components/List";
import Dropdown from "./components/Dropdown";
import FormField from "./components/FormField";
import Checkbox from "./components/Checkbox";

function App() {
    const { values, handleChange, handleSubmit } = useForm(updateSubscription);
    const { trackEvent, trackingHistory } = useTracker(getHistory);

    function updateSubscription() {
        console.log(values);
        trackEvent({
            type: 'SUBSCRIBE_NEWSLETTER',
            data: {
                email: values.email,
            }
        })
    }

    function getHistory() {
        console.log(trackingHistory);
    }

  return (
      <React.Fragment>
          <Grid name="Header">
              <Cell name="container" halign="center" sm="90%">
                  <Cell name="Left" sm="9/10" md="1/2" height="100px">
                      <Image name="logo" src='https://www.hu.nl/-/media/hu/afbeeldingen/algemeen/hu-logo.ashx' alt='HU Logo' valign='center'/>
                  </Cell>

                  <Cell name="Right" sm="1/20" md="1/2" height="100px" valign="center">
                      <Nav name="navigation" items={[{label: "About us", src: "/"}, {label: "Support", src: "/"}, {label: "Contact", src: "/"}]} valign='center' halign='right' width="50%"/>
                  </Cell>
              </Cell>
          </Grid>

          <Grid name="Content" background="#eef6ff">
              <Cell name="container" halign="center" sm="90%" md="70%" gap="50px 0 0 0">
                  <Cell name="Main" halign="left" sm="1" md="2/5">
                      <Cell sm="1"><Text type="h3" halign="left">The must-have kit for all UX Designers</Text></Cell>

                      <Cell sm="1"><Text type="h1" halign="left">Free UX Prototyping Library for React</Text></Cell>

                      <Cell sm="1" >
                          <Text type="placeholder" sentences="4" halign="left" textalign='left' spacing="35px 0 35px 0" />
                          <Form onSubmit={handleSubmit} width='100%'>
                              <InputField name="email" onChange={handleChange} placeholder="example@mail.com"/>
                              <Button type="submit" halign="left" spacing='0 0 0 15px' onClick={() => trackEvent({type: 'CLICK_NEWSLETTER_TOP'})}>Keep me up to date</Button>
                          </Form>
                          <Text type="label" spacing="10px 0 0 0">By clicking the button, you agree to our Terms and Conditions</Text>
                      </Cell>
                  </Cell>

                  <Cell name="Image" halign="right" sm="hidden" md="2/5" gap="0 0 50px 0">
                      <Image name="Splash" height="400px" width="100%" alt='Splash image' valign='center'/>
                  </Cell>
              </Cell>
          </Grid>

          <Grid name="Section1">
              <Cell name="Tagline" sm="90%" md="2/6" halign="center" gap="50px 0 0 0">
                  <Text type="bold" halign="center" spacing="40px 0 0 0">To measure is to know</Text>
                  <Text type="h1" textalign="center">Get better and more trustworthy test results</Text>
                  <Text type="placeholder" sentences="4" halign="left" textalign='center' spacing="25px 0 0 0" />
              </Cell>
          </Grid>

          <Grid name="Section2">
              <Cell name="container" halign="center" sm="80%" md="70%" gap="80px 0 0 0">
                  <Cell name="Image" halign="left" sm="1" md="2/5">
                      <Image name="Splash" height="300px" width="100%" alt='Splash image' spacing='50px 0 0 0' valign='center'/>
                  </Cell>

                  <Cell name="Main" halign="right" sm="1" md="2/5">
                      <Cell sm="1">
                          <Text type="h2" halign="left" spacing="50px 0 0 0">Fully interactive and animatable</Text>
                      </Cell>
                      <Cell sm="1" >
                          <Text type="placeholder" sentences="3" halign="left" textalign='left' spacing="15px 0 15px 0" />
                      </Cell>
                  </Cell>
              </Cell>
          </Grid>

          <Grid name="Section3">
              <Cell name="container" halign="center" sm="80%" md="70%" gap="80px 0 0 0">
                  <Cell name="Main" halign="left" sm="1" md="2/5">
                      <Cell sm="1">
                          <Text type="h2" halign="left" spacing="50px 0 0 0">Fully responsive and customizable themes and components</Text>
                      </Cell>
                      <Cell sm="1" >
                          <Text type="placeholder" sentences="4" halign="left" textalign='left' spacing="15px 0 15px 0" />
                      </Cell>
                  </Cell>

                  <Cell name="Image" halign="right" sm="1" md="2/5">
                      <Image name="Splash" height="300px" width="100%" alt='Splash image' spacing='50px 0 0 0' valign='center'/>
                  </Cell>
              </Cell>
          </Grid>

          <Grid name="Section4">
              <Cell name="container" halign="center" sm="80%" md="70%" gap="80px 0 80px 0">
                  <Cell name="Image" halign="right" sm="1">
                      <Image name="Splash" height="300px" width="100%" alt='Splash image' spacing='50px 0 0 0' valign='center'/>
                  </Cell>

                  <Cell name="container" halign="center" sm="1" md="1/4">
                      <Text type="bold" halign='center' spacing="25px 0 0 0">Kit made and provided by Sandwich Digital</Text>
                      <Text type="placeholder" sentences="2" textalign='center' spacing="10px 0 0 0" />
                      <Text type="link" halign='center' spacing="10px 0 15px 0" link="/">About us ></Text>
                  </Cell>

                  <Cell name="container" halign="center" sm="1" md="1/4">
                      <Text type="bold" halign='center' spacing="25px 0 0 0">Questions, ideas and/or problems?</Text>
                      <Text type="placeholder" sentences="2" textalign='center' spacing="10px 0 0 0" />
                      <Text type="link" halign='center' spacing="10px 0 15px 0" link="/">Contact us ></Text>
                  </Cell>
              </Cell>
          </Grid>

          <Grid name="Footer" background="#eef6ff">
              <Cell name="container" halign="center" sm="80%" gap="50px 0 50px 0">
                  <Cell name="Left" sm="1" md="1/3">
                      <Cell name="Left" sm="1">
                          <Image name="logo" src='https://www.hu.nl/-/media/hu/afbeeldingen/algemeen/hu-logo.ashx' alt='HU Logo' valign='center'/>
                          <Text halign="left" textalign='left' spacing="35px 0 15px 0">Join our newsletter to stay up to date on features and releases,<br/>and receive exclusive bonuses and discounts</Text>
                          <Form onSubmit={handleSubmit} width='100%'>
                              <InputField name="email" onChange={handleChange} placeholder="example@mail.com"/>
                              <Button type="submit" halign="left" spacing='0 0 0 15px' onClick={() => trackEvent({type: 'CLICK_NEWSLETTER_FOOTER'})}>Sign me up</Button>
                          </Form>
                          <Text type="label" spacing="10px 0 0 0">By clicking the button, you agree to our Terms and Conditions</Text>
                      </Cell>
                  </Cell>

                  <Cell name="Center" sm="1" md="1/3">

                  </Cell>

                  <Cell name="Right" sm="1" md="1/3">

                  </Cell>
              </Cell>
          </Grid>
      </React.Fragment>
  );
}

export default App;
