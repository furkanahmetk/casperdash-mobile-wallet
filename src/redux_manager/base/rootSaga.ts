import { all } from 'redux-saga/effects';
import {
  watchGetAccountInformation,
  watchGetAccounts,
  watchLoadSelectedWallet,
} from '../user/user_saga';

import {
  watchGetConfigurations,
  watchLoadLocalStorage,
  watchShowMessage,
} from '../main/main_saga';

import {
  watchGetTokenInfoWithBalance,
  watchFetchCSPRMarketInfo,
  watchGetTokenAddressInfo,
  watchPushTransferToLocalStorage,
} from '../home/home_saga';

import { watchFetchNFTInfo } from '../nft/nft_saga';
import {
  watchGetValidatorsInformation,
  watchPushStakeToLocalStorage,
} from 'redux_manager/staking/staking_saga';

import { watchGetPriceHistory } from 'redux_manager/market/market_saga';

export default function* rootSaga() {
  yield all([
    //user
    watchGetAccountInformation(),
    watchGetAccounts(),
    watchLoadSelectedWallet(),

    // main
    watchShowMessage(),
    watchLoadLocalStorage(),
    watchGetConfigurations(),

    //home
    watchGetTokenInfoWithBalance(),
    watchFetchCSPRMarketInfo(),
    watchGetTokenAddressInfo(),
    watchPushTransferToLocalStorage(),
    //wallet

    //NFTs
    watchFetchNFTInfo(),

    //Staking
    watchGetValidatorsInformation(),
    watchPushStakeToLocalStorage(),

    //market
    watchGetPriceHistory(),
  ]);
}
