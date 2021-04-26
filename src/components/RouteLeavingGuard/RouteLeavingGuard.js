import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';

import { ModalConfirm } from 'COMPONENTS/ModalConfirm';

export const RouteLeavingGuard = ({ when, navigate, shouldBlockNavigation }) => {
  const [isModalOpened, setModalOpen] = useState(false);
  const [lastLocation, setLastLocation] = useState(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.pathname);
    }
  }, [confirmedNavigation, lastLocation]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleBlockedNavigation = (nextLocation) => {
    const blockNavigation =
      typeof shouldBlockNavigation === 'function' ? shouldBlockNavigation(nextLocation) : shouldBlockNavigation;

    if (!confirmedNavigation && blockNavigation) {
      setModalOpen(true);
      setLastLocation(nextLocation);

      return false;
    }

    return true;
  };

  const handleConfirmNavigationClick = () => {
    setModalOpen(false);
    setConfirmedNavigation(true);
  };

  return (
    <>
      <Prompt when={when} message={handleBlockedNavigation} />
      <ModalConfirm
        title="Уйти без сохранения?"
        text="У вас есть несохраненные изменения. Вы уверены что хотите покинуть эту страницу без сохранения?"
        isOpen={isModalOpened}
        closeModal={closeModal}
        successFunc={handleConfirmNavigationClick}
        cancelFunc={closeModal}
      />
    </>
  );
};

RouteLeavingGuard.propTypes = {
  when: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
  shouldBlockNavigation: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
};

RouteLeavingGuard.defaultProps = {
  when: false,
};
