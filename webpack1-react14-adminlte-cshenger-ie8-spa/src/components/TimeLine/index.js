import React, { Component, PropTypes } from 'react'
import TimeLabel from './TimeLabel'
import TimelineItem from './TimelineItem/TimelineItem'
import './timeline.css'

class TimeLine extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let timelineInfo = []

    if (this.props.children) {
      timelineInfo = this.props.children
    } else {
      this.props.timelineInfo.map((timelineElement, iterator) => {
        if (timelineElement.endDate) {
          timelineInfo.push(<TimeLabel key={"label1"+iterator} theme="bg-red" content={timelineElement.endDate} />)
        }

        timelineElement.items.map((item, i) => {
          timelineInfo.push(
						<TimelineItem
							key={"item"+iterator+'.'+i}
							icon={item.icon}
							iconTheme={item.iconTheme}
							time= {item.time}
							header={item.header}
							body={item.body}
						  footer={item.footer} >
						</TimelineItem>
					)
        })

        if (timelineElement.startDate) {
          timelineInfo.push(<TimeLabel key={"label2"+iterator} theme="bg-green" content={timelineElement.startDate} />)
        }
      })
    }

    return (
      <div className="col-md-12">
        <ul className="timeline">
          {timelineInfo}
          <li>
            <i className="fa fa-clock-o bg-gray"></i>
          </li>
        </ul>
      </div>
    )
  }
}

export default TimeLine
