import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

function ErrorAnim(){
    return <AnimatedLottieView source={require('../../assets/errortwo.json')} autoPlay />;
}

export default ErrorAnim;