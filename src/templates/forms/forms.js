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
            <div className="form-div">
            <h5>Successfully submitted. Thank you!</h5>
            </div>
        </div>
      );
  }

  return (
    <div className='lightblue-div'>
        <Paragraph heading="DONATION INQUIRY FORM" subheading="Send us an email detailing how you would like to contribute"/>
        <form onSubmit={handleSubmit} className="form-div">
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
              <Paragraph heading="INTEREST FORM" subheading="Be notified of our future outreach events in the Urbana-Champaing area"/>
              <div className="form-div">
              <h5>Successfully submitted. Thank you!</h5>
              </div>
          </div>
        );
    }

    return (
      <div className='lightblue-div'>
          <Paragraph heading="INTEREST FORM" subheading="Be notified of our future outreach events in the Urbana-Champaing area"/>
          <form onSubmit={handleSubmit} className="form-div">
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
                  <h5 className='form-label'>Which county/city do you reside in?</h5>
                  <input
                      id="residency"
                      type="text" 
                      name="residency"
                      className='form-input'
                      placeholder="ex: Urbana-Champaign, Bloomington, Peoria, etc."
                  />
              </div>
              <div className='form-row'>
                  <h5 className='form-label'>Which school do you attend?</h5>
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
                        className='form-checkbox'
                    />
                </div>
                <div className='form-chekcbox-row'>
                    <h6>Programming</h6>
                    <input
                        id="interest-programming"
                        type="checkbox" 
                        name="interested-in"
                        value="Programming"
                        className='form-checkbox'
                    />
                </div>
                <div className='form-chekcbox-row'>
                    <h6>Electrical hardware (sensors)</h6>
                    <input
                        id="interest-hardware"
                        type="checkbox" 
                        name="interested-in"
                        value="Electrical hardware (sensors)"
                        className='form-checkbox'
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
              <div className="form-div">
              <h5>Successfully submitted. Thank you!</h5>
              </div>
          </div>
        );
    }

    return (
      <div className='lightblue-div'>
          <Paragraph heading="CONTACT FORM" subheading="Send us an email with your inquiry"/>
          <form onSubmit={handleSubmit} className="form-div">
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
                  <select name="subject" id="subject" className='form-input'>
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

function MakerspaceAccessRequestForm() {
    const [state, handleSubmit] = useForm("xvolzovv");
    if (state.succeeded) {
        return (
          <div className='lightblue-div'>
              <Paragraph heading="ACCESS REQUEST FORM" subheading="Enter your @illinois email to request access"/>
              <div className="form-div">
              <h5>Successfully submitted. Thank you!</h5>
              </div>
          </div>
        );
    }

    return (
      <div className='lightblue-div'>
          <Paragraph heading="ACCESS REQUEST FORM" subheading="Enter your @illinois email to request access"/>
          <form onSubmit={handleSubmit} className="form-div">
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
                      placeholder="ex: js@illinois.edu"
                      required
                  />
              </div>
              <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
              />
              <button type="submit" disabled={state.submitting} id="basic-button">
                  Submit
              </button>
          </form>
      </div>
    );
}

function LabAssistantApplicationForm() {
    const [state, handleSubmit] = useForm("mbjwgapq");
    if (state.succeeded) {
        return (
          <div className='lightblue-div'>
              <Paragraph heading="LAB ASSISTANT APPLICATION"/>
              <div className="form-div">
              <h5>Successfully submitted. Thank you!</h5>
              </div>
          </div>
        );
    }

    return (
      <div className='lightblue-div'>
          <Paragraph heading="LAB ASSISTANT APPLICATION" subheading="Please read this entire page before applying"/>
          <form onSubmit={handleSubmit} className="form-div">
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
                  <h5 className='form-label'>Illinois Email (@illinois.edu)</h5>
                  <input
                      id="email"
                      type="email" 
                      name="email"
                      className='form-input'
                      placeholder="ex: js@illinois.edu"
                      required
                  />
              </div>
              <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
              />
              <div className='form-row'>
                  <h5 className='form-label'>Current Grade Level</h5>
                  <select name="subject" id="subject" className='form-input'>
                    <option value="Undergrad - Freshman">Undergrad - Freshman</option>
                    <option value="Undergrad - Sophomore">Undergrad - Sophomore</option>
                    <option value="Undergrad - Junior">Undergrad - Junior</option>
                    <option value="Undergrad - Senior">Undergrad - Senior</option>
                    <option value="Grad Student">Grad Student</option>
                    <option value="PhD Student">PhD Student</option>
                  </select> 
              </div>
              <div className='form-row'>
                  <h5 className='form-label'>Check all that applies</h5>
              </div>
              <div className='form-chekcbox-div'>
                <div className='form-chekcbox-row'>
                    <h6>Have general programming experience</h6>
                    <input
                        id="qualification-programming"
                        type="checkbox" 
                        name="qualification-programming"
                        value="have general programming experience"
                        className='form-checkbox'
                    />
                </div>
                <div className='form-chekcbox-row'>
                    <h6>Have experience in Python</h6>
                    <input
                        id="qualification-python"
                        type="checkbox" 
                        name="qualification-python"
                        value="Have experience in Python"
                        className='form-checkbox'
                    />
                </div>
                <div className='form-chekcbox-row'>
                    <h6>Knowledgeable in IoT</h6>
                    <input
                        id="qualification-knowledge-iot"
                        type="checkbox" 
                        name="qualification-knowledge-iot"
                        value="knowledgeable in IoT"
                        className='form-checkbox'
                    />
                </div>
                <div className='form-chekcbox-row'>
                    <h6>Have interest in IoT</h6>
                    <input
                        id="qualification-interest-iot"
                        type="checkbox" 
                        name="qualification-interest-iot"
                        value="Have interest in IoT"
                        className='form-checkbox'
                    />
                </div>
                <div className='form-chekcbox-row'>
                    <h6>Have taken CS437 (Topics in Internet of Things)</h6>
                    <input
                        id="qualification-cs437"
                        type="checkbox" 
                        name="qualification-cs437"
                        value="Have taken CS437 (Topics in Internet of Things)"
                        className='form-checkbox'
                    />
                </div>
                <div className='form-chekcbox-row'>
                    <h6>Good at interacting with minors (high school students)</h6>
                    <input
                        id="qualification-aptitude-minors"
                        type="checkbox" 
                        name="qualification-aptitude-minors"
                        value="Good at interacting with minors (high school students)"
                        className='form-checkbox'
                    />
                </div>
              </div>
              <div className='form-chekcbox-div'>
                <div className='form-chekcbox-row'>
                    <h6>I certify I will be on campus during the week of the camp</h6>
                    <input
                        id="certify-on-campus"
                        type="checkbox" 
                        name="certify-on-campusn"
                        value="I certify I will be on campus during the week of the camp"
                        className='form-checkbox'
                    />
                </div>
              </div>
              <button type="submit" disabled={state.submitting} id="basic-button">
                  Submit
              </button>
          </form>
      </div>
    );
}

export { SupportUsForm, LocalOutreachInterestForm, ContactUsForm, MakerspaceAccessRequestForm, LabAssistantApplicationForm };