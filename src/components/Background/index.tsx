import { ImageBackground } from "react-native"

import { styles } from './styles'

import BackgroundImg from '../../assets/background-galaxy.png'

interface Props {
  children: React.ReactNode
}

export function Backgrund({ children }: Props) {
  return (
    <ImageBackground
      source={BackgroundImg}
      defaultSource={BackgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}