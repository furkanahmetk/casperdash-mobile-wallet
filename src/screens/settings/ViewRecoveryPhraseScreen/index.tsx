import React, { useState } from 'react';
import { CButton } from 'components';
import { useNavigation } from '@react-navigation/native';
import CConfirmPinModal from 'components/CConfirmPinModal';
import MainRouter from 'navigation/stack/MainRouter';
import { IconEye } from 'assets';

const ShowRecoveryPhrase = () => {
  const { navigate } = useNavigation();
  const [showConfirmPin, setShowConfirmPin] = useState<boolean>(false);

  const onShowRecoveryPhrase = () => {
    setShowConfirmPin(false);
    navigate(MainRouter.SHOW_RECOVERY_PHRASE_SCREEN);
  };
  const showRecoveryPhraseComp = () => {
    return (
      <>
        <CButton>
          <IconEye />
        </CButton>
        {showConfirmPin && (
          <CConfirmPinModal
            isShow={showConfirmPin}
            onConfirm={onShowRecoveryPhrase}
            onCancel={() => setShowConfirmPin(false)}
          />
        )}
      </>
    );
  };
  return { setShowConfirmPin, ShowRecoveryPhrase: showRecoveryPhraseComp };
};

export default ShowRecoveryPhrase;
