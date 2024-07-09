import React from 'react';
import ReactJoyride, { CallBackProps, STATUS } from 'react-joyride';
import { useOnboarding } from './onboarding-context';
import './root.scss';

const RootComponent: React.FC = () => {
  const { runJoyride, steps, currentStepIndex, stopOnboarding, nextStep } = useOnboarding();

const handleJoyrideCallback = (data: CallBackProps) => {
  const { status, action, index } = data;

  console.log('Joyride callback:', status, action, index);

  if (action === 'next' && index === steps.length - 1) {
    nextStep();
    console.log('stopped onboarding');
  } else if (action === 'next') {
    nextStep();
    console.log('Moving to next step:', currentStepIndex + 1);
  }
};


  return (
    <ReactJoyride
      steps={steps}
      run={runJoyride}
      // stepIndex={currentStepIndex}
      continuous={true}
      // callback={handleJoyrideCallback}
      showSkipButton={true}
      showProgress={true}
    />
  );
};

export default RootComponent;
