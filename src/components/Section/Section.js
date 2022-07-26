import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import s from './Section.module.css';

export default function Section({ title, isHidden, children }) {
  return (
    <section className={s.section}>
      <Container>
        <h1 className={isHidden ? 'sectionTitleIsHidden' : 'sectionTitle'}>
          {title}
        </h1>
        {children}
      </Container>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
