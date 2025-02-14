import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Col, CHeader, CLayout } from 'components';
import { scale } from 'device';
import { colors, textStyles } from 'assets';
import QRCode from 'react-native-qrcode-svg';
import CTextButton from 'components/CTextButton';
import { useSelector } from 'react-redux';
import { getPublicKey } from 'utils/selectors';
import { useCopyToClipboard } from 'utils/hooks/useCopyClipboard';

const ReceiveScreen = () => {
  const publicKey = useSelector(getPublicKey);

  const copyToClipboard = useCopyToClipboard();

  const onCopy = async () => {
    copyToClipboard(publicKey);
  };

  return (
    <CLayout bgColor={colors.cF8F8F8} statusBgColor={colors.cF8F8F8}>
      <CHeader title={'Receive'} style={{ backgroundColor: colors.cF8F8F8 }} />
      <Col mt={16} style={styles.container}>
        <ScrollView
          alwaysBounceVertical={false}
          contentContainerStyle={styles.contentContainerStyle}>
          <QRCode value={publicKey} size={scale(160)} />
          <Text style={styles.caption}>Receiving Address</Text>
          <Text style={styles.title}>{publicKey}</Text>
          <CTextButton text={'Copy'} onPress={onCopy} style={styles.btnCopy} />
        </ScrollView>
      </Col>
    </CLayout>
  );
};

export default ReceiveScreen;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
    backgroundColor: colors.W1,
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: scale(120),
  },
  caption: {
    ...textStyles.Body1,
    color: colors.c828489,
    marginTop: scale(45),
    marginBottom: scale(10),
  },
  title: {
    ...textStyles.Body1,
    paddingHorizontal: scale(16),
    width: scale(375),
    textAlign: 'center',
  },
  btnCopy: {
    marginTop: scale(28),
  },
});
