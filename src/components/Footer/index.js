import React from 'react';
import { useTranslation } from '../../i18n';
import { FooterContainer } from './styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      {t('footer.text')}
    </FooterContainer>
  );
};

export default Footer;