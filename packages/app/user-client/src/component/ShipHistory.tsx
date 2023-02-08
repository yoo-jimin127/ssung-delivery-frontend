import styled from '@emotion/styled'
import { Flex } from './Layout'
import Progress from '../component/ProgressBar'
import { Text } from './Text'
import { ShipHistoryType } from '../Model/ship'

interface ShipHistoryProps {
  history: ShipHistoryType[]
}

const ShipHistory = (props: ShipHistoryProps) => {
  return (
    <ShipHistoryContainer>
      <div style={{ position: 'sticky', top: 0 }}>
        <Progress progress="80%" orient="vertical" />
      </div>

      <Flex
        flexDirection={'column'}
        gap={'1rem'}
        style={{ marginLeft: '1rem' }}
      >
        {props.history.map((item) => (
          <Flex flexDirection={'column'} gap={'0.25rem'}>
            <Text gray={!item.done}>{item.state}</Text>
            <Text size="sm" gray={!item.done}>
              {item.date}
            </Text>
          </Flex>
        ))}
      </Flex>
    </ShipHistoryContainer>
  )
}

export default ShipHistory

const ShipHistoryContainer = styled.div`
  padding: 14px;
  width: 140px;
  height: 140px;
  overflow: scroll;
  position: relative;
`
