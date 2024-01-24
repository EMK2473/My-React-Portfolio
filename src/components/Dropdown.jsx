import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const MultiSelectDropdown = () => {
    const options = [
        { key: 'javascript', value: 'javascript', text: 'JavaScript' },
        { key: 'react', value: 'react', text: 'React' },
        { key: 'nextjs', value: 'nextjs', text: 'Next.js' },
        { key: 'node', value: 'node', text: 'Node' },
        { key: 'express', value: 'express', text: 'Express' },
        { key: 'mysql', value: 'mysql', text: 'MySQL' },
        { key: 'nosql', value: 'nosql', text: 'NoSQL' },
        { key: 'graphql', value: 'graphql', text: 'GraphQL' },
        { key: 'materialui', value: 'materialui', text: 'Material UI' },
        { key: 'html', value: 'html', text: 'HTML' },
        { key: 'css', value: 'css', text: 'CSS' },
        { key: 'git', value: 'git', text: 'Git' },
        { key: 'xml', value: 'xml', text: 'XML' },
        { key: 'svg', value: 'svg', text: 'SVG' },
        { key: 'consultation', value: 'consultation', text: 'Consultation' },
      ];
      

  return (
    <Dropdown
      placeholder="Skills"
      fluid
      multiple
      selection
      options={options}
      defaultValue={['javascript', 'nosql']} // Default selected values
    />
  );
};

export default MultiSelectDropdown;
