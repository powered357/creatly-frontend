import PropTypes from 'prop-types';
import { useState } from 'react';

import { Icon } from 'UI-KIT';

import { Title, Module, SubTitle, LessonIndex } from './styles/CourseModuleStyled';

export const CourseModule = ({ name, lessons }) => {
  const [isModuleOpen, setModuleOpen] = useState(false);

  const toggleModule = () => setModuleOpen(!isModuleOpen);

  return (
    <Module isOpen={isModuleOpen} onClick={toggleModule}>
      <Title open={isModuleOpen}>
        <span>{name}</span>
        <Icon size={24} name="expand_more" />
      </Title>
      {isModuleOpen &&
        lessons?.map((lesson, index) => (
          <SubTitle key={lesson.id}>
            <span>
              <LessonIndex>{index + 1}</LessonIndex>. {lesson.name}
            </span>
          </SubTitle>
        ))}
    </Module>
  );
};

CourseModule.propTypes = {
  name: PropTypes.string.isRequired,
  lessons: PropTypes.array.isRequired,
};
