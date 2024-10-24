import React from 'react';
import CapstoneShowcase from '../pages/capstone-showcase';

const CapstoneShowcaseTemplate = ({ pageContext }) => {
  const { projects } = pageContext;

  console.log('Projects data received:', projects); // Debugging line

  return <CapstoneShowcase projects={projects} />;
};

export default CapstoneShowcaseTemplate;
