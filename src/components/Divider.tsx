import { Icon, ChakraProps } from '@chakra-ui/react'

interface DividerProps {
  alt?: boolean
  chakraProps?: ChakraProps
}

export default function Divider({ alt = false, chakraProps }: DividerProps) {
  const defaultStyles = {
    pos: 'absolute',
    top: 0,
    left: 0,
    height: 200,
    width: '200%',
    transformOrigin: '0% 0%',
    transform: 'scaleY(0.5)',
  }

  return (
    <>
      <style>
        {`
          @keyframes moveWaves {
            0% { transform: translateX(0) scaleY(0.5); }
            100% { transform: translateX(-50%) scaleY(0.5); }
          }
          .wave-animation {
            animation: moveWaves 40s linear infinite;
          }
        `}
      </style>
      {alt ? (
        <Icon
          {...chakraProps}
          className="wave-animation"
          sx={defaultStyles}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z M1200,0H1200V120H1481.94C1772.9,116.24,1802.45,3.86,1802.45,3.86h0S1832,116.24,2123,120h277Z"
            className="shape-fill"
            fill={chakraProps?.color as string}
          ></path>
        </Icon>
      ) : (
        <Icon
          {...chakraProps}
          className="wave-animation"
          sx={defaultStyles}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
        >
          <path d={duplicatedWavePath1} opacity=".25" fill={chakraProps?.color as string}></path>
          <path d={duplicatedWavePath2} opacity=".5" fill={chakraProps?.color as string}></path>
          <path d={duplicatedWavePath3} fill={chakraProps?.color as string}></path>
        </Icon>
      )}
    </>
  )
}

// Move these constants to the top of the file
const wavePath1 =
  'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
const duplicatedWavePath1 = `${wavePath1} M1200,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C1638.64,32.43,1712.34,53.67,1783,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C2189.49,25,2313-14.29,2400,52.47V0Z`

const wavePath2 =
  'M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
const duplicatedWavePath2 = `${wavePath2} M1200,0V15.81C1213,36.92,1227.64,56.86,1247.69,72.05,1299.41,111.27,1365,111,1424.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z`

const wavePath3 =
  'M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
const duplicatedWavePath3 = `${wavePath3} M1200,0V5.63C1349.93,59,1514.09,71.32,1675.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C2027.93,77.22,2086,95.24,2151.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z`

// Update the path elements in the non-alt Icon component:
