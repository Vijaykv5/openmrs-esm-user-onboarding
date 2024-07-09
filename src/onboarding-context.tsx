import React, { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext({
  runJoyride: false,
  steps: [],
  currentStepIndex: 0,
  startOnboarding: (steps) => {},
  stopOnboarding: () => {},
  nextStep: () => {},
});

export const OnboardingProvider = ({ children }) => {
  const [runJoyride, setRunJoyride] = useState(false);
  const [steps, setSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const startOnboarding = (newSteps) => {
    console.log(newSteps);
    setSteps(newSteps);
    setCurrentStepIndex(0);
    setRunJoyride(true);
  };

  const stopOnboarding = () => {
    setRunJoyride(false);
    setCurrentStepIndex(0);
  };

  const nextStep = () => {
     console.log('startOnboarding', steps, currentStepIndex);
    setCurrentStepIndex((prevIndex) => prevIndex + 1);
     console.log('startOnboarding2', steps, currentStepIndex);

  };

  return (
    <OnboardingContext.Provider
      value={{ runJoyride, steps, currentStepIndex, startOnboarding, stopOnboarding, nextStep }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);
