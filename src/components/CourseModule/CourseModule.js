import PropTypes from 'prop-types';
import { useState } from 'react';

import { Icon } from 'UI-KIT';

import { Title, Module, SubTitle } from './styles/CourseModuleStyled';

export const CourseModule = ({ position, name, lessons }) => {
  const [isModuleOpen, setModuleOpen] = useState(false);

  const toggleModule = () => setModuleOpen(!isModuleOpen);

  return (
    <Module isOpen={isModuleOpen} onClick={toggleModule}>
      <Title open={isModuleOpen}>
        <span>
          {position + 1}. {name}
        </span>
        <Icon size={24} name="expand_more" />
      </Title>
      {isModuleOpen &&
        lessons?.map((lesson) => (
          <SubTitle key={lesson.id}>
            <span>
              {position + 1}.{lesson.position + 1} {lesson.name}
            </span>
          </SubTitle>
        ))}
    </Module>
  );
};

CourseModule.propTypes = {
  position: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lessons: PropTypes.array.isRequired,
};
