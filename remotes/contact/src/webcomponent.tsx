import React from 'react';
import ContactPage from './ContactPage';
import { WebComponentBase, registerWebComponent } from './utils/webComponent';

class ContactWebComponent extends WebComponentBase {
  protected renderComponent(): React.ReactElement {
    return <ContactPage />;
  }
}

registerWebComponent('contact-widget', ContactWebComponent);

export default ContactWebComponent;
