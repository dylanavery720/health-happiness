import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Slide from '../Slide/Slide';

class NavTabs extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 8,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 8 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
            <img className="ppoint" src="/images/title.jpg"/>
            {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
              <Slide
              title="Risk"
              one="Never been sued"
              two="Reduced hospital visits"
              three="Integrated health delivery system"
              four="Communication with family members and guardians"
              />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
              <Slide
              title="Success"
              one="Trusted"
              two="Personalized Care Plan"
              three="Qualified Care Staff"
              four="Fourth Leg Of The Stool"
              />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
              <Slide
              title="Strategy"
              one="The best indicator of success, is prior success"
              two="Leverage Respect"
              three="Targeted Activities"
              four="Fundraising"
              />
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
              <Slide
              title="Understanding"
              one="Primary Market Area"
              two="Tertiary Markets"
              three="Objective"
              four="Data Points..."
              />
              {this.renderStepActions(4)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
              <Slide
              title="Design"
              one="Under the Roof"
              two="Efficient Design, Done Properly"
              three="One-Bedroom & Two-Bedroom Layouts"
              four="Space Plan"
              />
              {this.renderStepActions(5)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
              <Slide
              title="Challenges"
              one="Staffing"
              two="Excellent Staff Retention"
              three="Regulatory Arena"
              four="Policy and Procedures"
              />
              {this.renderStepActions(6)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
              <Slide
              title="Opportunity"
              one="Age Wave"
              two="83% increase of those 80+ years in age"
              three="50% increase of those 70+ years in age"
              />
              {this.renderStepActions(7)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
              <Slide
              title="Nutrition"
              one="Seasonal, Varied Meal Plan"
              two="Fresh Food"
              three="Resident Input"
              four="Social Ambience"
              />
              {this.renderStepActions(8)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
            <img className="ppoint" src="/images/final.jpg"/>
            {this.renderStepActions(0)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to do again.
          </p>
        )}
      </div>
    );
  }
}

export default NavTabs;
