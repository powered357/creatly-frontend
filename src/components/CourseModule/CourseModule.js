import PropTypes from 'prop-types';
import { useState } from 'react';

import { Icon } from 'UI-KIT';

import { Title, Module, SubTitle } from './styles/CourseModuleStyles';

export const CourseModule = ({ id, name, lessons, moduleIndex }) => {
  const [isModuleOpen, setModuleOpen] = useState(false);
  return (
    <Module key={id} isOpen={isModuleOpen} onClick={() => setModuleOpen(!isModuleOpen)}>
      <Title open={isModuleOpen}>
        <span>
          {moduleIndex + 1}. {name}
        </span>
        <Icon size={24} name="expand_more" />
      </Title>
      {isModuleOpen &&
        lessons.map((lesson, lessonIndex) => (
          <SubTitle key={lesson.id}>
            <span>
              {moduleIndex + 1}.{lessonIndex + 1} {lesson.name}
            </span>
          </SubTitle>
        ))}
    </Module>
  );
};

CourseModule.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lessons: PropTypes.array.isRequired,
  moduleIndex: PropTypes.number.isRequired,
};
