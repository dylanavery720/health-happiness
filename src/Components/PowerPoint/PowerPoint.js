import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Slide from '../Slide/Slide';

class PowerPoint extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 6,
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
          label={stepIndex === 6 ? 'Finish' : 'Next'}
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
      <div className="ppcontainer" style={{maxWidth: 880, maxHeight: 500, margin: 'auto'}}>
        <MuiThemeProvider>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
            <img className="powerpoint" src="/images/Health1.jpg"/>
            {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
            <img className="powerpoint" src="/images/Health2.jpg"/>
            {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
            <img className="powerpoint" src="/images/Health3.jpg"/>
            {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
            <img className="powerpoint" src="/images/Health4.jpg"/>
            {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
            <img className="powerpoint" src="/images/Health5.jpg"/>
            {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
            <img className="powerpoint" src="/images/Health6.jpg"/>
            {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel></StepLabel>
            <StepContent>
            <img className="powerpoint" src="/images/Health7.jpg"/>
            {this.renderStepActions(0)}
            </StepContent>
          </Step>
        </Stepper>
      </MuiThemeProvider>
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

export default PowerPoint;
