import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../theme.css';
import './forms.css';
import { Paragraph } from '../paragraph/Paragraph';

function SupportUsForm() {
  const [state, handleSubmit] = useForm("mlezdkda");
  if (state.succeeded) {
      return (
        <div className='lightblue-div'>
            <Paragraph heading="DONATION INQUIRY FORM" subheading="Send us an email detailing how you would like to contribute"/>
            <div className="supportus-form">
            <h5>Successfully submitted. Thank you!</h5>
            </div>
        </div>
      );
  }

  return (
    <div className='lightblue-div'>
        <Paragraph heading="DONATION INQUIRY FORM" subheading="Send us an email detailing how you would like to contribute"/>
        <form onSubmit={handleSubmit} className="supportus-form">
            <div className='form-row'>
                <h5 className='form-label'>Name</h5>
                <input
                    id="name"
                    type="text" 
                    name="name"
                    className='form-input'
                    placeholder="ex: John Smith"
                    required
                />
            </div>
            <div className='form-row'>
                <h5 className='form-label'>Email</h5>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    className='form-input'
                    placeholder="ex: iot.cs.illinois@gmail.com"
                    required
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

function LocalOutreachInterestForm() {
    const [state, handleSubmit] = useForm("mgedvbvg");
    if (state.succeeded) {
        return (
          <div className='lightblue-div'>
              <Paragraph heading="URBANA-CHAMPAIGN AREA OUTREACH" subheading="Send us an email to be notified of our future outreach events"/>
              <div className="supportus-form">
              <h5>Successfully submitted. Thank you!</h5>
              </div>
          </div>
        );
    }

    return (
      <div className='lightblue-div'>
          <Paragraph heading="URBANA-CHAMPAIGN AREA OUTREACH" subheading="Send us an email to be notified of our future outreach events"/>
          <form onSubmit={handleSubmit} className="supportus-form">
              <div className='form-row'>
                  <h5 className='form-label'>Name</h5>
                  <input
                      id="name"
                      type="text" 
                      name="name"
                      className='form-input'
                      placeholder="ex: John Smith"
                      required
                  />
              </div>
              <div className='form-row'>
                  <h5 className='form-label'>Email</h5>
                  <input
                      id="email"
                      type="email" 
                      name="email"
                      className='form-input'
                      placeholder="ex: iot.cs.illinois@gmail.com"
                      required
                  />
              </div>
              <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
              />
              <div className='form-row'>
                  <h5 className='form-label'>(optional) Which county/city do you reside in?</h5>
                  <input
                      id="residency"
                      type="text" 
                      name="residency"
                      className='form-input'
                      placeholder="ex: Urbana-Champaign, Bloomington, Peoria, etc."
                  />
              </div>
              <div className='form-row'>
                  <h5 className='form-label'>(optional) Which school do you attend?</h5>
                  <input
                      id="school"
                      type="text" 
                      name="school"
                      className='form-input'
                      placeholder="ex: Champaign Central High School, Urbana Middle School, etc."
                  />
              </div>
              <div className='form-row'>
                  <h5 className='form-label'>Areas of Interest?</h5>
              </div>
              <div className='form-chekcbox-div'>
                <div className='form-chekcbox-row'>
                    <h6>Internet of Things</h6>
                    <input
                        id="interest-iot"
                        type="checkbox" 
                        name="interested-in"
                        value="Internet of Things"
                    />
                </div>
                <div className='form-chekcbox-row'>
                    <h6>Programming</h6>
                    <input
                        id="interest-programming"
                        type="checkbox" 
                        name="interested-in"
                        value="Programming"
                    />
                </div>
                <div className='form-chekcbox-row'>
                    <h6>Electrical hardware (sensors)</h6>
                    <input
                        id="interest-hardware"
                        type="checkbox" 
                        name="interested-in"
                        value="Electrical hardware (sensors)"
                    />
                </div>
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

function ContactUsForm() {
    const [state, handleSubmit] = useForm("mwkypjov");
    if (state.succeeded) {
        return (
          <div className='lightblue-div'>
              <Paragraph heading="CONTACT FORM" subheading="Send us an email with your inquiry"/>
              <div className="supportus-form">
              <h5>Successfully submitted. Thank you!</h5>
              </div>
          </div>
        );
    }

    return (
      <div className='lightblue-div'>
          <Paragraph heading="CONTACT FORM" subheading="Send us an email with your inquiry"/>
          <form onSubmit={handleSubmit} className="supportus-form">
              <div className='form-row'>
                  <h5 className='form-label'>Name</h5>
                  <input
                      id="name"
                      type="text" 
                      name="name"
                      className='form-input'
                      placeholder="ex: John Smith"
                      required
                  />
              </div>
              <div className='form-row'>
                  <h5 className='form-label'>Email</h5>
                  <input
                      id="email"
                      type="email" 
                      name="email"
                      className='form-input'
                      placeholder="ex: iot.cs.illinois@gmail.com"
                      required
                  />
              </div>
              <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
              />

              <div className='form-row'>
                  <h5 className='form-label'>Subject</h5>
                  <select name="subject" id="subject">
                    <option value="General questions">General questions</option>
                    <option value="Question about research projects">Question about research projects</option>
                    <option value="Interest in joining research (undergraduate)">Interest in joining research (undergraduate)</option>
                    <option value="Interest in joining research (grad/Ph.D.)">Interest in joining research (grad/Ph.D.)</option>
                    <option value="Interest in working at summer camp (UofI student)">Interest in working at summer camp (UofI student)</option>
                    <option value="Questions about summer camp (applicant)">Questions about summer camp (applicant)</option>
                    <option value="Questions about community events (Champaign-Urbana residents)">Questions about community events (Champaign-Urbana residents)</option>
                    <option value="Inquiry about IoT Makerspace">Inquiry about IoT Makerspace</option>
                    <option value="Inquiry about donations">Inquiry about donations</option>
                    <option value="Other (specify in email)">Other (specify in email)</option>
                  </select> 
              </div>
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

export { SupportUsForm, LocalOutreachInterestForm, ContactUsForm };