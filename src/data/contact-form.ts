/**
 * Contact form delivery (Web3Forms: https://web3forms.com).
 *
 * The access key is meant to be public: it only lets this form send messages
 * to the inbox it was created for. Get one at web3forms.com by entering the
 * email address that should receive the messages, then paste it here.
 *
 * While the key is empty the form shows an "email me instead" note and does
 * not pretend to send anything.
 */
export const contactForm = {
  web3formsKey: '36214173-7c1f-4e8b-9edd-92adcafbed76',
  endpoint: 'https://api.web3forms.com/submit',
  /** Shown as the sender name in the notification email. */
  fromName: 'sanjeev.site contact form',
  /** Where visitors without JavaScript land after sending. */
  redirectAfterSend: 'https://sanjeev.site/contact/?sent=1',
};
