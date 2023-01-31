import Timeline, { CustomHeader, DateHeader, TimelineHeaders, TodayMarker } from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { redirect } from 'react-router-dom'

export default function TimelineTest(){

    const groups = [{ id: 1, title: 'group 1' },
    { id: 1.1, title: 'group 1.1',  }, 
    { id: 2, title: 'group 2' }, 
    { id: 3, title: 'group 3' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment().add(-200, 'days'),
    end_time: moment().add(-1, 'days')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-195, 'days'),
    end_time: moment().add(15, 'days')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(-303, 'days'),
    end_time: moment().add(-12, 'days'),
    
    canMove: false,
    canResize: false,
    canChangeGroup: false,
  },
  {
    id: 4,
    group: 3,
    title: 'item 4',
    start_time: moment().add(-43, 'days'),
    end_time: moment().add(-1, 'days'),
    canMove: true,
    canResize: true,
    canChangeGroup: true,
    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      'data-custom-attribute': 'Random content',
      'aria-hidden': true,
      onDoubleClick: () => { alert('You clicked double!') },
      className: 'weekend',
      style: {
        background: 'fuchsia'
      }
    }
  }
]

    return (
    <div>
      <div>
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-3, 'year')}
          defaultTimeEnd={moment().add(1, 'year')}
        >
          <TimelineHeaders className="header-background">
            
          <CustomHeader height={50} headerData={{someData: 'data'}} unit="year">
          {({
            headerContext: { intervals },
            getRootProps,
            getIntervalProps,
            showPeriod,
            data,
          }) => {
            return (
              <div {...getRootProps()}>
                {intervals.map(interval => {
                  const intervalStyle = {
                    lineHeight: '30px',
                    textAlign: 'center',
                    borderLeft: '1px solid black',
                    cursor: 'pointer',
                    backgroundColor: 'Turquoise',
                    color: 'white'
                  }
                  return (
                    <div
                      onClick={() => {
                        showPeriod(interval.startTime, interval.endTime)
                      }}
                      {...getIntervalProps({
                        interval,
                        style: intervalStyle
                      })}
                    >
                      <div className="sticky">
                        {interval.startTime.format('YYYY')}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          }}
    </CustomHeader>
      <TodayMarker />
            <DateHeader labelFormat="YYYY" unit="year" height={20} />
            <DateHeader labelFormat="MMM" unit="month" height={20} />
        </TimelineHeaders>
        </Timeline>
      </div>
    </div>)
}