import Timeline, { CustomHeader, DateHeader, TimelineHeaders, TodayMarker } from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { useState } from 'react'
import deplierBas from '../icones/deplierBas.png'
import deplierHaut from '../icones/deplierHaut.png'
import Context from './Context'


export default function TimelineTest() {

  const [state, setState] = useState({
    openGroups: []
  })

  const groups = [
    {
      id: 1,
      title: 'A3-3423AF',
      root: true,
      parent: null
    },
    {
      id: 2,
      title: 'xxxx LEAP-1B',
      parent: 1,
    },
    {
      id: 3,
      title: 'xxxx 131-9D',
      parent: 1,
    },
    {
      id: 4,
      title: 'xxxx XB-70A',
      parent: 1,
    },
    {
      id: 5,
      title: 'A3-1618AF',
      root: true,
      parent: null
    },
    {
      id: 6,
      title: 'A3-1618AF  xxxx',
      parent: 5,
    }]

  const items = [
    {
      id: 1,
      group: 1,
      title: '',
      start_time: moment().add(-300, 'days'),
      end_time: moment().add(-20, 'days'),
      bgColor:'#DF7176'
    }, 
    {
      id: 11,
      group: 1,
      title: '',
      start_time: moment().add(-250, 'days'),
      end_time: moment().add(-60, 'days'),
      bgColor:'#e52828',
      height:10
    },
    {
      id: 2,
      group: 2,
      title: '',
      start_time: moment().add(-280, 'days'),
      end_time: moment().add(-200, 'days')
    },
    {
      id: 3,
      group: 3,
      title: '',
      start_time: moment().add(-190, 'days'),
      end_time: moment().add(-100, 'days')
    },
    {
      id: 4,
      group: 4,
      title: '',
      start_time: moment().add(-65, 'days'),
      end_time: moment().add(-30, 'days')
    },
    {
      id: 5,
      group: 5,
      title: '',
      start_time: moment().add(-425, 'days'),
      end_time: moment().add(-145, 'days'),
      bgColor: "#64c949"
    },
    {
      id: 6,
      group: 6,
      title: '',
      start_time: moment().add(-300, 'days'),
      end_time: moment().add(-170, 'days'),
      canMove: true,
      canResize: true,
      canChangeGroup: true,
      itemProps: {
        // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
        'data-custom-attribute': 'Random content',
        'aria-hidden': true,
        onDoubleClick: () => { alert('You clicked double!') },
        className: 'weekend'
      }
    }
  ];

  const toggleGroups = id => {
    const { openGroups } = state;
    setState({
      openGroups: {
        ...openGroups, [id]: !openGroups[id]
      }
    }
    )
  };

  const { openGroups } = state;
  const newGroups = groups
    .filter((group) => group.root || openGroups[group.parent])
    .map(group => {
      return Object.assign({}, group, {
        title : group.root?(<div
          onClick={() => toggleGroups(parseInt(group.id))}
          style={{ cursor:'pointer' }}>
            { group.title }
            { openGroups[parseInt(group.id)]? <img src={deplierHaut} alt="t"/> 
            : <img src={deplierBas} alt="e"/> }
        </div>)
        :
        (<div>
          { group.title }
        </div>)
        }
      )
      
    });

    const itemRenderer = ({
      item,
      itemContext,
      getItemProps,
      getResizeProps,
    }) => {
      //const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()
      const backgroundColor = item.bgColor?? "blue";
      //const backgroundColor = itemContext.selected ? itemContext.dragging ? 'red' : item.selectedBgColor : item.bgColor;
      console.log(itemContext.dimensions.top)
      const height = item.height?? 15;
      //const borderColor = itemContext.resizing ? 'red' : item.color;
      return (
        <div 
          {...getItemProps({
            style: {
              backgroundColor,
              color: 'black',
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 3,
              maxHeight:height,
              borderLeftWidth: itemContext.selected ? 3 : 1,
              borderRightWidth: itemContext.selected ? 3 : 1,
            }
          }) }
        >
        </div>
      )
    }

    return (
      <div>
        <div>
          <Timeline
            groups={newGroups}
            items={items}
            defaultTimeStart={moment().add(-2, 'year')}
            defaultTimeEnd={moment().add(1, 'year')}
            itemRenderer={itemRenderer}
          >
            <TimelineHeaders className="header-background">

              <CustomHeader height={50} headerData={{ someData: 'data' }} unit="year">
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
      </div>
    );
  //}

}