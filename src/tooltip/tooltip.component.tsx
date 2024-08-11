import React from 'react';
import { Button } from '@carbon/react';
import { ArrowLeft, ArrowRight, Close } from '@carbon/react/icons';
import { useTranslation } from 'react-i18next';
import styles from './tooltip.scss';

interface CustomTooltipProps {
  continuous: boolean;
  index: number;
  step: any;
  backProps: any;
  skipProps: any;
  primaryProps: any;
  tooltipProps: any;
  totalSteps: number;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  continuous,
  index,
  step,
  backProps,
  primaryProps,
  skipProps,
  tooltipProps,
  totalSteps,
}) => {
  const { t } = useTranslation();
  const isLastStep = index === totalSteps - 1;

  return (
    <div {...tooltipProps} className={styles.tooltipcontainer}>
      <div className={styles.tooltipheader}>
        <h4 className={styles.tooltiptitle}>{step.title}</h4>
        <Button {...skipProps} size="sm" kind="ghost">
          <Close />
        </Button>
      </div>
      <div className={styles.tooltipcontent}>{step.content}</div>
      <div className={styles.tooltipfooter}>
        <span className={styles.tooltipstep}>{`${index + 1} of ${totalSteps}`}</span>
        <div className={styles.buttonContainer}>
          {!step.hideBackButton && index > 0 && (
            <Button {...backProps} size="sm" kind="ghost" className={styles.buttonback}>
              <div className={styles.arrowContainer}>
                <ArrowLeft />
              </div>
              {t('back', 'Back')}
            </Button>
          )}
          {continuous && !step.hideNextButton && (
            <Button {...primaryProps} size="sm" className={styles.buttonnext}>
              {isLastStep ? (
                <>{t('finish', 'Finish')}</>
              ) : (
                <>
                  {t('next', 'Next')}
                  <div className={styles.arrowContainer}>
                    <ArrowRight />
                  </div>
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomTooltip;
