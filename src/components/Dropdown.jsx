import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const MultiSelectDropdown = () => {
  const options = [
    { key: 'employment', value: 'employment', text: 'Employment' },
    { key: 'consultation', value: 'consultation', text: 'Consultation' },
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
    { key: 'agileworkflow', value: 'agileworkflow', text: 'Agile Workflow' },
    { key: 'scrummethodology', value: 'scrummethodology', text: 'SCRUM Methodology' },
    { key: 'jquery', value: 'jquery', text: 'jQuery' },
    { key: 'apis', value: 'apis', text: 'APIs' },
    { key: 'ajax', value: 'ajax', text: 'AJAX' },
    { key: 'agilemethodologies', value: 'agilemethodologies', text: 'Agile Methodologies (Scrum, Kanban, SAFe, etc.)' },
    { key: 'projectmanagement', value: 'projectmanagement', text: 'Project Management' },
    { key: 'crossfunctionalteamfacilitation', value: 'crossfunctionalteamfacilitation', text: 'Cross-Functional Team Facilitation' },
    { key: 'scrumofscrums', value: 'scrumofscrums', text: 'Scrum of Scrums (SoS)' },
    { key: 'sprintplanningandretrospectivemeetings', value: 'sprintplanningandretrospectivemeetings', text: 'Sprint Planning and Retrospective Meetings' },
    { key: 'continuousimprovement', value: 'continuousimprovement', text: 'Continuous Improvement' },
    { key: 'softwaredevelopment', value: 'softwaredevelopment', text: 'Software Development' },
    { key: 'negotiationandriskreduction', value: 'negotiationandriskreduction', text: 'Negotiation and Risk Reduction' },
    { key: 'metricsprogramimplementation', value: 'metricsprogramimplementation', text: 'Metrics Program Implementation' },
    { key: 'teambuilding', value: 'teambuilding', text: 'Team Building' },
    { key: 'communicationandfacilitation', value: 'communicationandfacilitation', text: 'Communication and Facilitation' },
    { key: 'conflictresolution', value: 'conflictresolution', text: 'Conflict Resolution' },
    { key: 'problemsolving', value: 'problemsolving', text: 'Problem-Solving' },
    { key: 'timemanagement', value: 'timemanagement', text: 'Time Management' },
    { key: 'budgetmanagement', value: 'budgetmanagement', text: 'Budget Management' },
    { key: 'coachingandmentorship', value: 'coachingandmentorship', text: 'Coaching and Mentorship' },
    { key: 'processimprovement', value: 'processimprovement', text: 'Process Improvement' },
    { key: 'qualityassurance', value: 'qualityassurance', text: 'Quality Assurance' },
    { key: 'opensourcetechnologies', value: 'opensourcetechnologies', text: 'Open Source Technologies' },
  ];
  
      

  return (
    <Dropdown
      placeholder="Skills"
      fluid
      multiple
      selection
      options={options}
      className="w-full bg-gray-800 rounded border border-gray-700"
      defaultValue={['employment', 'consultation', 'javascript']} // Default selected values
    />
  );
};

export default MultiSelectDropdown;
