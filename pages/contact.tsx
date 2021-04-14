import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactForm from '../components/ContactForm/ContactForm';


const ContactPage: React.FC = () => {
    return (
        <Layout title="Contact">
            <ContactForm />
        </Layout>
    );
}

export default ContactPage;
