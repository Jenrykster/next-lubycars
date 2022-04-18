import { ErrorView } from '@components';
import * as wipAnimation from '@animations/wip-animation';
const LoginPage = () => {
  return (
    <ErrorView
      animationData={wipAnimation}
      title='Work In Progress'
      subtitle='This page is still under construction'
    />
  );
};

export default LoginPage;
