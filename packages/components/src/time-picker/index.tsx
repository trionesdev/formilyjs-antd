import { connect, mapProps, mapReadPretty } from '@formily/react'
import {
  TimePicker as AntdTimePicker,
  TimePickerProps as AntdTimePickerProps,
  TimeRangePickerProps,
} from 'antd'
import dayjs from 'dayjs'
import { PreviewText } from '../preview-text'
import { dayjsable, formatDayjsValue } from '../__builtins__'

type ComposedTimePicker = typeof AntdTimePicker & {
  RangePicker?: typeof AntdTimePicker.RangePicker
}

const mapTimeFormat = function () {
  return (props: any) => {
    const format = props['format'] || 'HH:mm:ss'
    const onChange = props.onChange
    return {
      ...props,
      format,
      value: dayjsable(props.value, format),
      onChange: (value: dayjs.Dayjs | dayjs.Dayjs[]) => {
        if (onChange) {
          onChange(formatDayjsValue(value, format))
        }
      },
    }
  }
}

const InternalTimePicker = connect(
  AntdTimePicker,
  mapProps(mapTimeFormat()),
  mapReadPretty(PreviewText.TimePicker)
) as unknown as typeof AntdTimePicker

const RangePicker = connect(
  AntdTimePicker.RangePicker,
  mapProps(mapTimeFormat()),
  mapReadPretty(PreviewText.TimeRangePicker)
) as unknown as typeof AntdTimePicker.RangePicker

export const TimePicker: ComposedTimePicker = Object.assign(
  InternalTimePicker,
  {
    RangePicker,
  }
)

export type { AntdTimePickerProps, TimeRangePickerProps }

export default TimePicker
