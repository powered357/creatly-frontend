import PropTypes from 'prop-types';
import { useState } from 'react';

import { Icon } from 'UI-KIT';

import { Title, Module, SubTitle } from './styles/CourseModuleStyles';

export const CourseModule = ({ id, position, name, lessons }) => {
  const [openModule, setOpenModule] = useState(false);
  return (
    <Module key={id} open={openModule} onClick={() => setOpenModule(!openModule)}>
      <Title open={openModule}>
        <span>
          {position + 1}. {name}
        </span>
        <Icon fontSize={24} name="expand_more" />
      </Title>
      {openModule
        ? lessons.map((lesson) => (
            <SubTitle key={lesson.id}>
              <span>
                {position + 1}.{lesson.position + 1} {lesson.name}
              </span>
            </SubTitle>
          ))
        : null}
    </Module>
  );
};

CourseModule.propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lessons: PropTypes.array.isRequired,
};
