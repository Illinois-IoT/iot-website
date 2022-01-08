import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../theme.css';
import './forms.css';
import { Paragraph } from '../paragraph/Paragraph';
import { FormButton } from '../buttons/buttons';

function SupportUsForm() {
  const [state, handleSubmit] = useForm("mlezdkda");
  if (state.succeeded) {
      return (
        <div className='lightblue-div'>
            <Paragraph heading="DONATION INQUERY FORM" subheading="Send us an email detailing how you would like to contribute"/>
            <div className="supportus-form">
            <h5>Successfully submitted. Thank you!</h5>
            </div>
        </div>
      );
  }
  return (
    <div className='lightblue-div'>
        <Paragraph heading="DONATION INQUERY FORM" subheading="Send us an email detailing how you would like to contribute"/>
        <form onSubmit={handleSubmit} className="supportus-form">
            <div className='form-row'>
                <h5 className='form-label'>Name</h5>
                <input
                    id="name"
                    type="text" 
                    name="name"
                    className='form-input'
                />
            </div>
            <div className='form-row'>
                <h5 className='form-label'>Email</h5>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    className='form-input'
                />
            </div>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <div className='form-row'>
                <h5 className='form-label'>Details</h5>
                <textarea
                    id="message"
                    name="message"
                    className='form-textarea'
                />
            </div>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} id="basic-button">
                Submit
            </button>
        </form>
    </div>
  );
}

export { SupportUsForm };