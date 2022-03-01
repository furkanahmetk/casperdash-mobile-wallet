import {scale} from 'device';
import {StyleSheet} from 'react-native';

import IconBack from './images/ic_back.svg';
import IconMenuHome from './images/ic_menu_home.svg';
import IconMenuHomeActive from './images/ic_menu_home_active.svg';
import IconMenuStaking from './images/ic_menu_staking.svg';
import IconMenuStakingActive from './images/ic_menu_staking_active.svg';
import IconMenuNFT from './images/ic_menu_nft.svg';
import IconMenuNFTActive from './images/ic_menu_nft_active.svg';
import IconMenuMarket from './images/ic_menu_market.svg';
import IconMenuMarketActive from './images/ic_menu_market_active.svg';
import IconMenuKeyManager from './images/ic_menu_key_manager.svg';
import IconMenuKeyManagerActive from './images/ic_menu_key_manager_active.svg';
import IconArrowLeft from './images/ic_arrow_left.svg';
import IconArrowRight from './images/ic_arrow_right.svg';
import IconPlusCircle from './images/ic_plus_circle.svg';
import IconConnectLedger from './images/ic_connect_ledger.svg';
import IconImportPhrase from './images/ic_import_phrase.svg';
import IconMessageSuccess from './images/ic_message_success.svg';
import IconMessageWarning from './images/ic_message_warning.svg';
import IconMessageError from './images/ic_message_error.svg';
import IconSetting from './images/ic_setting.svg';
import IconScanCode from './images/ic_scan_code.svg';
import IconPencilFilled from './images/ic_pencil_filled.svg';
import IconCopy from './images/ic_copy.svg';
import IconEye from './images/ic_eye.svg';
import IconEyeOff from './images/ic_eye_off.svg';
import IconSend from './images/ic_send.svg';
import IconReceive from './images/ic_receive.svg';
import IconSwap from './images/ic_swap.svg';
import IconLogo from './images/ic_logo.svg';
import IconLock from './images/ic_lock.svg';
import IconAboutUs from './images/ic_about_us.svg';
import IconCircleRight from './images/ic_circle_right.svg';
import IconCircleClose from './images/ic_close_circle.svg';
import IconStatusSend from './images/ic_status_send.svg';
import IconStatusReceive from './images/ic_status_receive.svg';
import IconStatusSwap from './images/ic_status_swap.svg';

const images = {
    avatar: require('./images/avatar.png'),
    intro1: require('./images/intro1.png'),
    intro2: require('./images/intro2.png'),
    intro3: require('./images/intro3.png'),
    logo: require('./images/logo.png'),
    symbol_cspr: require('./images/ic_symbol_CSPR.png'),
    nodata: require('./images/ic_no_data.png'),
};

const colors = {
    c000000: '#000000',
    cFFFFFF: '#FFFFFF',
    c26273C: '#26273C',
    cB2B2B2: '#B2B2B2',
    cE0E0E0: '#E0E0E0',
    c828489: '#828489',
    c232635: '#232635',
    cF8F8F8: '#F8F8F8',

    N1: '#000000',
    N2: '#353945',
    N3: '#777E91',
    N4: '#D1D7E7',
    N5: '#F6F7FA',
    N6: '#FCFCFD',
    N700: '#232635',

    W1: '#FFFFFF',

    R1: '#FA2852',
    R2: '#FBD2D3',
    R3: '#E1372D',

    G1: '#83BD67',
    G2: '#DAEBD1',

    Y1: '#FFCD1A',

    B1: '#3772FF',
    B2: '#D7E3FF',
    B3: '#0021A5',

    P1: '#9F9DF3',

    Neutrals2: '#23262F',
    Neutrals8: '#FCFCFD',

    gray6: '#F2F2F2',
};

const fonts = {
    Poppins: {
        bold: 'Poppins-Bold',
        regular: 'Poppins-Regular',
        medium: 'Poppins-Medium',
        semiBold: 'Poppins-SemiBold',
    },
    DMSans: {
        bold: 'DMSans-Bold',
        regular: 'DMSans-Regular',
        medium: 'DMSans-Medium',
    },
    Lato: {
        light: 'Lato-Light',
        bold: 'Lato-Bold',
        regular: 'Lato-Regular',
    },
};

const textStyles = StyleSheet.create({
    Body1: {
        fontFamily: fonts.Poppins.regular,
        fontWeight: '400',
        fontSize: scale(16),
        fontStyle: 'normal',
        color: colors.N2,
    },
    Body2: {
        fontFamily: fonts.Poppins.regular,
        fontWeight: '400',
        fontSize: scale(14),
        fontStyle: 'normal',
        color: colors.N2,
    },
    Sub1: {
        fontFamily: fonts.Poppins.semiBold,
        fontWeight: '500',
        fontSize: scale(16),
        fontStyle: 'normal',
        color: colors.N2,
    },
    Sub2: {
        fontFamily: fonts.Poppins.medium,
        fontWeight: '600',
        fontSize: scale(14),
        fontStyle: 'normal',
        color: colors.N2,
    },
    Cap2: {
        fontFamily: fonts.Poppins.regular,
        fontWeight: '400',
        fontSize: scale(10),
        fontStyle: 'normal',
        color: colors.N2,
    },
    H3: {
        fontFamily: fonts.Poppins.semiBold,
        fontWeight: '600',
        fontSize: scale(32),
        fontStyle: 'normal',
        color: colors.N2,
    },
    H5: {
        fontFamily: fonts.Poppins.medium,
        fontWeight: '600',
        fontSize: scale(24),
        fontStyle: 'normal',
        color: colors.N2,
    },
    H6: {
        fontFamily: fonts.Poppins.medium,
        fontWeight: '600',
        fontSize: scale(20),
        fontStyle: 'normal',
        color: colors.N2,
    },
});

export {
    colors,
    fonts,
    images,
    textStyles,
    IconBack,
    IconMenuHome,
    IconMenuHomeActive,
    IconMenuStaking,
    IconMenuStakingActive,
    IconMenuNFT,
    IconMenuNFTActive,
    IconMenuMarket,
    IconMenuMarketActive,
    IconMenuKeyManager,
    IconMenuKeyManagerActive,
    IconArrowLeft,
    IconArrowRight,
    IconImportPhrase,
    IconPlusCircle,
    IconConnectLedger,
    IconMessageSuccess,
    IconMessageWarning,
    IconMessageError,
    IconScanCode,
    IconSetting,
    IconEyeOff,
    IconEye,
    IconPencilFilled,
    IconCopy,
    IconReceive,
    IconSend,
    IconSwap,
    IconLogo,
    IconAboutUs,
    IconLock,
    IconCircleRight,
    IconCircleClose,
    IconStatusSend,
    IconStatusReceive,
    IconStatusSwap,
};
