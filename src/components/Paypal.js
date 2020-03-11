import React from 'react';
import PaypalButton from './PaypalButton';

const CLIENT = {
  sandbox: 'AUtcD2ERgnQFXDWlr6cQ079ME8dsVWUe8fbPeGFsieMpgmXNwvNxFevH17B7AL4Lcv2Vd1pwxuUPTmm2',
  production: 'xxxXXX',
};
const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';


class MyApp extends React.Component {
  render() {
    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);
    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);
    const onCancel = (data) =>
      console.log('Cancelled payment!', data);
    return (
      <div>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}
export default MyApp;