import { Type } from '@openmrs/esm-framework';

export const configSchema = {
  showTutorial: {
    _type: Type.Boolean,
    _default: false,
    _description: 'Enable or Disable Onboarding Walkthrough',
  },
  tutorialData: {
    _type: Type.Array,
    _default: [
      {
        title: 'Sample Demo',
        description: 'This is a Sample Demo',
        steps: [
          {
            target: '[aria-label="OpenMRS"]',
            content: 'This is the OpenMRS logo. Click here to go back to the home page.',
            disableBeacon: true,
          },
          {
            target: '[aria-label="hh"]',
            content: 'This is the OpenMRS logo. Click here to go back to the home page.',
            disableBeacon: true,
          },
          {
            target: '[aria-label="Left navigation"]',
            content: 'This is the side bar.',
            disableBeacon: true,
            placement: 'right',
          },
        ],
      },
      {
        title: 'Tasks',
        description:
          'Find and organize what needs to be done for patients with task lists. Tasks are created both automatically based on data in the patient’s chart as well as manually by you or your colleagues.',
        steps: [
          {
            target: '.-esm-active-visits__active-visits__activeVisitsContainer___CM_W4',
            title: 'Active Visit',
            content: 'This is the Active Visit section. Here you can find the list of active visits.',
            disableBeacon: true,
          },
          {
            target: '[aria-label="Left navigation"]',
            content: 'This is the side bar.',
            disableBeacon: true,
            placement: 'right',
          },
        ],
      },
      {
        title: 'Order basket',
        description: 'A single place for referral, imaging, drug and lab test orders.',
        steps: [
          {
            target: '[aria-label="OpenMRS"]',
            title: 'Order Basket',
            content: 'This is the Order Basket. A single place for referral, imaging, drug, and lab test orders.',
            disableBeacon: true,
          },
          {
            target: '[aria-label="Left navigation"]',
            content: 'This is the side bar.',
            disableBeacon: true,
            placement: 'right',
          },
        ],
      },
      {
        title: 'Patient lists',
        description:
          'Service queues help you manage your clinic. Patients can be organized by priority level and you can track the wait time for each of your clinic’s key areas.',
        steps: [
          {
            target: '[aria-label="OpenMRS"]',
            content: 'This is the Patient Lists section. Here you can manage and organize patient queues.',
            disableBeacon: true,
          },
          {
            target: '[aria-label="Left navigation"]',
            content: 'This is the side bar.',
            disableBeacon: true,
            placement: 'right',
          },
        ],
      },
      {
        title: 'Patient Registration',
        description: ' Register a new patient. You can also view and edit patient information.',
        steps: [
          {
            target: '[aria-label="Demographics Section"]',
            content:
              'This is the Demographics section. Here you can find various fields and information related to the patient.',
            disableBeacon: true,
            placement: 'right',
          },
          {
            target: '[aria-label="Contact Details Section"]',
            content: 'Here you can update the patients contact information.',
            disableBeacon: true,
            placement: 'right',
          },
          {
            target: '[aria-label="Relationships section"]',
            content: 'In this section, you can manage the patients relationships.',
            disableBeacon: true,
            placement: 'right',
          },
        ],
      },
    ],
    _description: 'List of tutorials to be displayed in the modal',
  },
};

export type Config = {
  showTutorial: boolean;
  tutorialData: {
    title: string;
    description: string;
    steps: {
      target: string;
      content: string;
      disableBeacon: boolean;
      placement?: string;
    }[];
  }[];
};
