import React from 'react';
import Appointment from '../Appointment/Appointment';

import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ExceptionDental from '../ExceptionDental/ExceptionDental';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionDental></ExceptionDental>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;