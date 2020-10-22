import React, { forwardRef } from 'react';

import { CardButton, Page } from '../../../components';
import {
  BriefcaseIcon,
  RainCloudIcon,
  PackageIcon,
  WifiIcon,
} from '../../../icons';

export const PageOne = forwardRef(({ isCurrentPage, ...props }, ref) => (
  <Page
    ref={ref}
    title="What type of insurance are you looking for?"
    number={1}
    isCurrentPage={isCurrentPage}
    {...props}
  >
    <CardButton
      title="Professional Liability"
      description="Erros & Omissions (E&O insurance)"
      icon={<BriefcaseIcon />}
    />
    <CardButton
      title="General Liability"
      description="Help mitigate against loss (CGL insurance)"
      icon={<RainCloudIcon />}
    />
    <CardButton
      title="Business Owner’s Policy"
      description="The complete package (BOP)"
      icon={<PackageIcon />}
    />
    <CardButton
      title="Cyber"
      description="Internet-bsed risks (CLIC)"
      icon={<WifiIcon />}
    />
  </Page>
));
